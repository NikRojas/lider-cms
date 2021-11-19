<?php

namespace App\Http\Controllers\Cms\Combos;

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

class IndexController extends Controller
{
    use CmsTrait;

    public function index()
    {
        return view('pages.combos.index');
    }

    public function getAll(Request $request, CombosRepository $repo){
        $q = $request->q;
        $headers = ["Id", "Proyecto", "Descripción", "Inmuebles","Mostrar en la Web", "Estado",'Precio Separación','Precio del Combo'];
        if($q){
            $elements = $repo->datatable($request->itemsPerPage,$q);
        }
        else{
            $elements = $repo->datatable($request->itemsPerPage);
        }
        $elements["headers"] = $headers;
        return response()->json($elements);
    }

    public function create()
    {
        $projects = Project::with('ubigeoRel')->get();
        return view("pages.combos.create",compact('projects'));
    }

    public function getAllDepartments(Request $request){
        /*$parkings = Department::where('project_id', $request->project)->where('available',1)->whereNotNull('sector_id')->where(function ($q) {
            $q->where('sector_id', 2);
          })->with('packageRel')->get();
        $warehouses = Department::where('project_id', $request->project)->where('available',1)->whereNotNull('sector_id')->where(function ($q) {
            $q->where('sector_id', 3);
          })->with('packageRel')->get();
        $departments = Department::where('project_id', $request->project)->where('available',1)->whereNotNull('sector_id')->where(function ($q) {
            $q->whereIn('sector_id', [1,4]);
          })->with('packageRel')->get();*/
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
            return response()->json(["route" => route('cms.combos.index')], 200);
        } catch (\Exception $e) {
            if($imageName){
                Storage::disk('public')->delete('img/projects/combos/'.$imageName);
            }
            $request->session()->flash('error', trans('custom.message.create.error', ['name' => trans('custom.attribute.element')]));
            return response()->json(["route" => route('cms.combos.index')], 500);
        }
    }

    public function update(RealStatePackageRequest $request, $element){
        $elementR = RealStatePackage::where('slug', $element)->firstOrFail();
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
            return response()->json(["route" => route('cms.combos.index')], 200);
        } catch (\Exception $e) {
            $request->session()->flash('error', trans('custom.message.update.error', ['name' => trans('custom.attribute.element')]));
            return response()->json(["route" => route('cms.combos.index')], 500);
        }
    }

    public function edit($element)
    {
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
        return view("pages.combos.edit", compact('elementR','projects'));
    }

    public function get($element)
    {
        $el = RealStatePackage::where('slug', $element)->first();
        return response()->json($el);
    }

    public function destroy($element)
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