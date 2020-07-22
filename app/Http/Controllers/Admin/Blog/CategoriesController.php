<?php

namespace App\Http\Controllers\Admin\Blog;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;

use App\Http\Requests\Admin\Blog\CategoryRequest;

use App\Category;

class CategoriesController extends Controller
{

    public function index(){
        return view ("pages.blog.categories");    
    }

    public function getCategory(Category $category){
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
    }

}