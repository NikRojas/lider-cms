<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class LeadRequest extends FormRequest
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
          'digits_between' => 'Debe ingresar un número de teléfono o celular entre :min y :max dígitos.',
          'email.unique' => 'El correo electrónico ya se encuentra registrado.',
          'email.email' => 'Por favor ingrese un :attribute válido.',
          'full_name.required' => 'Por favor ingrese su :attribute.',
          'required' => 'Por favor ingrese su :attribute.',
          'phone.required' => 'Por favor ingrese su teléfono o celular.',
          'email.regex' => 'Por favor ingrese un dominio de correo válido.',
          'lead_medium_id.required' => 'Por favor ingrese el medio por el que desee ser contactado.',
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
          'company' => 'required|max:100',
          //'email' => 'required|email',
          'email' => ['required','email','regex:/@(?!' . implode('|', array_map(function ($item){return str_replace('.', '\.', $item);}, config('mail.banned_servers'))) . ')/'],
          'phone' => 'required|digits_between:7,9',
          'message' => 'required',
          'lead_medium_id' => 'required',
          'accepted' => 'accepted'
        ];
    }
}
