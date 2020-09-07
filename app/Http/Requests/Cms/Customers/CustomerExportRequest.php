<?php

namespace App\Http\Requests\Cms\Customers;

use Illuminate\Foundation\Http\FormRequest;

class CustomerExportRequest extends FormRequest
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
        if(!$this->total){
            return [
                'range' => 'required',
            ];
        }
    }
}
