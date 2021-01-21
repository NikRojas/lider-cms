<?php

namespace App\Http\Requests\Cms;

use Illuminate\Foundation\Http\FormRequest;

class TestimonialRequest extends FormRequest
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
            'title_es' => 'required|max:100',
            'title_en' => 'required|max:100',
            'project' => 'required|max:100',
            /*'description_es' => 'required',
            'description_en' => 'required|max:100',*/
        ];
        if($this->type_video == true){
            switch ($this->method()) {
                case 'POST':
                    $rules = array_merge(
                        $rules,
                        ['image' => 'required']
                    );
                break;
                case 'PUT':
                    $rules = array_merge(
                        $rules,
                        ['image' => 'sometimes|required']
                    );
                break;
            }
            
            $rules = array_merge(
                $rules,
                ['url_video' => 'sometimes|nullable|url']
            );
        }
        else{
            $rules = array_merge(
                $rules,
                ['description_es' => 'required',
                'description_en' => 'required']
            );
        }
        
        return $rules;
    }
}
