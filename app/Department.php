<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Department extends Model
{
    protected $guarded = [];
    protected $appends = ['price_foreign_format','price_format','updated_at_format','area_format','parking_text_format','warehouse_text_format'];

    public function viewRel()
    {
        return $this->belongsTo('App\ProjectView', 'view_id', 'id');
    }

    public function etapaRel()
    {
        return $this->belongsTo('App\EtapaProyecto', 'etapa_id', 'id');
    }

    public function projectRel()
    {
        return $this->belongsTo('App\Project', 'project_id', 'id');
    }

    public function sectorRel()
    {
        return $this->belongsTo('App\ProjectSector', 'sector_id', 'id');
    }

    public function tipologyRel()
    {
        return $this->belongsTo('App\ProjectTypeDepartment','type_department_id','id');
    }

    public function getPriceFormatAttribute()
    {
        return 'S/ '.number_format($this->price, 0, '.', ',');
    }

    public function getPriceForeignFormatAttribute()
    {
        return '$ '.number_format($this->price_foreign, 0, '.', ',');
    }

    public function getUpdatedAtFormatAttribute() {
        return (new Carbon($this->updated_at))->format('g:iA d-m-Y');
    }

    public function getAreaFormatAttribute()
    {
        return number_format($this->area, 2);
    }

    public function packageRel()
    {
        return $this->belongsToMany('App\RealStatePackage', 'real_state_package_departments', 'department_id', 'real_state_package_id');
    }

    public function getParkingTextFormatAttribute()
    {
        if($this->sector_id == 2){
            $temp1 = str_replace("ESTACIONAMIENTO SIMPLE ", "",$this->description);
            return str_replace("ESTACIONAMIENTO ", "",$temp1);
        }
    }

    public function getWarehouseTextFormatAttribute()
    {
        if($this->sector_id == 3){
            $temp1 = str_replace("DEPOSITO ", "",$this->description);
            return str_replace("DEPÓSITO ", "",$temp1);
        }
    }
}