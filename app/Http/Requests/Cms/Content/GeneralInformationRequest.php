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

    public function attributes()
    {
        return [
                'phone_numbers.*.number' => 'teléfono',
                'whatsapp_numbers.*.number' => 'whatsapp',
                'phone_numbers.*.department' => 'departamento',
                'whatsapp_numbers.*.department' => 'departamento',
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
            'central_phone' => 'nullable|sometimes|digits:7',
            'main_office' => 'nullable|sometimes|digits:7',
            'email' => 'required|email|max:100',
            'billing_url' => 'nullable|sometimes|url',
            'link_jobs' => 'nullable|sometimes|url',
            //'whatsapp_numbers' => 'required',
            'whatsapp_numbers.*.number' => 'required',
            'whatsapp_numbers.*.department' => 'required',
            'phone_numbers.*.number' => 'required',
            'phone_numbers.*.department' => 'required'
        ];
    }
}
