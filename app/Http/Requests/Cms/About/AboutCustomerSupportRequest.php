<?php

namespace App\Http\Requests\Cms\About;

use Illuminate\Foundation\Http\FormRequest;

class AboutCustomerSupportRequest extends FormRequest
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
            'title_es' => 'required|max:150',
            'title_en' => 'required|max:150',
            'description_es' => 'required',
            'description_en' => 'required',
        ];
        return $rules;
    }
}
