<?php

namespace App\Http\Requests\Cms\Administration;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class TPSAdvisorRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $rules = [
        ];

        switch ($this->method()) {
            case 'POST':   
                $rules = array_merge(
                    $rules,
                    ['tps_password' => 'required|min:8']
                );
            break;
            case 'PUT':   
                $rules = array_merge(
                    $rules,
                    ['tps_password' => 'nullable|min:8']
                );
            break;
        }

        return $rules;
    }
}
