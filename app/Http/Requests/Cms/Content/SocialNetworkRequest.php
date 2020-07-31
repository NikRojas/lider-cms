<?php

namespace App\Http\Requests\Cms\Content;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SocialNetworkRequest extends FormRequest
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
            'master_social_network_id' => 'required|max:100',
            'url' => ['required','url'],
        ];
    }
}
