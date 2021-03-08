<?php

namespace App\Http\Requests\Cms\Project;

use Illuminate\Validation\Rule;
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

    /*
    public function messages()
    {
        return [
            'images0.required' => 'Debe ingresar al menos una imagen'
        ];
    }
    */

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'name_en' => ['required',Rule::unique('projects')->ignore($this->id),'max:100'],
            'name_es' => ['required',Rule::unique('projects')->ignore($this->id),'max:100'],
            'rooms_es' => 'required|max:60',
            'rooms_en' => 'required|max:60',
            'footage_es' => 'required|max:60',
            'footage_en' => 'required|max:60',
            'advisors' => 'required',
            'district'              => 'required',
            'department'            => 'required',
            'province'              => 'required',
            'url_google_maps' => 'nullable|url',
            'url_waze' => 'nullable|url',
            'text_place_es' => 'required|max:80',
            'text_place_en' => 'required|max:80',
            'project_status_id' => 'required',
            'location' => 'required',
            //'images0' => 'required',
            //'statuses' => 'required',
            'financial_entities' => 'required',
            'features' => 'required',
            'price_total' => 'nullable|max:1000000000|numeric',
            'description_en' => 'required',
            'description_es' => 'required',
            'url_video' => 'nullable|url',
            'price_total_foreign' => 'nullable|max:1000000000|numeric',
            //'price' => 'nullable|max:1000000000|numeric',
            //'iframe_map' => 'required',
            'sales_room_es' => 'required',
            'sales_room_en' => 'required',
            'schedule_attention_es' => 'required',
            'schedule_attention_en' => 'required',


            'seo_image' => 'sometimes|required',
            'seo_title_es' => 'sometimes|max:60',
            'seo_title_en' => 'sometimes|max:60',
            'seo_keywords_es' => 'sometimes',
            'seo_keywords_en' => 'sometimes',
            'seo_description_es' => 'sometimes|max:160',
            'seo_description_en' => 'sometimes|max:160'
        ];
        switch ($this->method()) {
            case 'POST':
                $rules = array_merge(
                    $rules,
                    [
                        'iframe_map' => 'required',
                        'logo' => 'required',
                        'logo_colour' => 'required',
                        'card' => 'required',
                        'card_hover' => 'required',
                        'brochure' => 'required',
                        'banner' => 'required'
                        ]
                );
            break;
            case 'PUT':
                $rules = array_merge(
                    $rules,
                    [
                        'iframe_map' => 'sometimes|required',
                        'logo' => 'sometimes|required',
                        'logo_colour' => 'sometimes|required',
                        'card' => 'sometimes|required',
                        'card_hover' => 'sometimes|required',
                        'brochure' => 'sometimes|required',
                         'banner' => 'sometimes|required'
                    ]
                );
            break;
        }
        return $rules;
    }
}
