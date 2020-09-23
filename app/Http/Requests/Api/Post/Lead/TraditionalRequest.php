<?php

namespace App\Http\Requests\Api\Post\Lead;

use Illuminate\Foundation\Http\FormRequest;

class TraditionalRequest extends FormRequest
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
          'email.email' => 'Por favor ingrese un :attribute válido.',
          'name.required' => 'Por favor ingrese su :attribute.',
          'required' => 'Por favor ingrese su :attribute.',
          'phone.required' => 'Por favor ingrese su teléfono o celular.',
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
          'name' => 'required|max:100',
          'email' =>  'required|max:100|email',
          'mobile' => 'required|digits_between:7,9',
          'lead_medium_id' => 'required',
          'accepted' => 'accepted'
        ];
    }
}
