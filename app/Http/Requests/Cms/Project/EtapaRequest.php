<?php

namespace App\Http\Requests\Cms\Project;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class EtapaRequest extends FormRequest
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
        return [
            'name' => ['required','max:100'],
            'sap_code' => ['required',Rule::unique('etapas_proyectos')->ignore($this->id),'max:100'],
            'project_status_id' => 'required'
        ];
    }
}
