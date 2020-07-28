<?php

namespace App\Http\Requests\Cms\Administration;

use Illuminate\Foundation\Http\FormRequest;

class FeatureProjectRequest extends FormRequest
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
        $rules = [
            //'image' => 'sometimes|required',
            'name_en' => 'required|max:100',
            'name_es' => 'required|max:100',
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
