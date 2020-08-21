<?php

namespace App\Http\Requests\Cms\Project;

use Illuminate\Foundation\Http\FormRequest;

class ProjectRequest extends FormRequest
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
            'title_es' => 'required|max:60',
            'title_en' => 'required|max:60',
            'rooms_es' => 'required|max:60',
            'rooms_en' => 'required|max:60',
            'footage_es' => 'required|max:60',
            'footage_en' => 'required|max:60',
            'advisors' => 'required|array',
            'district'              => 'required',
            'department'            => 'required',
            'province'              => 'required',
            'url_google_maps' => 'required|url',
            'url_waze' => 'required|url',
            'text_place_es' => 'required|max:80',
            'text_place_en' => 'required|max:80',
            'project_status_id' => 'required',
            'location' => 'required',
            'statuses' => 'required|array',
            'financial_entities' => 'required|array',
            'features' => 'required|array',
            'price_total' => 'required',
            'description_en' => 'required',
            'description_es' => 'required',
            'price_total_foreign' => 'required',
            'latitude' => 'required',
            'longitude' => 'required',
        ];
        switch ($this->method()) {
            case 'POST':   
                $rules = array_merge(
                    $rules,
                    ['logo' => 'required','brochure' => 'required','banner_es' => 'required','banner_en' => 'required']
                );
            break;
            case 'PUT':   
                $rules = array_merge(
                    $rules,
                    ['logo' => 'sometimes|required','brochure' => 'sometimes|required', 'banner_es' => 'sometimes|required','banner_en' => 'sometimes|required']
                );
            break;
        }
        return $rules;
    }
}
