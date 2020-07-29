<?php

namespace App\Http\Requests\Cms\Cooltura;

use Illuminate\Foundation\Http\FormRequest;

class GalleryRequest extends FormRequest
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
        $rules =  [
            //'image' => 'required',
            'title' => 'required|max:100',
           'description' => 'required'
        ];
        switch ($this->method()) {
            case 'POST':   
                $rules = array_merge(
                    $rules,
                    ['image' => 'required']
                );
            break;
            case 'PUT':   
                $rules = array_merge(
                    $rules,
                    ['image' => 'sometimes|required']
                );
            break;
        }
        return $rules;
    }
}
