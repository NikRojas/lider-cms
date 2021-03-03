<?php

namespace App\Http\Requests\Cms\Project;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class BannerRequest extends FormRequest
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
        $rules = [];
        switch ($this->method()) {
            case 'POST':
                $rules = array_merge(
                    $rules,
                    ['image_es' => 'required','image_responsive_es' => 'required','image_en' => 'required','image_responsive_en' => 'required']
                );
            break;
            case 'PUT':
                $rules = array_merge(
                    $rules,
                    ['image_es' => 'sometimes|required','image_responsive_es' => 'sometimes|required' ,'image_en' => 'sometimes|required','image_responsive_en' => 'sometimes|required']
                );
            break;
        }
        return $rules;
    }
}
