<?php

namespace App\Http\Requests\Cms\Administration;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ViewRequest extends FormRequest
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
            'sap_code' => ['required',Rule::unique('projects_views')->ignore($this->id),'max:100'],
            'name' => ['required','max:100'],
        ];
    }
}
