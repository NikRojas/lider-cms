<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Advisor extends Model
{
    protected $guarded = [];
    protected $appends = ['can_delete','mobile_masked','avatar_initials'];
    protected $casts = [
        'tps_status' => 'boolean',
    ];
    protected $hidden = [
        'tps_password'
    ];

    public function projectsRel()
    {
        return $this->belongsToMany('App\Project','projects_advisors', 'advisor_id', 'project_id');
    }

    public function getCanDeleteAttribute(){
        $value = true;
        if(count($this->projectsRel) > 0){
            $value = false;
        }
        return $value;
    }

    public function getMobileMaskedAttribute(){
        if($this->mobile){
            return substr($this->mobile,0,3).'-'.substr($this->mobile,3,3).'-'.substr($this->mobile,6,3);
        }
    }

    public function getAvatarInitialsAttribute(){
        $temp = explode(' ',trim($this->name));
        $initials = strtoupper(substr($temp[0],0,1));
        if(count($temp) > 1){
            $initials = $initials.strtoupper(substr($temp[1],0,1));
        }
        return $initials;
    }
}
