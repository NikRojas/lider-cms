<?php

namespace App\Http\Requests\Cms;

use Illuminate\Foundation\Http\FormRequest;

class DepartmentRequest extends FormRequest
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
            'image' => 'sometimes|required',
            'logo_white' => 'sometimes|required',
            'excerpt' => 'required|max:60',
            'banner' => 'sometimes|required',
        ];
    }
}
