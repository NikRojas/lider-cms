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
            'icon' => 'required',
            'description_es' => 'required',
            'description_en' => 'required',
            'image' => 'required',
            //'files_es' => 'required',
            //'files_en' => 'required'
            'files.*.title_es' => 'required',
            'files.*.description_es' => 'required',
            'files.*.title_en' => 'required',
            'files.*.description_en' => 'required',
        ];
        switch ($this->method()) {
            case 'POST':
                $rules = array_merge(
                    $rules,
                    ['image' => 'sometimes|required']
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
