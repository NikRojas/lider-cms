<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $guarded = ['id'];
    protected $casts = [
        'images' => 'array',
        'active' => 'boolean',
        'webhook_url_active' => 'boolean',
        'send_to_email' => 'boolean',
        'projects_related' => 'array',
        'form_videocall' => 'boolean',
        'sync_tipologia' => 'boolean',
        'reservation_in_package' => 'boolean',
    ];
    protected $appends = ['images_format','price_total_format','price_total_foreign_format','price_format','id_video','price_separation_format','price_parking_format','price_parking_foreign_format',
    'price_warehouse_sap_format','price_warehouse_foreign_sap_format','price_bill_format'];

    public function galleryRel()
    {
        return $this->hasMany('App\ProjectGallery', 'project_id', 'id')->orderBy('master_type_gallery_id')->orderBy('index');
    }

    public function quotationsRel()
    {
        return $this->hasMany('App\ProjectQuotation', 'project_id', 'id');
    }

    public function filesRel()
    {
        return $this->hasMany('App\ProjectFile', 'project_id', 'id');
    }

    public function virtualTourRel()
    {
        return $this->hasMany('App\ProjectVirtualTour', 'project_id', 'id');
    }

    public function tipologiesRel()
    {
        return $this->hasMany('App\ProjectTypeDepartment', 'project_id', 'id');
    }

    public function getIdVideoAttribute()
    {
        if ($this->url_video) {
            /*$id = explode("?v=", $this->url_video);
            return $id[1];*/
            if(strpos($this->url_video, "?v=") !== false){
                $id = explode("?v=", $this->url_video);
                return $id[1];
            } else{
                $parsed = parse_url($this->url_video);
                $path = $parsed['path'];
                $path_parts = explode('/', $path);
                $desired_output = $path_parts[1];
                return $desired_output;
            }
        }
    }

    public function getImagesFormatAttribute()
    {
        return json_decode($this->images);
    }
 
    public function getPriceTotalFormatAttribute()
    {
        return 'S/ '.number_format($this->price_total, 0, '.', ',');
    }

    public function getPriceFormatAttribute()
    {
        return 'S/ '.number_format($this->price, 0, '.', ',');
    }

    public function getPriceTotalForeignFormatAttribute()
    {
        return '$ '.number_format($this->price_total_foreign, 0, '.', ',');
    }

    public function featuresRel()
    {
        return $this->belongsToMany('App\ProjectFeature', 'projects_project_features', 'project_id', 'feature_id');
    }

    public function banksRel()
    {
        return $this->belongsToMany('App\Bank', 'projects_banks', 'project_id', 'bank_id');
    }

    public function advisorsRel()
    {
        return $this->belongsToMany('App\Advisor', 'projects_advisors', 'project_id', 'advisor_id');
    }

    public function bondsRel()
    {
        return $this->belongsToMany('App\Bond', 'projects_bonds', 'project_id', 'bond_id');
    }

    public function statusRel()
    {
        return $this->belongsTo('App\ProjectStatus', 'project_status_id', 'id');
    }

    public function ubigeoRel()
    {
        return $this->hasOne('App\Ubigeo', 'code_ubigeo', 'code_ubigeo');
    }

    public function financingOptionsRel()
    {
        return $this->belongsToMany('App\FinancingOption', 'projects_financing_options', 'project_id', 'financing_option_id');
    }

    public function getPriceSeparationFormatAttribute()
    {
        $symbol = null;
        if($this->currencyRel){
            $symbol = $this->currencyRel->symbol;
        }
        return $symbol.' '.number_format($this->price_separation, 0, '.', ',');
    }

    public function departmentsRel()
    {
        return $this->hasMany('App\Department','project_id','id');
    }

    public function getPriceParkingFormatAttribute()
    {
        return 'S/ '.number_format($this->price_parking_sap, 0, '.', ',');
    }

    public function currencyRel()
    {
        return $this->hasOne('App\MasterCurrency', 'id', 'master_currency_id');
    }

    public function getPriceParkingForeignFormatAttribute()
    {
        return '$ '.number_format($this->price_warehouse_foreign_sap, 0, '.', ',');
    }

    public function getPriceWarehouseForeignSapFormatAttribute()
    {
        return '$ '.number_format($this->price_warehouse_foreign_sap, 0, '.', ',');
    }

    public function getPriceWarehouseSapFormatAttribute()
    {
        return 'S/ '.number_format($this->price_warehouse_sap, 0, '.', ',');
    }

    public function getPriceBillFormatAttribute()
    {
        return number_format($this->price_bill, 0, '.', ',');
    }
}
