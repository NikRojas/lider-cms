<?php

namespace App\Http\Requests\Cms\About;

use Illuminate\Foundation\Http\FormRequest;

class AboutWarrantyElementRequest extends FormRequest
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
            'description_es' => 'required',
            'description_en' => 'required',
        ];
        return $rules;
    }
}
