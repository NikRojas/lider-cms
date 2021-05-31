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
        switch ($this->name) {
            case 'Pendiente':
                $class = "warning";
                $style = 'style="color: #373734;
                background-color: rgb(179 179 179 / 50%);"';
                break;

            case 'Autorizado': 
            case 'Capturado': 
            case 'Pagado':
                $class = "info";
                break;

            default:
                $class = "danger";
                break;
        }
        $html = "<span $style class='badge badge-pill badge-lg badge-".$class."'>" . $this->name . "</span>";
        return $html;
    }
}
