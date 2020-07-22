<?php

namespace App\Http\Traits;

use App\MasterPage;
use App\Department;
use App\SuccessStory;

trait ApiTrait {

    public function sendResponse($result, $message = NULL)
    {
    	$response = [
            'success' => true,
            'data'    => $result,
            'message' => $message,
        ];
        return response()->json($response, 200);
    }

    public function sendError($error, $errorMessages = [], $code = 404)
    {
    	$response = [
            'success' => false,
            'message' => $error,
        ];

        if(!empty($errorMessages)){
            $response['data'] = $errorMessages;
        }

        return response()->json($response, $code);
    }

    public function getSeoPage($slug){
        $page = MasterPage::select('id','title','seo_description','seo_keywords','seo_image','slug')->where('slug',$slug)->first()->toArray();
        return $page;
    }
    
    public function getDepartments(){
        $departments = MasterPage::select('name','slug','department_id')->where('department_id','!=',NULL)
        ->with('relDepartment')->get();
        return $departments;
    }

    public function getContentPage($slug){
        $content = MasterPage::where('slug',$slug)->first()->load('sections:id,name,master_page_id','sections.content:id,master_section_id,field,value')->sections->toArray();
        return $content;
    }


    public function getPaginateSuccessStories($request){
        if(!$request->department){
            return $this->sendError("Not found");
        }
        $master_page = MasterPage::where('slug',$request->department)->first();
        if(!$master_page){
            return $this->sendError("Not found");
        }
        $success_stories = SuccessStory::where('department_id',$master_page->department_id)->orderBy('index')->paginate(9);
        return $success_stories;
    }
}