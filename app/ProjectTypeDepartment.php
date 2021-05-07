<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProjectTypeDepartment extends Model
{
    protected $table = 'project_type_departments';
    protected $guarded = [];
    protected $casts = [
        'available' => 'boolean',
        'area' => 'decimal:2',
        'type_currency' => 'boolean',
        'price' => 'decimal:2'
    ];
    protected $appends = ['can_delete','price_format'];

    public function getCanDeleteAttribute(){
        $value = true;
        if(count($this->projectQuotationsRel) > 0){
            $value = false;
        }
        return $value;
    }

    public function getPriceFormatAttribute()
    {
        $type = null;
        if($this->type_currency){
            $type = 'S/ ';
        }
        else{
            $type = '$ ';
        }
        return $type.number_format($this->price, 0, '.', ',');
    }

    public function projectQuotationsRel()
    {
        return $this->hasMany('App\ProjectQuotation','project_type_department_id','id');
    }

    public function projectRel()
    {
        return $this->belongsTo('App\Project', 'project_id', 'id');
    }

    public function parentTypeDepartmentRel()
    {
        return $this->belongsTo(ProjectParentTypeDepartment::class, 'parent_type_department_id', 'id');
    }
}
