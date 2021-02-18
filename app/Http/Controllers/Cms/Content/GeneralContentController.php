<?php

namespace App\Http\Controllers\Cms\Content;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\MasterPage;
use App\MasterSection;
use App\Content;

use App\Http\Requests\Cms\Content\GeneralContentRequest;
use Illuminate\Support\Facades\Storage;
use App\Http\Traits\CmsTrait;

class GeneralContentController extends Controller
{
    use CmsTrait;

    public function index()
    {
        return view ("pages.content.general-content");
    }

    public function getAllPages(){
        $pages = MasterPage::with('sections')->has('sections')->withCount('sections')->get();
        return response()->json($pages);
    }

    public function getPageSections(MasterPage $page){
        return response()->json($page->load('sections'));
    }

    public function getPageSectionFields(MasterSection $section){
        $section = $section->load('fields');
        $content = Content::where('master_section_id',$section->id)->get()->toArray();
        $data = [];
        foreach ($section->fields as $key => $value) {
            $data[] = array(
                "type" => $value->type,
                "variable" => $value->variable,
                "name" => $value->name,
                "value" => "",
                "value_es" => "",
                "value_en" => ""
            );
        }
        foreach ($data as $key => $element) {
            foreach ($element as $key2 => $value) {
                foreach ($content as $key3 => $content_value) {
                    if($key2 == "variable" && $value == $content_value["field"]){
                        unset($data[$key]['value']);
                        $data[$key]['value'] = $content_value["value"];
                        $data[$key]['value_es'] = $content_value["value_es"];
                        $data[$key]['value_en'] = $content_value["value_en"];
                    }
                }
            }
        }
        return response()->json($data);
    }

    public function updateSection(Request $request){
        $section_id = $request->section_id;
        $request_content = json_decode($request->content, true);

        try{
            foreach ($request_content as $key => $element) {
                $value = NULL;
                $value = $element["value"];
                $value_es = NULL;
                $value_en = NULL;
                

                if($element["type"] == "image"){
                    if($request->hasFile($element["variable"])){
                        $filename = $this->setFileName('p-',$request->file($element["variable"]));
                        $store_image = Storage::disk('public')->putFileAs('img/content/',$request->file($element["variable"]),$filename);
                        if(!$store_image){
                            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);
                        }
                        $content = Content::where("master_section_id",$section_id)->where("field",$element["variable"])->first();
                        if($content){
                            $delete_image = Storage::disk('public')->delete('img/content/'.$content->value);
                            $content = $content->delete();
                        }
                        $element["value"] = $filename;
                        $content = Content::UpdateOrCreate(array_merge(["value"=> $element["value"], "field" => $element["variable"] ,"master_section_id"=>$section_id]));
                    }
                }

                else if($element["type"] == "video"){
                    if($request->hasFile($element["variable"])){
                        $filename = $this->setFileName('pv-',$request->file($element["variable"]));
                        $store_video = Storage::disk('public')->putFileAs('videos/pages/',$request->file($element["variable"]),$filename);
                        if(!$store_video){
                            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.video') ],500);
                        }
                        $content = Content::where("master_section_id",$section_id)->where("field",$element["variable"])->first();
                        if($content){
                            $delete_video = Storage::disk('public')->delete('videos/pages/'.$content->value);
                            $content = $content->delete();
                        }
                        $element["value"] = $filename;
                        $content = Content::UpdateOrCreate(array_merge(["value"=> $element["value"], "field" => $element["variable"] ,"master_section_id"=>$section_id]));
                    }
                }

                else{
                    $value_es = $element["value_es"];
                    $value_en = $element["value_en"];
                    if($value_en || $value_es){
                        $content = Content::where("master_section_id",$section_id)->where("field",$element["variable"]);
                        if($content){
                            $content = $content->delete();
                        }
                        $content = Content::UpdateOrCreate(array_merge(["value"=> $element["value"],"value_es"=> $element["value_es"],"value_en"=> $element["value_en"], "field" => $element["variable"] ,"master_section_id"=>$section_id]));
                    }
                }
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.section')]) ],200);
        }
        catch(\Exception $e){
            dd($e);
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.section')]) ],500);
        }
    }

    public function storeImage(Request $request){
        $filename = $this->setFileName('pe-',$request->file('image'));
        try{
            $upload_file = Storage::disk('public')->putFileAs('img/content/',$request->file('image'),$filename);
            return response()->json(['image'=>Storage::disk('public')->url('img/content/'.$filename)]);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);
        }
    }
}
