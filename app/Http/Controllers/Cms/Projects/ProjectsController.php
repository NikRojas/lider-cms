<?php

namespace App\Http\Controllers\Cms\Projects;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\Project\ProjectRequest;
use Illuminate\Support\Facades\Storage;

use App\Http\Traits\CmsTrait;
use App\Project;

class ProjectsController extends Controller
{
    use CmsTrait;

    public function index(){
        return view("pages.projects.index");
    }

    public function create(){
        return view("pages.projects.create"); 
    }

    public function order(){
    }

    public function getAll(){
        $elements = Project::with('statusRel','ubigeoRel')->withCount('galleryRel','filesRel','tipologiesRel')->orderBy('index','asc')->get();
        return response()->json($elements);
    }

    public function edit($element){
        $element = Project::where('slug_es',$element)->firstOrFail();
        $element = $element->load('advisorsRel','banksRel','featuresRel');
        $element["financial_entities"] = $element->banksRel->pluck('pivot.bank_id');
        $element["advisors"] = $element->advisorsRel->pluck('pivot.advisor_id');
        $element["features"] = $element->featuresRel->pluck('pivot.feature_id');
        return view("pages.projects.edit", compact('element')); 
    }

    public function read($element){
        $element = Project::where('slug_es',$element)->firstOrFail();
        $element = $element->load('advisorsRel','banksRel','featuresRel','ubigeoRel','statusRel');
        return view("pages.projects.read", compact('element')); 
    }

    public function store(ProjectRequest $request){
        $project = request(['name_es',"description_en","description_es",'url_video','name_en','slug_en','slug_es',"rooms_es","rooms_en","footage_en","footage_es","url_google_maps","url_waze","text_place_es",
        "text_place_en","project_status_id","location","price_total","price","price_total_foreign","iframe_map","map_indications_es","map_indications_en",
        "sales_room_es","sales_room_en","schedule_attention_es","schedule_attention_en"]);
        
        $logoName = $this->setFileName('l-',$request->file('logo'));
        $storeLogo = Storage::disk('public')->putFileAs('img/projects/',$request->file('logo'),$logoName);

        $imageBanner = $this->setFileName('bes-',$request->file('banner'));
        $storeBanner = Storage::disk('public')->putFileAs('img/projects/',$request->file('banner'),$imageBanner);

        $brochureName = $this->setFileName('bro-',$request->file('brochure'));
        $storeBrochure = Storage::disk('public')->putFileAs('files/projects/',$request->file('brochure'),$brochureName);

        $images = [];
        for ($i=0; $i < $request->images_count; $i++) { 
            $correlative = $i + 1;
            ${$correlative.'Name'} = $this->setFileName('is-'.$correlative,$request->file('images'.$i));
            $storeLogo = Storage::disk('public')->putFileAs('img/projects/',$request->file('images'.$i),${$correlative.'Name'});
            if(!${$correlative.'Name'}){
                $request->session()->flash('error', trans('custom.message.create.error', ['name' => trans('custom.attribute.project')]));
                Storage::disk('public')->delete('img/projects/'.${$correlative.'Name'});
                return response()->json(["route" => route('cms.projects.index')],500);
            }
            $images[] = ${$correlative.'Name'};
        }
        if(!$storeLogo || !$storeBanner || !$storeBrochure){
            $request->session()->flash('error', trans('custom.message.create.error', ['name' => trans('custom.attribute.project')]));
            Storage::disk('public')->delete('img/projects/'.$logoName);
            Storage::disk('public')->delete('img/projects/'.$imageBanner);
            Storage::disk('public')->delete('files/projects/'.$brochureName);
            return response()->json(["route" => route('cms.projects.index')],500);
        }

        $project = array_merge($project,["code_ubigeo" => $request->department.$request->province.$request->district]);
        $index = $this->getMaxIndex(Project::selectRaw('MAX(id),MAX(`index`) as "index"')->get());

        $project = array_merge($project,["images" => json_encode($images), "logo"=>$logoName,"brochure"=>$brochureName,"index" => $index,"banner"=>$imageBanner]);
        try{
            $project = Project::UpdateOrCreate($project); 
        }
        catch(\Exception $e){
            Storage::disk('public')->delete('img/projects/'.$logoName);
            Storage::disk('public')->delete('img/projects/'.$imageBanner);
            Storage::disk('public')->delete('files/projects/'.$brochureName);
            foreach ($images as $key => $value) {
                Storage::disk('public')->delete('img/projects/'.$value);
            }
            $request->session()->flash('error', trans('custom.message.create.error', ['name' => trans('custom.attribute.project')]));
            return response()->json(["route" => route('cms.projects.index')],500);
        }
        $advisors = json_decode($request->advisors);
        $features = json_decode($request->features);
        $financial_entities = json_decode($request->financial_entities);
        try{
            foreach ($advisors as $key => $value) {
                $project->advisorsRel()->attach($value);
            }
            foreach ($features as $key => $value) {
                $project->featuresRel()->attach($value);
            }
            foreach ($financial_entities as $key => $value) {
                $project->banksRel()->attach($value);
            }
            $request->session()->flash('success', trans('custom.message.create.success', ['name' => trans('custom.attribute.project')]));
            return response()->json(["route" => route('cms.projects.index')]);
        }
        catch(\Exception $e){
            Storage::disk('public')->delete('img/projects/'.$logoName);
            Storage::disk('public')->delete('img/projects/'.$imageBanner);
            Storage::disk('public')->delete('files/projects/'.$brochureName);
            foreach ($images as $key => $value) {
                Storage::disk('public')->delete('img/projects/'.$value);
            }
            $request->session()->flash('error', trans('custom.message.create.error', ['name' => trans('custom.attribute.project')]));
            return response()->json(["route" => route('cms.projects.index')],500);
        }
    }

