<?php

namespace App\Http\Requests\Cms;

use Illuminate\Foundation\Http\FormRequest;

class CamiRequest extends FormRequest
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
            'title_es' => 'required',
            'title_en' => 'required',
            'description_es' => 'required',
            'description_en' => 'required',
            'title_team_es' => 'required',
            'title_team_en' => 'required',
            'description_team_es' => 'required',
            'title_projects_es' => 'required',
            'title_projects_en' => 'required'

        ];
        switch ($this->method()) {
            case 'POST':
                $rules = array_merge(
                    $rules,
                    ['logo' => 'sometimes|required']
                );
                break;
        }
        return $rules;
    }
}
