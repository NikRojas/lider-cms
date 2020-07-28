<?php

namespace App\Http\Controllers\Cms\Administration;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\Administration\FeatureProjectRequest;
use App\Http\Traits\CmsTrait;
use App\ProjectFeature;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

//use App\Http\Requests\Admin\Blog\CategoryRequest;

//use App\Category;

class FeaturesProyectController extends Controller
{
    use CmsTrait;

    public function index(){
        return view ("pages.administration.features-project");    
    }

    public function store(FeatureProjectRequest $request){
        $element = request(["name_en","name_es"]);
        $imageName = $this->setFileName('f-',$request->file('image'));
        $storeImage = Storage::disk('public')->putFileAs('img/features/',$request->file('image'),$imageName);
        if(!$storeImage){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
        }
        $element = array_merge($element,["image"=>$imageName]);
        try{
            $element = ProjectFeature::UpdateOrCreate($element); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.features')]) ],200);
        }
        catch(\Exception $e){
            dd($e);
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.features')]) ],500);
        }
    }

    /*public function getCategory(Category $category){
        return response()->json($category);
    }

    public function getCategories(Request $request){
        $search = $request->search;
        if($search){
            $categories = Category::select('id','name','slug')->where('name','like',$search.'%')->orderBy('created_at','desc')->paginate($request->desde)->toArray();
        }
        else{
            $categories = Category::select('id','name','slug')->orderBy('created_at','desc')->paginate($request->desde)->toArray();
        }   
        $categories["headers"] = ["Id","Nombre","Slug"];
        return response()->json($categories); 
    }

    public function create(CategoryRequest $request){
        $category = request(['name']);
        try{
            $category = Category::UpdateOrCreate(array_merge($category,['slug'=> Str::slug($request->name, '-')])); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.category')]) ],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.category')]) ],500);
        }
    }

    public function update(Category $category,CategoryRequest $request){
        $request_category = request(['name']);
        try{
            $category = Category::UpdateOrCreate(["id"=>$category->id],array_merge($request_category,['slug'=> Str::slug($request->name, '-')])); 
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.category')]) ],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.category')]) ],500);
        }
    }

    public function delete(Category $category){
        try {
            $category->delete();
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.category')]) ],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.category')]) ],500);
        }
    }

    public function autocomplete(){
        $categories = Category::all();
        return response()->json($categories);
    }*/

}