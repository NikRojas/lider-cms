<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SocialNetwork extends Model
{
    protected $table = 'social_networks';
    protected $guarded = [];

    public function master_social_networks()
    {
        return $this->hasOne('App\MasterSocialNetwork','id','master_social_network_id');
    }
}
