<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class ApplicantDestinationRequest extends FormRequest
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
            'email_destination_job.*.email' => 'Los campos correo(s) electrónico(s) destino deben ser una dirección de correo válida.',
            'email_destination_job.*.required' => 'Los campos correo(s) electrónico(s) destino es obligatorio.',
            'email_destination_job.required' => 'Los campos correo(s) electrónico(s) destino es obligatorio.'
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
            'email_destination_job' => 'required',
            'email_destination_job.*' => 'required|email|max:100'
        ];
    }
}
