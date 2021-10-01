<?php

namespace App\Http\Requests\Cms\Project;

use Illuminate\Foundation\Http\FormRequest;

class TpsGeneralInformationRequest extends FormRequest
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
            'tps_principal_title' => 'nullable',
            //'tps_latitude' => 'nullable|max:200',
            'tps_url_model' => 'nullable|url',
            //'tps_longitude' => 'nullable|max:200',
            'tps_location_description' => 'nullable',
            'tps_base_dsct_ci' => 'nullable|integer',
            'id' => 'required',
        ];
    }
}
