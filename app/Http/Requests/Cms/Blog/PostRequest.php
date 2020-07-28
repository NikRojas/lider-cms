<?php

namespace App\Http\Requests\Admin\Blog;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PostRequest extends FormRequest
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
        /*return [
            //'name' => ['required',Rule::unique('categories')->ignore($this->id)],
        ];*/
        $rules = [
            'title' => 'required|max:100',
            'excerpt' => 'sometimes|nullable|max:200',
            'slug' => ['required',Rule::unique('posts')->ignore($this->id)],
            'content' => 'required',
            'published' => 'required',
            'category_id' => 'required',
            'tags' => 'required'
        ];
        switch ($this->method()) {
            case 'POST':   
                $rules = array_merge(
                    $rules,
                    ['image' => 'required','thumbnail' => 'required']
                );
            break;
            case 'PUT':   
                $rules = array_merge(
                    $rules,
                    ['image' => 'sometimes|required', 'thumbnail' => 'sometimes|required']
                );
            break;
        }
        return $rules;
    }
}
