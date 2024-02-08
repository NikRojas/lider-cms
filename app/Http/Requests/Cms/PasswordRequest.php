<?php

namespace App\Http\Requests\Cms;

use Illuminate\Foundation\Http\FormRequest;

class PasswordRequest extends FormRequest
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
    
    public function rules()
    {
        return [
            'current_password' => 'required|min:8',
            'new_password' => 'required|min:8|confirmed|alpha_dash',
            'new_password_confirmation' => 'required'
        ];
        
    }
}
