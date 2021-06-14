<?php

namespace App\Http\Requests\Cms\Project;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePaymentCredential extends FormRequest
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

    public function attributes()
    {
        return ["type_currency" => 'moneda de la tienda'];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user' => 'required',
            'type_currency' => 'required',
            'password_test' => 'required',
        ];
    }
}
