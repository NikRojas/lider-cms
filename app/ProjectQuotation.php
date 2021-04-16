<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class ProjectQuotation extends Model
{
    protected $table = 'project_quotation';
    protected $guarded = [];
    protected $appends = ['mobile_formatted','first_name','created_at_format','created_at_format_email','fullname'];

    public function projectRel()
    {
        return $this->belongsTo('App\Project','project_id','id');
    }

    public function advisorRel()
    {
        return $this->belongsTo('App\Advisor', 'advisor_id', 'id');
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
    
    public function getCreatedAtFormatAttribute(  ) {
        return (new Carbon($this->created_at))->format('g:iA d-m-Y');
    }

    public function getFirstNameAttribute(){
        $temp = explode(' ',trim($this->name));
        return $temp[0];
    }

    public function getCreatedAtFormatEmailAttribute() {
        $date = new Carbon($this->created_at);
        return $date->day.' de '.ucfirst($date->monthName).' '.$date->year;;
    }

    public function getFullnameAttribute() {
        return $this->name.' '.$this->lastname;
    }

}
