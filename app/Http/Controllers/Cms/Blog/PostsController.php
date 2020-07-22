<?php

namespace App\Http\Controllers\Cms\Blog;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

use App\Http\Requests\Admin\Blog\PostRequest;

use App\Post;
use App\Repositories\PostRepository;
use Auth;
use App\Tag;

use App\Http\Traits\AdminTrait;

class PostsController extends Controller
{
    use AdminTrait;

    public function index(){
        return view ("pages.blog.posts");    
    }

    public function storeImage(Request $request){
        $file_name = $this->setFileName('pi-',$request->file('image'));
        try{
            $store_image = Storage::disk('gcs')->putFileAs('img/posts/',$request->file('image'),$file_name);
            return response()->json(['image'=>Storage::disk('gcs')->url('img/posts/'.$file_name)]);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
        }
    }

    public function getPost(Post $post){
        $post = $post->load('category','tags:post_id,name as text');
        $tags = $post->tags;
        $post = $post->unsetRelation('tags');
        return response()->json(["post" => $post, "tags" => $tags]);        
    }

    public function getPosts(Request $request,PostRepository $post_repository){
        $search = $request->search;
        if($search){
            $posts = $post_repository->datatable($request->desde,$search);
        }
        else{
            $posts = $post_repository->datatable($request->desde);
        }   
        $posts["headers"] = ["Id","Título","URL","Categoría","Publicado","Registrado el"];
        return response()->json($posts); 
    }
    
    public function create(PostRequest $request){
        $post = request(["title","content","excerpt","slug","published","category_id"]);
        $image_name = $this->setFileName('b-',$request->file('image'));
        $store_image = Storage::disk('gcs')->putFileAs('img/posts/',$request->file('image'),$image_name);
        if(!$store_image){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
        }
        $post = array_merge($post,["image"=>$image_name,"user_id"=>Auth::user()->id]);

        $thumbnail_name = $this->setFileName('bt-',$request->file('thumbnail'));
        $store_thumbnail = Storage::disk('gcs')->putFileAs('img/posts/',$request->file('thumbnail'),$thumbnail_name);
        if(!$store_thumbnail){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
        }
        $post = array_merge($post,["thumbnail"=>$thumbnail_name]);


        try{
            $post = Post::UpdateOrCreate($post); 
            //return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.post')])],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.post')]) ],500);    
        }
        $tags = json_decode($request->tags);
        try{
            foreach ($tags as $key => $value) {
                $exist = $tag = NULL;
                $exist = Tag::where('post_id',$post->id)->where('name',$value->text)->get();
                if(count($exist) < 1){
                    $tag = Tag::UpdateOrCreate(["post_id" => $post->id, "name" => $value->text]);
                }
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.post')])],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.post')]) ],500);    
        }
    }

    public function delete(Post $post){
        $image = $post->image;
        $thumbnail = $post->thumbnail;
        try {
            $post_delete = $post->delete();
            if($post_delete){
                Storage::disk('gcs')->delete('img/posts/'.$image);   
                Storage::disk('gcs')->delete('img/posts/'.$thumbnail);    
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.post')])],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.post')])],500);
        }
    }

    public function update(PostRequest $request,Post $post){
        $request_post = request(["title","content","excerpt","slug","published","category_id"]);
        if($request->hasFile('image')){
            $image_name = $this->setFileName('p-',$request->file('image'));
            $store_image = Storage::disk('gcs')->putFileAs('img/posts/',$request->file('image'),$image_name);
            if(!$store_image){
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
            }
            $request_post = array_merge($request_post,["image" => $image_name]);   
        }  
        else{
            $request_post = array_merge($request_post,["image" => $post->image]);   
        }

        if($request->hasFile('thumbnail')){
            $thumbnail_name = $this->setFileName('bt-',$request->file('thumbnail'));
            $store_thumbnail = Storage::disk('gcs')->putFileAs('img/posts/',$request->file('thumbnail'),$thumbnail_name);
            if(!$store_thumbnail){
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
            }
            $request_post = array_merge($request_post,["thumbnail" => $thumbnail_name]);   
        }  
        else{
            $request_post = array_merge($request_post,["thumbnail" => $post->thumbnail]);   
        }



        if($request->hasFile('image') && $post->image){
            Storage::disk('gcs')->delete('img/posts/'.$post->image);
        } 
        if($request->hasFile('thumbnail') && $post->thumbnail){
            Storage::disk('gcs')->delete('img/posts/'.$post->thumbnail);
        } 
        try{
            $post = Post::UpdateOrCreate(["id"=>$post->id],$request_post); 
            //return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.post')])],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.post')]) ],500);
        }

        $tags = json_decode($request->tags);
        try{
            $tag = Tag::where('post_id',$post->id)->delete();
            foreach ($tags as $key => $value) {
                $exist = $tag = NULL;
                $exist = Tag::where('post_id',$post->id)->where('name',$value->text)->get();
                if(count($exist) < 1){
                    $tag = Tag::UpdateOrCreate(["post_id" => $post->id, "name" => $value->text]);
                }
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.post')])],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.post')]) ],500);    
        }
    }
}