    public function update(ProjectRequest $request,Project $element){
        $request_project = request(['name_es',"description_en","url_video","description_es",'name_en','slug_en','slug_es',"rooms_es","rooms_en","footage_en","footage_es","url_google_maps","url_waze","text_place_es",
        "text_place_en","project_status_id","location","price_total","price","price_total_foreign","iframe_map","map_indications_es","map_indications_en",
        "sales_room_es","sales_room_en","schedule_attention_es","schedule_attention_en"]);
        
        if($request->hasFile('logo')){
            $logoName = $this->setFileName('l-',$request->file('logo'));
            $storeLogo = Storage::disk('public')->putFileAs('img/projects/',$request->file('logo'),$logoName);
            if(!$storeLogo){
                Storage::disk('public')->delete('img/projects/'.$logoName);
                $request->session()->flash('error', trans('custom.message.update.error', ['name' => trans('custom.attribute.project')]));
                return response()->json(["route" => route('cms.projects.index')],500);    
            }
            $request_project = array_merge($request_project,["logo" => $logoName]);   
        }  
        else{
            $request_project = array_merge($request_project,["logo" => $element->logo]);   
        }

        if($request->hasFile('banner')){
            $imageBanner = $this->setFileName('bes-',$request->file('banner'));
            $storeBanner = Storage::disk('public')->putFileAs('img/projects/',$request->file('banner'),$imageBanner);
            if(!$storeBanner){
                Storage::disk('public')->delete('img/projects/'.$imageBanner);
                $request->session()->flash('error', trans('custom.message.update.error', ['name' => trans('custom.attribute.project')]));
                return response()->json(["route" => route('cms.projects.index')],500);    
            }
            $request_project = array_merge($request_project,["banner" => $imageBanner]);   
        }  
        else{
            $request_project = array_merge($request_project,["banner" => $element->banner]);   
        }

        if($request->hasFile('brochure')){
            $brochureName = $this->setFileName('ben-',$request->file('brochure'));
            $storeBrochure = Storage::disk('public')->putFileAs('img/projects/',$request->file('brochure'),$brochureName);
            if(!$storeBrochure){
                Storage::disk('public')->delete('img/projects/'.$brochureName);
                $request->session()->flash('error', trans('custom.message.update.error', ['name' => trans('custom.attribute.project')]));
                return response()->json(["route" => route('cms.projects.index')],500);    
            }
            $request_project = array_merge($request_project,["brochure" => $brochureName]);   
        }  
        else{
            $request_project = array_merge($request_project,["brochure" => $element->brochure]);   
        }
        $images = [];
        $imagesToRemove = [];
        $imagesNotUpdated = [];
        for ($i=0; $i < $request->images_count; $i++) { 
            $name = 'images'.$i;
            $imagesNotUpdated[] = $request->$name; 
        }
        $imagesToRemove = array_diff($element->images_format,$imagesNotUpdated);
        foreach ($imagesToRemove as $key => $value) {
            Storage::disk('public')->delete('img/projects/'.$value);
        }
        for ($i=0; $i < $request->images_count; $i++) { 
            $correlative = $i + 1;
            $name = 'images'.$i;
            if($request->hasFile('images'.$i)){
                ${$correlative.'Name'} = $this->setFileName('is-'.$correlative,$request->file('images'.$i));
                $storeLogo = Storage::disk('public')->putFileAs('img/projects/',$request->file('images'.$i),${$correlative.'Name'});
                if(!${$correlative.'Name'}){
                    $request->session()->flash('error', trans('custom.message.create.error', ['name' => trans('custom.attribute.project')]));
                    Storage::disk('public')->delete('img/projects/'.${$correlative.'Name'});
                    return response()->json(["route" => route('cms.projects.index')],500);
                }
                $images[] = ${$correlative.'Name'};
            }
            else{
                $images[] = $request->$name;
            }
        }
        $request_project = array_merge($request_project,["images" => json_encode($images)]);
        
        if($request->hasFile('banner') && $element->banner){
            Storage::disk('public')->delete('img/projects/'.$element->banner);
        } 
        if($request->hasFile('brochure') && $element->brochure){
            Storage::disk('public')->delete('files/projects/'.$element->brochure);
        } 
        if($request->hasFile('logo') && $element->logo){
            Storage::disk('public')->delete('img/projects/'.$element->logo);
        } 
        $request_project = array_merge($request_project,["code_ubigeo" => $request->department.$request->province.$request->district]);
        try{
            $project = Project::UpdateOrCreate(["id"=>$element->id],$request_project); 
        }
        catch(\Exception $e){
            $request->session()->flash('error', trans('custom.message.update.error', ['name' => trans('custom.attribute.project')]));
            return response()->json(["route" => route('cms.projects.index')],500);
        }
        $advisors = json_decode($request->advisors);
        $features = json_decode($request->features);
        $financial_entities = json_decode($request->financial_entities);
        try{
            $project->advisorsRel()->sync([]);
            foreach ($advisors as $key => $value) {
                $project->advisorsRel()->attach($value);
            }
            $project->featuresRel()->sync([]);
            foreach ($features as $key => $value) {
                $project->featuresRel()->attach($value);
            }
            $project->banksRel()->sync([]);
            foreach ($financial_entities as $key => $value) {
                $project->banksRel()->attach($value);
            }
            $request->session()->flash('success', trans('custom.message.update.success', ['name' => trans('custom.attribute.project')]));
            return response()->json(["route" => route('cms.projects.index')]);
        }
        catch(\Exception $e){
            $request->session()->flash('error', trans('custom.message.update.error', ['name' => trans('custom.attribute.project')]));
            return response()->json(["route" => route('cms.projects.index')],500);
        }
    }

}