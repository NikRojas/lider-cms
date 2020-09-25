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
        /*if($this->locale == 'es'){
            return [
                'name.required' => 'Por favor ingrese su :attribute.',
                'required' => 'Por favor ingrese su :attribute.',
            ]; 
        }
        else{*/
            return [
                'name.required' => 'Please insert :attribute.',
                'required' => 'Please insert :attribute.',
            ]; 
        //}
         
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
          'email' => 'required|max:100|email',
          'mobile' => 'required|digits_between:7,9',
          'document_number' => 'required|digits:7',
          'project_type_department_id' => 'required',
          'accepted' => 'accepted'
        ];
    }
}
