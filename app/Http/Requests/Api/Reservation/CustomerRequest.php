<?php

namespace App\Http\Requests\Api\Reservation;

use App\MasterDocumentType;
use Illuminate\Foundation\Http\FormRequest;

class CustomerRequest extends FormRequest
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
        'type_document_id.required' => 'Por favor ingrese su tipo de documento.',
        'lastname.required' => 'Por favor ingrese su apellido paterno.',
        'lastname_2.required' => 'Por favor ingrese su apellido materno.',
        'required' => 'Por favor ingrese su :attribute.',
        'document_number.required' => 'Por favor ingrese su número de documento.',
        'digits_between' => 'Debe ingresar un número de teléfono o celular entre :min y :max dígitos.',
        'mobile.required' => 'Por favor ingrese su teléfono o celular.',
        'mobile.required' => 'Por favor ingrese su teléfono o celular.',
        'accepted.accepted' => 'Debe aceptar nuestros términos y condiciones.',
        'digits' => 'Debe ingresar un número de :digits dígitos.',
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
        $request = $this;
        $rules = [
          'name' => 'required|max:170',
          'lastname' => 'required|max:170',
          'lastname_2' => 'required|max:170',
          'type_document_id' => 'required',
          'email' => 'required|max:100|email',
          'mobile' => 'required|digits:9',
          //'document_number' => 'required|digits:8',
          'document_number' => 'required',
          'accepted' => 'accepted'
        ];

        $dni = MasterDocumentType::where('description','DNI')->first();
        $ce = MasterDocumentType::where('description','Carnet de Extranjería')->first();
        $pas = MasterDocumentType::where('description','Pasaporte')->first();
        if($this->type_document_id == $dni->name){
            $rules = array_merge($rules, 
                ['document_number' => ['required','digits:8']
            ]);
        }
        else if($this->type_document_id == $pas->name || $this->type_document_id == $ce->name){
            $rules = array_merge($rules, ['document_number' => ['required','digits:12']]);
        }
        return $rules;

    }
}
