<?php

namespace App\Http\Requests\Cms\SalesStatistics;

use Illuminate\Foundation\Http\FormRequest;

class OrderExportRequest extends FormRequest
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
