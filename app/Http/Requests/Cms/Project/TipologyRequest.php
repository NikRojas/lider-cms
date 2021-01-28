<?php

namespace App\Http\Requests\Cms\Project;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class TipologyRequest extends FormRequest
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

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'name' => ['required',Rule::unique('project_type_departments')->ignore($this->id),'max:100'],
            //'url'  => 'required|url'
            'area' => 'required',
            'price' => 'required|numeric',
            'room' => 'required|numeric|min:1'
            //'image' => 'sometimes|required'
        ];
        switch ($this->method()) {
          case 'POST':   
              $rules = array_merge(
                  $rules,
                  ['image' => 'required']
              );
          break;
          case 'PUT':   
              $rules = array_merge(
                  $rules,
                  ['image' => 'sometimes|required']
              );
          break;
        }
        return $rules;
    }
}
