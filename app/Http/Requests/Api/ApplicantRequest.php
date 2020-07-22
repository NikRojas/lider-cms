<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class ApplicantRequest extends FormRequest
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
          'digits_between' => 'Debe ingresar un número de teléfono o celular entre :min y :max dígitos.',
          'email.unique' => 'El correo electrónico ya se encuentra registrado.',
          'email.email' => 'Por favor ingrese un :attribute válido.',
          'full_name.required' => 'Por favor ingrese su :attribute.',
          'required' => 'Por favor ingrese su :attribute.',
          'phone.required' => 'Por favor ingrese su teléfono o celular.',
          'pdf.required' => 'Por favor ingrese su CV.',
          'url.url' => 'Por favor ingrese una URL válida.'
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
          'email' => 'required|email|unique:applicants',
          'phone' => 'required|digits_between:7,9',
          'job' => 'required|max:100',
          'pdf' => 'required',
          'url' => 'nullable|sometimes|url'
          /*'lead_medium_id' => 'required',
          'accepted' => 'accepted'*/
        ];
    }
}
