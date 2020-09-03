<?php
namespace App\Repositories;

use App\Category;

class CategoriesRepository
{
    public function datatable($items_per_page, $q = false)
    {
        if ($q) {
            $elements = Category::where('name_en', 'like', '%'.$q.'%')
            ->OrWhere('name_es', 'like', '%'.$q.'%')
            ->orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        } else {
            $elements = Category::orderBy('created_at', 'desc')
            ->paginate($items_per_page);
        }
        foreach ($elements as $element) {
            $data[] = array(
                "id" => $element["id"],
                "name_es" => $element["name_es"],
                "slug_es" => '<span class="badge badge-pill badge-info badge-lg">'.$element["slug_es"].'</span>',
                "name_en" => $element["name_en"],
                "slug_en" => '<span class="badge badge-pill badge-info badge-lg">'.$element["slug_en"].'</span>',
                "can_delete" => $element["can_delete"]
            );
        }
        $elements = $elements->toArray();
        if (isset($data)) {
            $elements["data"] = '';
            $elements["data"] = $data;
        }
        return $elements;
    }
}
