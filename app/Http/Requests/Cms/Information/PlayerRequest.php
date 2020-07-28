<?php

namespace App\Http\Requests\Admin\Information;

use Illuminate\Foundation\Http\FormRequest;

class PlayerRequest extends FormRequest
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
            'full_name' => 'required|max:100',
            'job' => 'required|max:100',
            'department_id' => 'required'
            //'image_1' => 'sometimes|required|nullable',
        ];
        switch ($this->method()) {
            case 'POST':   
                $rules = array_merge(
                    $rules,
                    ['image' => 'required','image_hover' => 'required']
                );
            break;
            case 'PUT':   
                $rules = array_merge(
                    $rules,
                    ['image' => 'sometimes|required', 'image_hover' => 'sometimes|required']
                );
            break;
        }
        return $rules;
    }
}
