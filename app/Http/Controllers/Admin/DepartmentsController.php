<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Department;

use App\Http\Traits\AdminTrait;
use App\Http\Requests\Admin\DepartmentRequest;
use Illuminate\Support\Facades\Storage;

use Illuminate\Support\Str;
use App\MasterPage;

class DepartmentsController extends Controller
{
    use AdminTrait;
    public function index()
    {
        return view ("pages.departments");
    }

    public function getDepartments(){
        //$departments = Department::where('main','!=',1)->get();
        $departments = Department::all();
        return response()->json($departments);    
    }

    public function update(DepartmentRequest $request,Department $department){
        $request_department = request(["excerpt","title"]);
        if($request->hasFile('image')){
            $image_name = $this->setFileName('e-',$request->file('image'));
            $store_image = Storage::disk('gcs')->putFileAs('img/departments/',$request->file('image'),$image_name);
            if(!$store_image){
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
            }
            $request_department = array_merge($request_department,["logo" => $image_name ]);   
        }  
        else{
            $request_department = array_merge($request_department,["logo" => $department->logo]);   
        }
        if($request->hasFile('image') && $department->logo){
            Storage::disk('gcs')->delete('img/departments/'.$department->logo);
        } 


        if($request->hasFile('logo_white')){
            $logo_white_name = $this->setFileName('ew-',$request->file('logo_white'));
            $store_logo_white = Storage::disk('gcs')->putFileAs('img/departments/',$request->file('logo_white'),$logo_white_name);
            if(!$store_logo_white){
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
            }
            $request_department = array_merge($request_department,["logo_white" => $logo_white_name ]);   
        }  
        else{
            $request_department = array_merge($request_department,["logo_white" => $department->logo_white]);   
        }
        if($request->hasFile('logo_white') && $department->logo_white){
            Storage::disk('gcs')->delete('img/departments/'.$department->logo_white);
        } 


        if($request->hasFile('banner')){
            $banner_name = $this->setFileName('eb-',$request->file('banner'));
            $store_banner = Storage::disk('gcs')->putFileAs('img/departments/',$request->file('banner'),$banner_name);
            if(!$store_banner){
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
            }
            $request_department = array_merge($request_department,["banner" => $banner_name ]);   
        }  
        else{
            $request_department = array_merge($request_department,["banner" => $department->banner]);   
        }
        if($request->hasFile('banner') && $department->banner){
            Storage::disk('gcs')->delete('img/departments/'.$department->banner);
        } 


        if($request->hasFile('image_menu')){
            $image_menu_name = $this->setFileName('eb-',$request->file('image_menu'));
            $store_image_menu = Storage::disk('gcs')->putFileAs('img/departments/',$request->file('image_menu'),$image_menu_name);
            if(!$store_image_menu){
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
            }
            $request_department = array_merge($request_department,["image_menu" => $image_menu_name ]);   
        }  
        else{
            $request_department = array_merge($request_department,["image_menu" => $department->image_menu]);   
        }
        if($request->hasFile('image_menu') && $department->image_menu){
            Storage::disk('gcs')->delete('img/departments/'.$department->image_menu);
        } 

        if($request->filled('title') && $department->main == 0){
            $request_department = array_merge($request_department,["name" => $request->title ]);
            try{
                $department_slug = MasterPage::where('department_id',$department->id)->update([
                    'slug' => Str::slug($request->title, '-'),'name' => $request->title
                ]);
            }
            catch(\Exception $e){
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.department')]).' La especialidad ya existe.' ],500);
            }
        }
        try{
            $department = Department::UpdateOrCreate(["id"=>$department->id],$request_department);  
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.department')])],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.department')]) ],500);
        }
    }
}