<?php

namespace App\Http\Requests\Cms\Content;

use Illuminate\Foundation\Http\FormRequest;

class GeneralInformationRequest extends FormRequest
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

    public function attributes(){
            return [
                'phone_fields.*.number' => 'teléfono',
                'whatsapp_fields.*.number' => 'whatsapp',
                'phone_fields.*.department' => 'departamento',
                'whatsapp_fields.*.department' => 'departamento',
            ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'location' => 'required',
            'phone' => 'required|digits:7',
            'email' => 'required|email|max:100',
            'billing_url' => 'required|sometimes|url',
            //'whatsapp_fields' => 'required',
            'whatsapp_fields.*.number' => 'required',
            'whatsapp_fields.*.department' => 'required',
            'phone_fields.*.number' => 'required',
            'phone_fields.*.department' => 'required'
        ];
    }
}
