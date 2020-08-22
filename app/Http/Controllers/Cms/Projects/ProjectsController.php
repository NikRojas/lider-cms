<?php

namespace App\Http\Controllers\Cms\Projects;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\Project\ProjectRequest;
use Illuminate\Support\Facades\Storage;

use App\Http\Traits\CmsTrait;
use App\Project;
use Illuminate\Support\Facades\File;

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
        $elements = Project::with('statusRel','ubigeoRel')->orderBy('index','asc')->get();
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

    public function get(Project $element){
        //return response()->json($element);
    }

    public function store(ProjectRequest $request){
        $project = request(['name_es',"description_en","description_es",'name_en','slug_en','slug_es',"rooms_es","rooms_en","footage_en","footage_es","url_google_maps","url_waze","text_place_es",
        "text_place_en","project_status_id","location","price_total","price","price_total_foreign","latitude","longitude","map_indications_es","map_indications_en",
        "sales_room_es","sales_room_en","schedule_attention_es","schedule_attention_en"]);
        
        $logoName = $this->setFileName('l-',$request->file('logo'));
        $storeLogo = Storage::disk('public')->putFileAs('img/projects/',$request->file('logo'),$logoName);

        $imageBannerEs = $this->setFileName('bes-',$request->file('banner_es'));
        $storeBannerEs = Storage::disk('public')->putFileAs('img/projects/',$request->file('banner_es'),$imageBannerEs);

        $imageBannerEn = $this->setFileName('ben-',$request->file('banner_en'));
        $storeBannerEn = Storage::disk('public')->putFileAs('img/projects/',$request->file('banner_en'),$imageBannerEn);

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
                return response()->json(["route" => route('cms.project.index')],500);
            }
            $images[] = ${$correlative.'Name'};
        }
        if(!$storeLogo || !$storeBannerEs || !$storeBannerEn || !$storeBrochure){
            $request->session()->flash('error', trans('custom.message.create.error', ['name' => trans('custom.attribute.project')]));
            Storage::disk('public')->delete('img/projects/'.$logoName);
            Storage::disk('public')->delete('img/projects/'.$imageBannerEs);
            Storage::disk('public')->delete('img/projects/'.$imageBannerEn);
            Storage::disk('public')->delete('files/projects/'.$brochureName);
            return response()->json(["route" => route('cms.project.index')],500);
        }

        $project = array_merge($project,["code_ubigeo" => $request->department.$request->province.$request->district]);
        $index = $this->getMaxIndex(Project::selectRaw('MAX(id),MAX(`index`) as "index"')->get());

        $project = array_merge($project,["images" => json_encode($images), "logo"=>$logoName,"brochure"=>$brochureName,"index" => $index,"banner_en"=>$storeBannerEn,"banner_es"=>$storeBannerEs]);
        try{
            $project = Project::UpdateOrCreate($project); 
        }
        catch(\Exception $e){
            Storage::disk('public')->delete('img/projects/'.$logoName);
            Storage::disk('public')->delete('img/projects/'.$imageBannerEs);
            Storage::disk('public')->delete('img/projects/'.$imageBannerEn);
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
            Storage::disk('public')->delete('img/projects/'.$imageBannerEs);
            Storage::disk('public')->delete('img/projects/'.$imageBannerEn);
            Storage::disk('public')->delete('files/projects/'.$brochureName);
            foreach ($images as $key => $value) {
                Storage::disk('public')->delete('img/projects/'.$value);
            }
            $request->session()->flash('error', trans('custom.message.create.error', ['name' => trans('custom.attribute.project')]));
            return response()->json(["route" => route('cms.projects.index')],500);
        }
    }

}