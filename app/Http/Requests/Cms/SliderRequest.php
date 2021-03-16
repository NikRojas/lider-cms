<?php

namespace App\Http\Requests\Cms;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SliderRequest extends FormRequest
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
            /*'url' => 'sometimes|url',
            'posicion' => ['required',
            Rule::unique('mov_slider')->ignore($this->id),
            'numeric','min:1'],*/
            'from' => 'required|date_format:H:i d-m-Y',
            'to' => 'required|date_format:H:i d-m-Y',
            'link' => 'nullable|sometimes|url'
        ];
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
