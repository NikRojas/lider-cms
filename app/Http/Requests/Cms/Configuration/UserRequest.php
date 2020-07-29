<?php

namespace App\Http\Requests\Cms\Configuration;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $rules = [
            //'username' => ['required',Rule::unique('users')->ignore($this->id),'alpha_dash'],
            'email' => ['required',Rule::unique('users')->ignore($this->id),'email'],
            'name' => 'required',
            //'role_id' => 'required',
        ];

        switch ($this->method()) {
            case 'POST':   
                $rules = array_merge(
                    $rules,
                    ['password' => 'required|min:8']
                );
            break;
            case 'PUT':   
                $rules = array_merge(
                    $rules,
                    ['password' => 'nullable|min:8']
                );
            break;
        }

        return $rules;
    }
}
