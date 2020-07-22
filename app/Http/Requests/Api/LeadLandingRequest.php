<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class LeadLandingRequest extends FormRequest
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
          'accepted.accepted' => 'Debe aceptar nuestros términos y condiciones.',
          'digits_between' => 'Número inválido.',
          'email.email' => 'Por favor ingrese un :attribute válido.',
          'email.regex' => 'Dominio de correo inválido.',
          //'full_name.required' => 'Por favor ingrese su :attribute.',
          'required' => 'Campo obligatorio.',
          //'phone.required' => 'Por favor ingrese su teléfono o celular.',
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
          'full_name' => 'required|max:100',
          //'email' => 'required|email',
          'email' => ['required','email','regex:/@(?!' . implode('|', array_map(function ($item){return str_replace('.', '\.', $item);}, config('mail.banned_servers'))) . ')/'],
          'phone' => 'required|digits_between:7,9',
          'company' => 'required|max:100',
          'accepted' => 'accepted'
        ];
    }
}
