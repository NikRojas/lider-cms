<?php

namespace App\Http\Requests\Cms\Blog;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CategoryRequest extends FormRequest
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
            'name_en' => ['required',Rule::unique('categories')->ignore($this->id),'max:100'],
            'name_es' => ['required',Rule::unique('categories')->ignore($this->id),'max:100'],
        ];
    }
}
