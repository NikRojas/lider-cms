<?php

namespace App\Http\Requests\Api\Post\Lead;

use Illuminate\Foundation\Http\FormRequest;

class SellLandRequest extends FormRequest
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
          //'email.email' => 'Por favor ingrese un :attribute válido.',
          'name.required' => 'Por favor ingrese su :attribute.',
          'required' => 'Por favor ingrese su :attribute.',
          'mobile.required' => 'Por favor ingrese su teléfono o celular.',
          'area.regex' => 'Debe ingresar un formato válido. Ejemplo: 100.50'
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
          'accepted' => 'accepted',
          'area' => 'required|regex:/^\d*(\.\d{1,2})?$/'
        ];
    }
}
