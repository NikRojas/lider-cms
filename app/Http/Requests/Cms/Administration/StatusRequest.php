<?php

namespace App\Http\Requests\Cms\Administration;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StatusRequest extends FormRequest
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
            'name_en' => ['required',Rule::unique('project_statuses')->ignore($this->id),'max:100'],
            'name_es' => ['required',Rule::unique('project_statuses')->ignore($this->id),'max:100'],
        ];
    }
}
