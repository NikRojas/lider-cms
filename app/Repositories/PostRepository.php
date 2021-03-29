<?php
namespace App\Repositories;

use App\Post;
use Carbon\Carbon;

class PostRepository
{
    public function datatable($items_per_page, $q = false)
    {
        $select = 'posts.id as post_id,
                    CASE WHEN LENGTH(posts.title_es)>=30 THEN CONCAT(RTRIM(LEFT(posts.title_es,30)),"...") ELSE posts.title_es END as title_es,
                    CASE WHEN LENGTH(posts.title_en)>=30 THEN CONCAT(RTRIM(LEFT(posts.title_en,30)),"...") ELSE posts.title_en END as title_en,
                    categories.id, categories.name_es as category_name_es,categories.name_en as category_name_en,
                    categories.slug_es as category_slug_es,categories.slug_en as category_slug_en,
                    posts.slug_en,posts.slug_es,posts.published,posts.created_at';
        if ($q) {
            $posts = Post::selectRaw($select)
            ->join('categories', 'categories.id', 'posts.category_id')
            ->where('posts.title_es', 'like', '%'.$q.'%')
            ->orWhere('posts.title_en', 'like', '%'.$q.'%')
            ->orderBy('posts.created_at', 'desc')
            ->paginate($items_per_page);
        } else {
            $posts = Post::selectRaw($select)
            ->join('categories', 'categories.id', 'posts.category_id')
            ->orderBy('posts.created_at', 'desc')
            ->paginate($items_per_page);
        }
        foreach ($posts as $post) {
            $status = null;
            if ($post['published']=="1") {
                $status = "Si";
            } else {
                $status = "No";
            }
            $url = config('services.web_url');
            $data[] = array(
                "id" => $post["post_id"],
                "title_es" => $post["title_es"],
                "title_en" => $post["title_en"],
                "url" => "<a style='text-decoration: underline;' href=".$url."/blog/categoria/".$post["category_slug_es"] .'/'.$post["slug_es"]." target='_blank'>".$url.'/blog/categoria/'.$post["category_slug_es"] .'/'.$post["slug_es"]."</a>
                <br><a style='text-decoration: underline;' href=".$url."/en/blog/category/".$post["category_slug_en"] .'/'.$post["slug_en"]." target='_blank'>".$url.'/en/blog/category/'.$post["category_slug_en"] .'/'.$post["slug_en"]."</a>",
                "category_es" => '<span class="badge badge-pill badge-info badge-lg">'.$post["category_name_es"].'</span>',
                "category_en" => '<span class="badge badge-pill badge-info badge-lg">'.$post["category_name_en"].'</span>',
                "status" => $status,
                //"published_at" => (new Carbon($post["published_at"]))->format('g:iA d-m-Y'),
                "created_at" => $post["created_at_format"]
            );
        }
        $posts = $posts->toArray();
        if (isset($data)) {
            $posts["data"] = '';
            $posts["data"] = $data;
        }
        return $posts;
    }
}
