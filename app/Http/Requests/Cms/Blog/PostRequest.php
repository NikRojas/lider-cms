<?php

namespace App\Http\Requests\Cms\Blog;

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

    public function validator($factory)
    {
        return $factory->make(
            $this->sanitize(),
            $this->container->call([$this, 'rules'])
        );
    }

    public function sanitize()
    {
        $this->merge([
            'tags' => json_decode($this->input('tags'), true)
        ]);
        return $this->all();
    }

    public function attributes()
    {
            return [
                'tags.*.tag_es' => 'tag español',
                'tags.*.tag_en' => 'tag inglés',
            ];
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
            'title_es' => 'required|max:100',
            'title_en' => 'required|max:100',
            'excerpt_es' => 'sometimes|nullable|max:200',
            'excerpt_en' => 'sometimes|nullable|max:200',
            'slug_es' => ['required',Rule::unique('posts')->ignore($this->id)],
            'slug_en' => ['required',Rule::unique('posts')->ignore($this->id)],
            'content_es' => 'required',
            'content_en' => 'required',
            'published' => 'required',
            'category_id' => 'required',
            'tags.*.tag_es' => 'required',
            'tags.*.tag_en' => 'required',
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
