<?php

namespace App\Http\Requests\Cms\AdvisorySystem;

use Illuminate\Foundation\Http\FormRequest;

class TpsNavStepRequest extends FormRequest
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
            'title' => 'required',
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
