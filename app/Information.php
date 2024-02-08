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

    protected $appends = ['central_phone_formatted','main_office_formatted','whatsapp_formatted','phone_numbers_formatted'];

    public function getCentralPhoneFormattedAttribute(){
        if($this->central_phone){
            return '(511) '.substr($this->central_phone,0,3).'-'.substr($this->central_phone,3,4);
        }
    }

    public function getCentralPhoneValueAttribute(){
        if($this->central_phone){
            return '(511)'.$this->central_phone;
        }
    }

    public function getMainOfficeFormattedAttribute(){
        if($this->main_office){
            return '(511) '.substr($this->main_office,0,3).'-'.substr($this->main_office,3,4);
        }
    }

    public function getMainOfficeValueAttribute(){
        if($this->main_office){
            return '(511)'.$this->main_office;
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
                        $number = null;
                        if($value2 && strlen($value2) == 9){
                            $number = substr($value2,0,3).'-'.substr($value2,3,3).'-'.substr($value2,6,3);
                        }
                        else if($value2 && strlen($value2) == 7){
                            $number = substr($value2,0,3).'-'.substr($value2,3,4);
                        }
                        else{
                            $number = $value2;
                        }
                        $data[$key]['number_format'] = $number;
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

