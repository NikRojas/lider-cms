<?php

namespace App\Http\Requests\Cms\Information;

use Illuminate\Foundation\Http\FormRequest;

class GeneralRequest extends FormRequest
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
            'description' => 'required',
            //'phone' => 'required|max:100',
            'cellphone' => 'required|max:100',
            'email' => 'required|email|max:100',
            'address_line_1' => 'required|max:100',
            'district' => 'required|max:100',
            //'address_line_2' => 'required|max:100',
        ];
    }
}
