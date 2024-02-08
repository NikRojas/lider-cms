<?php

namespace App\Http\Requests\Cms\Content;

use Illuminate\Foundation\Http\FormRequest;

class SeoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'seo_image' => 'sometimes|required',
            'title_es' => 'required|max:60',
            'title_en' => 'required|max:60',
            'seo_keywords_es' => 'required',
            'seo_keywords_en' => 'required',
            'seo_description_es' => 'required|max:160',
            'seo_description_en' => 'required|max:160'
        ];
    }
}
