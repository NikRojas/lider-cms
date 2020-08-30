<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProjectQuotation extends Model
{
    protected $table = 'project_quotation';
    protected $guarded = [];
    protected $appends = ['mobile_formatted'];

    public function projectRel()
    {
        return $this->belongsTo('App\Project','project_id','id');
    }

    public function projectTypeDepartmentRel()
    {
        return $this->belongsTo('App\ProjectTypeDepartment','project_type_department_id','id');
    }

    public function getMobileFormattedAttribute(){
        if($this->mobile && strlen($this->mobile) == 9){
            return substr($this->mobile,0,3).'-'.substr($this->mobile,3,3).'-'.substr($this->mobile,6,3);
        }
        else{
            return $this->mobile;
        }
    }
}
