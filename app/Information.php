<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Ubigeo;

class Information extends Model
{
    protected $table = 'information';
    protected $guarded = [];
    protected $casts = [
        'whatsapp_numbers' => 'array',
        'phone_numbers' => 'array'
    ];

    protected $appends = ['phone_formatted', 'phone_value','whatsapp_formatted','phone_numbers_formatted'];

    public function getPhoneFormattedAttribute(){
        if($this->phone){
            return '(511) '.substr($this->phone,0,3).'-'.substr($this->phone,3,4);
        }
    }

    public function getPhoneValueAttribute(){
        if($this->phone){
            return '(511)'.$this->phone;
        }
    }

    public function getWhatsappFormattedAttribute(){
        $data = [];
        if($this->whatsapp_numbers){
            foreach ($this->whatsapp_numbers as $key => $value) {
                foreach ($value as $key2 => $value2) {
                    if($key2 == 'department'){
                        $data[$key]["department"] = Ubigeo::where('code_department',$value2)->first()->department; 
                    }
                    else{
                        $data[$key][$key2] = $value2;
                    }
                }
            }
        }
        return $data;
    }

    public function getPhoneNumbersFormattedAttribute(){
        $data = [];
        $department = [];
        //$code_department = NULL;
        if($this->phone_numbers){
            foreach ($this->phone_numbers as $key => $value) {
                foreach ($value as $key2 => $value2) {
                    if($key2 == 'department'){
                        $department = Ubigeo::where('code_department',$value2)->first();
                        $data[$key]["department"] = $department->department; 
                    }
                    else{
                        $department = Ubigeo::where('code_department',$value["department"])->first();
                        //dd($department);
                        $data[$key]["number"] = '(0'.$department["code_number"].') '.$value2;
                    }
                }
            }
        }
        return $data;
    }
}

