<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MasterTransactionStatus extends Model
{
    protected $table = 'master_transaction_status';
    protected $appends = ['name_format'];

    public function getNameFormatAttribute()
    {
        $class = $style = NULL;
        $style = "style='background: #fdfbfa;
        border: 1px solid #e9ecef'";
        switch ($this->name) {
            case 'Pendiente':
                $class = "warning";
                $dot = "<div style='    margin-bottom: 1px; width:5px;height:5px;border-radius: 50%;background-color: #373734;' class='d-inline-block mr-2'></div>";
                /*$style = 'style="color: #373734;
                background-color: rgb(179 179 179 / 50%);"';*/
                break;

            case 'Autorizado': 
            case 'Capturado': 
            case 'Pagado':
                $dot = "<div style='    margin-bottom: 1px; width:5px;height:5px;border-radius: 50%;' class='d-inline-block bg-info mr-2'></div>";
                $class = "info";
                break;
            
            case 'Expirado': 
                $dot = "<div style='    margin-bottom: 1px; width:5px;height:5px;border-radius: 50%;background-color: #a7a7a7;' class='d-inline-block mr-2'></div>";
                $style = 'style="background: #fdfbfa; color: #a7a7a7;border: 1px solid #e9ecef"';
                break;

            default:
                $class = "danger";
                $dot = "<div style='    margin-bottom: 1px; width:5px;height:5px;border-radius: 50%;' class='d-inline-block bg-danger mr-2'></div>";
                break;
        }
        $html = "<span $style class='badge rounded-0 badge-pill badge-lg badge-".$class."'>". $dot . $this->name . "</span>";
        return $html;
    }
}
