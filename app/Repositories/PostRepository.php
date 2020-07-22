<?php 
namespace App\Repositories;

use App\Post;
use Carbon\Carbon;

class PostRepository 
{
    public function datatable($items_per_page,$q = false){
        $select = 'posts.id as post_id,CASE WHEN LENGTH(posts.title)>=30 THEN CONCAT(RTRIM(LEFT(posts.title,30)),"...") ELSE posts.title END as title,categories.id,
        categories.name as category_name,categories.slug as category_slug,posts.excerpt,posts.slug,posts.published';
        if($q){
            $posts = Post::selectRaw($select)
            ->join('categories','categories.id','posts.category_id')
            ->where('title','like',$q.'%')
            ->orderBy('posts.created_at','desc')
            ->paginate($items_per_page);
        }
        else{
            $posts = Post::selectRaw($select)
            ->join('categories','categories.id','posts.category_id')
            ->orderBy('posts.created_at','desc')
            ->paginate($items_per_page);
        }
        foreach($posts as $post){
            $status = NULL;
            $data[] = array(
                "id" => $post["post_id"],
                "title" => $post["title"],
                "slug" => "<a href=".url('blog/categoria/'.$post["category_slug"] .'/'.$post["slug"])." target='_blank'>".url('blog/categoria/'.$post["category_slug"] .'/'.$post["slug"])."</a>",
                "category" => $post["category_name"],
                "status" => $post["published_format"],
                //"published_at" => (new Carbon($post["published_at"]))->format('g:iA d-m-Y'),
                "created_at" => $post["created_at"]
            );
        }
        $posts = $posts->toArray();
        if(isset($data)){
            $posts["data"] = '';
            $posts["data"] = $data;
        }
        return $posts;
    }
}