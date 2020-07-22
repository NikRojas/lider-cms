<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\SuccessStory;

use App\Http\Traits\AdminTrait;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\Admin\SuccessStoryRequest;

class SuccessStoriesController extends Controller
{
    use AdminTrait;

    public function index()
    {
        return view ("pages.success-stories");
    }

    public function create(SuccessStoryRequest $request){
      $story = request(["title","description","department_id"]);
      $logo_name = $this->setFileName('ssl-',$request->file('logo'));
      $store_logo = Storage::disk('gcs')->putFileAs('img/stories/',$request->file('logo'),$logo_name);
      if(!$store_logo){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
      }
      $story = array_merge($story,["logo"=>$logo_name]);

      $image_name = $this->setFileName('ssi-',$request->file('image'));
      $store_image = Storage::disk('gcs')->putFileAs('img/stories/',$request->file('image'),$image_name);
      if(!$store_image){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
      }
      $story = array_merge($story,["image"=>$image_name]);


      $story_index = $this->getMaxIndex(SuccessStory::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
      if(count($story_index) > 0){
          $story = array_merge($story,["index"=>$story_index[0]["index"] + 1]); 
      }
      else{
          $story = array_merge($story,["index"=>1]);    
      }
      try{
          $story = SuccessStory::UpdateOrCreate($story); 
          return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.story')])],200);
      }
      catch(\Exception $e){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.story')]) ],500);    
      }
    }

    public function getSuccessStories(Request $request){
      $stories = SuccessStory::where('department_id',$request->department)->orderBy('index')->get();
      return response()->json($stories);
    }

    public function getSuccessStory(SuccessStory $story){
      return response()->json($story);
    }

    public function delete(SuccessStory $story){
      $logo = $story->logo;
      $image = $story->image;
      try {
          $story_delete = $story->delete();
          if($story_delete){
              Storage::disk('private')->delete('files/img/story/'.$logo);    
              Storage::disk('private')->delete('files/img/story/'.$image);    
          }
          return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.story')])],200);
      } 
      catch (\Exception $e){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.story')])],500);
      }
    }

    public function order(Request $request){
      $stories = $request->all();
      try{
          for ($i=0; $i < count($stories); $i++) { 
              $story = SuccessStory::UpdateOrCreate(["id"=>$stories[$i]["id"]],["index"=>$i + 1]);
          }
          return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.story')])],200);
      } 
      catch (\Exception $e){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.story')])],500);
      }
    }

    public function update(SuccessStoryRequest $request,SuccessStory $story){
      $request_story = request(["title","description","department_id"]);
      if($request->hasFile('image')){
          $image_name = $this->setFileName('ssl-',$request->file('image'));
          $store_image = Storage::disk('gcs')->putFileAs('img/stories/',$request->file('image'),$image_name);
          if(!$store_image){
              return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
          }
          $request_story = array_merge($request_story,["image" => $image_name]);   
      }  
      else{
          $request_story = array_merge($request_story,["image" => $story->image]);   
      }
      if($request->hasFile('logo')){
          $logo_name = $this->setFileName('ssi-',$request->file('logo'));
          $store_logo = Storage::disk('gcs')->putFileAs('img/stories/',$request->file('logo'),$logo_name);
          if(!$store_logo){
              return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
          }
          $request_story = array_merge($request_story,["logo" => $logo_name]);   
      }  
      else{
          $request_story = array_merge($request_story,["logo" => $story->logo]);   
      }
      if($request->hasFile('image') && $story->image){
          Storage::disk('gcs')->delete('img/stories/'.$story->image);
      } 
      if($request->hasFile('logo') && $story->logo){
          Storage::disk('gcs')->delete('img/stories/'.$story->logo);
      } 
      try{
          $story = SuccessStory::UpdateOrCreate(["id"=>$story->id],$request_story); 
          return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.story')])],200);
      }
      catch(\Exception $e){
          return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.story')]) ],500);
      }
  }
}