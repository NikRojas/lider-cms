<?php

namespace App\Http\Requests\Cms\Administration;

use Illuminate\Foundation\Http\FormRequest;

class AdvisorRequest extends FormRequest
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
            'name' => 'required|max:100',
            'mobile' => 'required|digits:9',
            'email' => 'required|max:100',
            'avatar' => 'sometimes|required'
        ];
        /*switch ($this->method()) {
            case 'POST':   
                $rules = array_merge(
                    $rules,
                    ['avatar' => 'required']
                );
            break;
            case 'PUT':   
                $rules = array_merge(
                    $rules,
                    ['avatar' => 'sometimes|required']
                );
            break;
        }*/
        return $rules;
    }
}
