<?php

namespace App\Http\Controllers\Cms\Blog;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

use App\Http\Requests\Cms\Blog\PostRequest;

use App\Post;
use App\Repositories\PostRepository;
use Auth;
use App\Tag;

use App\Http\Traits\CmsTrait;

class PostsController extends Controller
{
    use CmsTrait;

    public function index()
    {
        return view("pages.blog.posts.index");
    }

    public function storeImage(Request $request)
    {
        $file_name = $this->setFileName('pi-', $request->file('image'));
        try {
            $store_image = Storage::disk('public')->putFileAs('img/posts/', $request->file('image'), $file_name);
            return response()->json(['image'=>Storage::disk('public')->url('img/posts/'.$file_name)]);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ], 500);
        }
    }

    public function create()
    {
        return view("pages.blog.posts.create");
    }

    public function edit(Post $element)
    {
        //$element = $element->load('category', 'tags:post_id,name_es as tag_es,name_en as tag_en');
        $element = $element->load('category');
        return view("pages.blog.posts.edit", compact('element'));
    }

    public function getAll(Request $request, PostRepository $repo)
    {
        $q = $request->q;
         
        $headers = ["Id", "Título ES", "Título EN","Url","Categoría Es", "Categoría En", "Publicado","Registrado el"];
        if ($q) {
            $elements = $repo->datatable($request->itemsPerPage, $q);
        } else {
            $elements = $repo->datatable($request->itemsPerPage);
        }
        $elements["headers"] = $headers;
        return response()->json($elements);
    }

    public function store(PostRequest $request)
    {
        $post = request([
            "title_es",
            "title_en",
            "content_es",
            "content_en",
            "excerpt_es",
            "excerpt_en",
            "seo_keywords_es",
            "seo_keywords_en",
            "slug_es",
            "slug_en",
            "published",
            "category_id"
        ]);
        $imageName = $this->setFileName('b-', $request->file('image'));
        $storeImage = Storage::disk('public')->putFileAs('img/posts/', $request->file('image'), $imageName);

        $thumbnailName = $this->setFileName('bt-', $request->file('thumbnail'));
        $storeThumbnail = Storage::disk('public')->putFileAs('img/posts/', $request->file('thumbnail'), $thumbnailName);


        if (!$storeImage || !$storeThumbnail) {
            $request->session()->flash('error', trans('custom.message.create.error', ['name' => trans('custom.attribute.post')]));
            return response()->json(["route" => route('cms.blog.posts.index')], 500);
        }
         
        $post = array_merge($post, ["image"=>$imageName,"thumbnail"=>$thumbnailName,"user_id"=>Auth::user()->id]);
        
        try {
            $post = Post::UpdateOrCreate(array_merge($post, ["created_at" => date("Y-m-d H:i:s", strtotime($request->created_at))]));
            $request->session()->flash('success', trans('custom.message.create.success', ['name' => trans('custom.attribute.post')]));
            return response()->json(["route" => route('cms.blog.posts.index')]);
        } catch (\Exception $e) {
            $request->session()->flash('error', trans('custom.message.create.error', ['name' => trans('custom.attribute.post')]));
            return response()->json(["route" => route('cms.blog.posts.index')], 500);
        }

        
        /*$tags = $request->tags;
        try {
            foreach ($tags as $key => $value) {
                $tag = Tag::UpdateOrCreate(["post_id" => $post->id, "name_es" => $value['tag_es'],"name_en" => $value['tag_en']]);
            }

            $request->session()->flash('success', trans('custom.message.create.success', ['name' => trans('custom.attribute.post')]));
            return response()->json(["route" => route('cms.blog.posts.index')]);
        } catch (\Exception $e) {
            $request->session()->flash('error', trans('custom.message.create.error', ['name' => trans('custom.attribute.post')]));
            return response()->json(["route" => route('cms.blog.posts.index')], 500);
        }*/
    }

    public function get(Post $element)
    {
        //$element = $element->load('category', 'tags:post_id,name_es,name_en');
        $element = $element->load('category');
        return response()->json($element);
    }
   
    public function destroy(Post $element)
    {
        $image = $element->image;
        $thumbnail = $element->thumbnail;
        try {
            $element_delete = $element->delete();
            if ($element_delete) {
                Storage::disk('public')->delete('img/posts/'.$image);
                Storage::disk('public')->delete('img/posts/'.$thumbnail);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.post')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.post')])], 500);
        }
    }
 
    public function getPosts(Request $request, PostRepository $post_repository)
    {
        $search = $request->q;
        if ($search) {
            $posts = $post_repository->datatable($request->itemsPerPage, $search);
        } else {
            $posts = $post_repository->datatable($request->itemsPerPage);
        }
        $posts["headers"] = ["Id","Título","URL","Categoría","Publicado","Registrado el"];
        return response()->json($posts);
    }

    public function update(PostRequest $request, Post $element)
    {
        $request_post = request([
            "title_es",
            "title_en",
            "content_es",
            "content_en",
            "excerpt_es",
            "excerpt_en",
            "seo_keywords_es",
            "seo_keywords_en",
            "slug_es",
            "slug_en",
            "published",
            "category_id"
        ]);
        
        if ($request->hasFile('image')) {
            $image_name = $this->setFileName('b-', $request->file('image'));
            $store_image = Storage::disk('public')->putFileAs('img/posts/', $request->file('image'), $image_name);
            if (!$store_image) {
                $request->session()->flash('error', trans('custom.message.update.error', ['name' => trans('custom.attribute.post')]));
                return response()->json(["route" => route('cms.slider.index')], 500);
            }
            $request_post = array_merge($request_post, ["image" => $image_name]);
        } else {
            $request_post = array_merge($request_post, ["image" => $element->image]);
        }

        if ($request->hasFile('thumbnail')) {
            $thumbnail_name = $this->setFileName('bt-', $request->file('thumbnail'));
            $store_thumbnail = Storage::disk('public')->putFileAs('img/posts/', $request->file('thumbnail'), $thumbnail_name);
            if (!$store_thumbnail) {
                $request->session()->flash('error', trans('custom.message.update.error', ['name' => trans('custom.attribute.post')]));
                return response()->json(["route" => route('cms.slider.index')], 500);
            }
            $request_post = array_merge($request_post, ["thumbnail" => $thumbnail_name]);
        } else {
            $request_post = array_merge($request_post, ["thumbnail" => $element->thumbnail]);
        }

        if ($request->hasFile('image') && $element->image) {
            Storage::disk('public')->delete('img/posts/'.$element->image);
        }
        if ($request->hasFile('thumbnail') && $element->thumbnail) {
            Storage::disk('public')->delete('img/posts/'.$element->thumbnail);
        }
        
        try {
            $element = Post::UpdateOrCreate(["id"=>$element->id], array_merge($request_post, ["created_at" => date("Y-m-d H:i:s", strtotime($request->created_at_format))]));
            $request->session()->flash('success', trans('custom.message.update.success', ['name' => trans('custom.attribute.post')]));
            return response()->json(["route" => route('cms.blog.posts.index')]);
        } catch (\Exception $e) {
            $request->session()->flash('error', trans('custom.message.update.error', ['name' => trans('custom.attribute.post')]));
            return response()->json(["route" => route('cms.blog.posts.index')], 500);
        }

        
        /*$tags = $request->tags;
        try {
            $tag = Tag::where('post_id', $element->id)->delete();
            foreach ($tags as $key => $value) {
                $tag = Tag::UpdateOrCreate(["post_id" => $element->id, "name_es" => $value['tag_es'],"name_en" => $value['tag_en']]);
            }
            $request->session()->flash('success', trans('custom.message.update.success', ['name' => trans('custom.attribute.post')]));
            return response()->json(["route" => route('cms.blog.posts.index')]);
        } catch (\Exception $e) {
            $request->session()->flash('error', trans('custom.message.update.error', ['name' => trans('custom.attribute.post')]));
            return response()->json(["route" => route('cms.blog.posts.index')], 500);
        }*/
    }
}
