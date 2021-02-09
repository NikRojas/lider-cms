<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

use Illuminate\Support\Facades\Storage;

class Applicant extends Model
{
    protected $appends = ['pdf_formatted',"mobile_format"];
    protected $guarded = [];

    public function getPdfFormattedAttribute(){
        //$pdf = route('cms.get-file',["folder"=>'files','subfolder'=>'applicants','file'=>$this->pdf]);
        $pdf = Storage::disk('public')->url('files/applicants-010221/'.$this->pdf);
        return "<a target='_blank' href=".$pdf.">Ver PDF</a>";
    }

    public function getMobileFormatAttribute(){
        $data = null;
        if($this->mobile && strlen($this->mobile) == 9){
            $data = substr($this->mobile,0,3).'-'.substr($this->mobile,3,3).'-'.substr($this->mobile,6,3);
        }
        else if($this->mobile && strlen($this->mobile) == 7){
            $data = substr($this->mobile,0,3).'-'.substr($this->mobile,3,4);
        }
        else{
            $data = $this->mobile;
        }
        return $data;
    }

    public function getCreatedAtAttribute( $value ) {
        return (new Carbon($value))->format('g:iA d-m-Y');
    }
}
