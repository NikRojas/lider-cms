<?php

namespace App\Http\Requests\Admin;

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
            'contrasena_actual' => 'required|min:8',
            'contrasena_nueva' => 'required|min:8|confirmed|alpha_dash',
            'contrasena_nueva_confirmation' => 'required'
        ];
        
    }
}
