<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class RealStatePackage extends Model
{
    protected $table = 'real_state_packages';
    protected $guarded = [];
    protected $casts = [
        'status' => 'boolean',
        'stock' => 'boolean',
    ];
    protected $appends = ['can_delete','status_calculate'];

    public function projectRel()
    {
        return $this->belongsTo('App\Project', 'project_id', 'id');
    }

    public function departmentsRel()
    {
        return $this->belongsToMany('App\Department', 'real_state_package_departments', 'real_state_package_id', 'department_id');
    }

    public function getCanDeleteAttribute(){
        /*$value = true;
        if(!$this->stock){    
            $value = false;
        }
        return $value;*/
        return true;
    }

    public function getStatusCalculateAttribute(){
        $value = true;
        foreach($this->departmentsRel as $value2){
            if(!$value2->available){
                $value = false;
                break;
            }
        }   
        return $value;
    }

    /*public function getPriceSeparationFormatAttribute(){
        $symbol = null;
        if($this->projectRel->currencyRel){
            $symbol = $this->projectRel->currencyRel->symbol;
        }
        return $symbol.' '.number_format($this->price_separation, 0, '.', ',');
    }*/
}