<?php

namespace App\Http\Requests\Cms;

use Illuminate\Foundation\Http\FormRequest;

class CamiElementRequest extends FormRequest
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

    public function validator($factory)
    {
        return $factory->make(
            $this->sanitize(),
            $this->container->call([$this, 'rules'])
        );
    }

    public function sanitize()
    {
        $this->merge([
            'files' => json_decode($this->input('files'), true)
        ]);
        return $this->all();
    }
 
    public function attributes()
    {
        return [
                'files.*.title_es' => 'título español',
                'files.*.description_es' => 'descripción español',
                'files.*.title_en' => 'título inglés',
                'files.*.description_en' => 'descripción inglés',
                'files.*.file' => 'imagen'
            ];
    }

    public function messages(){
        return [
            'images0.required' => 'Debe ingresar al menos un elemento'
        ];
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'name_es' => 'required',
            'name_en' => 'required', 
            'description_es' => 'required',
            'description_en' => 'required',
            'image' => 'required',
            'files.*.title_es' => 'required',
            'files.*.file' => 'required',
            'files.*.description_es' => 'required',
            'files.*.title_en' => 'required',
            'files.*.description_en' => 'required',
            'images0' => 'required'
        ];
        switch ($this->method()) {
            case 'POST':
                $rules = array_merge(
                    $rules,
                    ['image' => 'required','icon' => 'required']
                );
            break;
            case 'PUT':
                $rules = array_merge(
                    $rules,
                    ['image' => 'sometimes|required','icon' => 'sometimes|required']
                );
            break;
        }
        return $rules;
    }
}
