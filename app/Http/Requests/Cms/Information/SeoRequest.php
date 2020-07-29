<?php

namespace App\Http\Requests\Cms\Information;

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
            'title' => 'required|max:60',
            'seo_description' => 'required|max:160'
        ];
    }
}
