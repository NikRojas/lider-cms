<?php

namespace App\Http\Controllers\Cms\Combos;

use App\Department;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Repositories\CombosRepository;
use App\Http\Traits\CmsTrait;
use App\Project;

class IndexController extends Controller
{
    use CmsTrait;

    public function index()
    {
        return view('pages.combos.index');
    }

    public function getAll(Request $request, CombosRepository $repo){
        $q = $request->q;
        $headers = ["Id", "Descripción", "Inmuebles","Estado", "Registrado el"];
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
        $parkings = Department::where('project_id', $request->project)->where('available',1)->whereNotNull('sector_id')->where(function ($q) {
            $q->where('sector_id', 2);
          })->get();
          $warehouses = Department::where('project_id', $request->project)->where('available',1)->whereNotNull('sector_id')->where(function ($q) {
            $q->where('sector_id', 3);
          })->get();
        $departments = Department::where('project_id', $request->project)->where('available',1)->whereNotNull('sector_id')->where(function ($q) {
            $q->whereIn('sector_id', [1,4]);
          })->get();
        return response()->json(["parkings" => $parkings, "departments" => $departments, "warehouses" => $warehouses]);
    }
}