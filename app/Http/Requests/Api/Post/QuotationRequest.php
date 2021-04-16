<?php

namespace App\Http\Requests\Api\Post;

use Illuminate\Foundation\Http\FormRequest;

class QuotationRequest extends FormRequest
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
        $messages = [
        'name.required' => 'Por favor ingrese su :attribute.',
        'lastname.required' => 'Por favor ingrese su apellido.',
        'required' => 'Por favor ingrese su :attribute.',
        'digits_between' => 'Debe ingresar un número de teléfono o celular entre :min y :max dígitos.',
        'mobile.required' => 'Por favor ingrese su teléfono o celular.',
        'mobile.required' => 'Por favor ingrese su teléfono o celular.',
        'accepted.accepted' => 'Debe aceptar nuestros términos y condiciones.',
        ];
        return $messages;
  }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
          'name' => 'required|max:170',
          'lastname' => 'required|max:170',
          'email' => 'required|max:100|email',
          'mobile' => 'required|digits_between:7,9',
          'document_number' => 'required|digits:8',
          'project_type_department_id' => 'required',
          'project_id' => 'required',
          'accepted' => 'accepted'
        ];
    }
}
