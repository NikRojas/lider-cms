<?php

namespace App\Http\Controllers\Cms\Projects;

use App\Department;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\RealStatePackageRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Repositories\CombosRepository;
use App\Http\Traits\CmsTrait;
use App\Project;
use App\RealStatePackage;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class CombosController extends Controller
{
    use CmsTrait;

    public function index($project)
    {
        $element = Project::where('slug_es', $project)->firstOrFail();
        return view('pages.projects.combos.index', compact('element'));
    }

    public function getAll($project_id, Request $request, CombosRepository $repo){
        $q = $request->q;
        $headers = ["Id", "Descripción", "Inmuebles", "Estado",'Precio Separación','Precio del Combo'];
        if($q){
            $elements = $repo->datatable($project_id, $request->itemsPerPage,$q);
        }
        else{
            $elements = $repo->datatable($project_id, $request->itemsPerPage);
        }
        $elements["headers"] = $headers;
        return response()->json($elements);
    }

    public function create($project)
    {
        $element = Project::where('slug_es', $project)->firstOrFail();
        $projects = Project::with('ubigeoRel')->get();
        return view("pages.projects.combos.create",compact('projects','element'));
    }

    public function getAllDepartments(Request $request){
        $parkings = Department::where('project_id', $request->project)->whereNotNull('sector_id')->where(function ($q) {
            $q->where('sector_id', 2);
          })->with('packageRel')->get();
        $warehouses = Department::where('project_id', $request->project)->whereNotNull('sector_id')->where(function ($q) {
            $q->where('sector_id', 3);
          })->with('packageRel')->get();
        $departments = Department::whereNotNull('view_id')->whereNotNull('floor')->whereNotNull('type_department_id')->where('project_id', $request->project)->whereNotNull('sector_id')->where(function ($q) {
            $q->whereIn('sector_id', [1,4]);
          })->with('packageRel')->get();
        return response()->json(["parkings" => $parkings, "departments" => $departments, "warehouses" => $warehouses]);
    }

    public function store(RealStatePackageRequest $request){
        $p_request = request(["project_id","description",'status']);
        $project = Project::where('id',$request->project_id)->first();
        $imageName = NULL;
        if ($request->hasFile('image')) {
            $imageName = $this->setFileName('ci-', $request->file('image'));
            $storeImage = Storage::disk('public')->putFileAs('img/projects/combos/', $request->file('image'), $imageName);
            if (!$storeImage) {
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ], 500);
            }
            $p_request = array_merge($p_request, ["image"=>$imageName]);
        }
        $p_request = array_merge($p_request,["slug" => Str::random(20)]);
        $departments = json_decode($request->real_states);
        try {
            DB::transaction(function () use ($departments, $p_request) {
                $rS = RealStatePackage::UpdateOrCreate($p_request);
                foreach ($departments as $key => $value) {
                    $rS->departmentsRel()->attach($value);
                }
            });
            $request->session()->flash('success', trans('custom.message.create.success', ['name' => trans('custom.attribute.element')]));
            return response()->json(["route" => route('cms.projects.combos.index',['project' => $project->slug_es])], 200);
        } catch (\Exception $e) {
            if($imageName){
                Storage::disk('public')->delete('img/projects/combos/'.$imageName);
            }
            $request->session()->flash('error', trans('custom.message.create.error', ['name' => trans('custom.attribute.element')]));
            return response()->json(["route" => route('cms.projects.combos.index',['project' => $project->slug_es])], 500);
        }
    }

    public function update(RealStatePackageRequest $request, $project, $element){
        $elementR = RealStatePackage::where('slug', $element)->firstOrFail();
        $project = Project::where('id',$request->project_id)->first();
        $p_request = request(["project_id","description",'status']);
        if ($request->hasFile('image')) {
            $imageName = $this->setFileName('ci-', $request->file('image'));
            $storeImage = Storage::disk('public')->putFileAs('img/projects/combos/', $request->file('image'), $imageName);
            if (!$storeImage) {
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ], 500);
            }
            $p_request = array_merge($p_request, ["image"=>$imageName]);
        } else {
            $p_request = array_merge($p_request, ["image" => $elementR->image]);
        }
        if ($request->hasFile('image') && $elementR->image) {
            Storage::disk('public')->delete('img/projects/combos'.$elementR->image);
        }
        try {
            DB::transaction(function () use ($p_request, $elementR) {
                $rS = RealStatePackage::UpdateOrCreate([ "id" => $elementR->id], $p_request);
            });
            $request->session()->flash('success', trans('custom.message.update.success', ['name' => trans('custom.attribute.element')]));
            return response()->json(["route" => route('cms.projects.combos.index',['project' => $project->slug_es])], 200);
        } catch (\Exception $e) {
            $request->session()->flash('error', trans('custom.message.update.error', ['name' => trans('custom.attribute.element')]));
            return response()->json(["route" => route('cms.projects.combos.index',['project' => $project->slug_es])], 500);
        }
    }

    public function edit($project, $element)
    {
        $elementPro = Project::where('slug_es', $project)->firstOrFail();
        $elementR = RealStatePackage::where('slug', $element)->firstOrFail();
        $elementR = $elementR->load('projectRel.ubigeoRel');
        if($elementR->projectRel->master_currency_id == 1){
            $price = $elementR->departmentsRel->pluck('price');
        }
        else{
            $price = $elementR->departmentsRel->pluck('price_foreign');
        }
        $elementR["price_total"] = $price->sum();
        $projects = Project::with('ubigeoRel')->get();
        return view("pages.projects.combos.edit", compact('elementR','projects'))->with('project',$elementPro);
    }

    public function get($project,$element)
    {
        $el = RealStatePackage::where('slug', $element)->first();
        return response()->json($el);
    }

    public function destroy($project, $element)
    {
        $el = RealStatePackage::where('slug', $element)->first();
        $image = $el->image;
        try {
            DB::transaction(function () use ($el, $image) {
                $el->departmentsRel()->detach();
                $destroy = $el->delete();
                if ($destroy) {
                    Storage::disk('public')->delete('img/projects/combos/' . $image);
                }
            });
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.delete.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.delete.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }
}