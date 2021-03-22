<?php

namespace App\Http\Controllers\Cms\Content;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

use App\Http\Traits\CmsTrait;
use App\Http\Requests\Cms\Content\SeoRequest;
use App\MasterPage;

class SeoController extends Controller
{
    use CmsTrait;

    public function index(){
        return view("pages.content.seo");
    }

    public function getAll(){
        $pages = MasterPage::where('title_es','!=','Trabaja con nosotros')->get();
        return response()->json($pages);    
    }

    public function update(SeoRequest $request,MasterPage $page){
        $request_page = request(["title_es","title_en","seo_keywords_es","seo_keywords_en","seo_description_es","seo_description_en"]);
        if($request->hasFile('seo_image')){
            $image_name = $this->setFileName('p-',$request->file('seo_image'));
            $store_image = Storage::disk('public')->putFileAs('img/pages/',$request->file('seo_image'),$image_name);
            if(!$store_image){
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
            }
            $request_page = array_merge($request_page,["seo_image" => $image_name ]);   
        }  
        else{
            $request_page = array_merge($request_page,["seo_image" => $page->seo_image]);   
        }
        if($request->hasFile('seo_image') && $page->seo_image){
            Storage::disk('public')->delete('img/pages/'.$page->seo_image);
        } 
        try{
            $page = MasterPage::UpdateOrCreate(["id"=>$page->id],array_merge($request_page));  
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.seo')])],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.seo')]) ],500);
        }
    }
}
