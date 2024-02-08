<?php

namespace App\Http\Requests\Api\Post\Lead;

use App\MasterDocumentType;
use Illuminate\Foundation\Http\FormRequest;

class OnlineAppointmentRequest extends FormRequest
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
          'mobile.digits_between' => 'Debe ingresar un número de teléfono o celular entre :min y :max dígitos.',
          //'email.email' => 'Por favor ingrese un :attribute válido.',
          'name.required' => 'Por favor ingrese su :attribute.',
          'lastname.required' => 'Por favor ingrese su apellido.',
          'required' => 'Por favor ingrese su :attribute.',
          'mobile.required' => 'Por favor ingrese su teléfono o celular.',
          'project_id.required' => 'Por favor ingrese un Proyecto.',
          'schedule.required' => 'Por favor ingrese el horario que quiere ser contactado.',
          'id_canal.required' => 'Por favor ingrese un canal.',
          'document_number.digits_between' => 'Debe ingresar un número de documento entre :min y :max dígitos.',
          'document_number.required' => 'Por favor ingrese su número de documento.',
          'type_document_id.required' => 'Por favor ingrese su tipo de documento.',
      ];  
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
          'email' =>  'required|max:100|email',
          'mobile' => 'required|digits_between:7,9',
          'document_number' => 'required',
          'project_id' => 'required',
          'schedule' => 'required',
          'accepted' => 'accepted',
          'id_canal' => 'required',
          'type_document_id' => 'required',
        ];
        $dni = MasterDocumentType::where('description','DNI')->first();
        $ce = MasterDocumentType::where('description','Carnet de Extranjería')->first();
        $pas = MasterDocumentType::where('description','Pasaporte')->first();
        if($this->type_document_id == $dni->id){
            $rules = array_merge($rules, 
                ['document_number' => ['required','digits:8']
            ]);
        }
        else if($this->type_document_id == $pas->id || $this->type_document_id == $ce->id){
            $rules = array_merge($rules, ['document_number' => ['required','digits_between:8,12']]);
        }
        return $rules;
    }
}
