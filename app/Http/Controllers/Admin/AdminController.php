<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use Auth;
use App\Role;
use App\Department;
use App\Category;

class AdminController extends Controller
{
    public function getFile($folder,$subfolder,$file){
        $ruta = '/'.$folder."/".$subfolder."/".$file;
        if(Storage::disk('private')->exists($ruta)){
            return response()->download(storage_path('app/private'.$ruta), null, [], null);
        }
        else{
            return abort(404);
        }
    }

    public function getRoles(Request $request){
        $roles = Role::where('id','!=',1)->get();
        return response()->json($roles);    
    }

    public function getDepartments(Request $request){
        $departments = Department::all();
        return response()->json($departments);    
    }

    public function getDepartmentsNoMain(Request $request){
        $departments = Department::where('main','!=',1)->get();
        return response()->json($departments);    
    }

    public function getCategories(){
        $categories = Category::all();
        return response()->json($categories);
    }
}