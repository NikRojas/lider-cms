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
        $elements = Project::orderBy('index','asc')->get();
        return response()->json($elements);
    }

    public function get(Project $element){
        //return response()->json($element);
    }

    public function store(ProjectRequest $request){
        //$slider = request(["url","posicion"]);
        $imageNameEs = $this->setFileName('se-',$request->file('image_es'));
        $storeImageEs = Storage::disk('public')->putFileAs('img/slider/',$request->file('image_es'),$imageNameEs);
        $imageNameResponsiveEs = $this->setFileName('sre-',$request->file('image_responsive_es'));
        $storeImageResponsiveEs = Storage::disk('public')->putFileAs('img/slider/',$request->file('image_responsive_es'),$imageNameResponsiveEs);

        $imageNameEn = $this->setFileName('sen-',$request->file('image_en'));
        $storeImageEn = Storage::disk('public')->putFileAs('img/slider/',$request->file('image_en'),$imageNameEn);
        $imageNameResponsiveEn = $this->setFileName('sren-',$request->file('image_responsive_en'));
        $storeImageResponsiveEn = Storage::disk('public')->putFileAs('img/slider/',$request->file('image_responsive_en'),$imageNameResponsiveEn);

        if(!$storeImageEn || !$storeImageResponsiveEn || !$storeImageResponsiveEs || !$storeImageEs){
            $request->session()->flash('error', trans('custom.message.delete.error', ['name' => trans('custom.attribute.slide')]));
            return response()->json(["route" => route('cms.slider.index')],500);
        }
        $index = $this->getMaxIndex(Slider::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
        $slider = ["image_es"=>$imageNameEs,"image_en"=>$imageNameEn,"image_responsive_es"=>$imageNameResponsiveEs,"image_responsive_en"=>$imageNameResponsiveEn,"index" => $index];
        if($request->from){
            $slider = array_merge($slider,["from" => date("Y-m-d H:i:s", strtotime($request->from))]);
        }
        if($request->to){
            $slider = array_merge($slider,["to" => date("Y-m-d H:i:s", strtotime($request->to))]);
        }
        try{
            $slider = Slider::UpdateOrCreate($slider); 
            $request->session()->flash('success', trans('custom.message.create.success', ['name' => trans('custom.attribute.slide')]));
            return response()->json(["route" => route('cms.slider.index')]);
        }
        catch(\Exception $e){
            $request->session()->flash('error', trans('custom.message.create.error', ['name' => trans('custom.attribute.slide')]));
            return response()->json(["route" => route('cms.slider.index')],500);
        }
    }

}