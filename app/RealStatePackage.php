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
    protected $appends = ['price_separation_format'];

    public function projectRel()
    {
        return $this->belongsTo('App\Project', 'project_id', 'id');
    }

    public function departmentsRel()
    {
        return $this->belongsToMany('App\Department', 'real_state_package_departments', 'real_state_package_id', 'department_id');
    }

    public function getPriceSeparationFormatAttribute(){
        $symbol = null;
        if($this->projectRel->currencyRel){
            $symbol = $this->projectRel->currencyRel->symbol;
        }
        return $symbol.' '.number_format($this->price_separation, 0, '.', ',');
    }
}