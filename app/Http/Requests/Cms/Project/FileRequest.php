<?php

namespace App\Http\Requests\Cms\Project;

use Illuminate\Foundation\Http\FormRequest;

class FileRequest extends FormRequest
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
            'name_en' => 'required|max:100',
            'name_es' => 'required|max:100',
        ];
        switch ($this->method()) {
          case 'POST':   
              $rules = array_merge(
                  $rules,
                  ['file' => 'required']
              );
          break;
          case 'PUT':   
              $rules = array_merge(
                  $rules,
                  ['file' => 'sometimes|required']
              );
          break;
        }
        return $rules;
    }
}
