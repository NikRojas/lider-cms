<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Authenticatable
{
    use Notifiable;
    use SoftDeletes;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','role_id','status','avatar'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /*public function relRole()
    {
        return $this->hasOne('App\Role','id','role_id');
    }*/

    protected $appends = ['avatar_initials','status_format','created_at_format'];

    public function getStatusFormatAttribute(){
        if($this->status){
            return "<i class='fas fa-circle text-success'></i>";
        }
        else{
            return "<i class='fas fa-circle text-danger'></i>";
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

    public function getCreatedAtFormatAttribute( $value ) {
        $date = Carbon::parse($this->created_at);
        return $date->isoFormat('DD').' de '.ucfirst($date->isoFormat('MMMM')).', '.$date->isoFormat('YYYY');
    }
}
