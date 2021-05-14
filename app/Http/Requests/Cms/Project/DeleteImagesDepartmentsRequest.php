<?php

namespace App\Http\Requests\Cms\Project;

use Illuminate\Foundation\Http\FormRequest;

class DeleteImagesDepartmentsRequest extends FormRequest
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

    public function messages(){
        return [
            'images.required' => 'Debe seleccionar al menos una imagen',
        ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'images' => 'required'
        ];
        return $rules;
    }
}
