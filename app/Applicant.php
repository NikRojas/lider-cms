<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

use Illuminate\Support\Facades\Storage;

class Applicant extends Model
{
    protected $appends = ['pdf_formatted'];
    protected $guarded = [];

    public function getPdfFormattedAttribute(){
        //$pdf = route('cms.get-file',["folder"=>'files','subfolder'=>'applicants','file'=>$this->pdf]);
        $pdf = Storage::disk('public')->url('files/applicants-16720/'.$this->pdf);
        return "<a target='_blank' href=".$pdf.">Ver PDF</a>";
    }

    public function getCreatedAtAttribute( $value ) {
        return (new Carbon($value))->format('g:iA d-m-Y');
    }
}
