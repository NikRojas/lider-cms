<?php

namespace App\Exports;

use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\FromView;
use Illuminate\Contracts\Support\Responsable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Excel;

use Maatwebsite\Excel\Concerns\Exportable;

class LeadSaleLandExport implements FromView, Responsable
{
    use Exportable;

    private $fileName = 'Líder Leads Venta de Terreno.xlsx';
    private $writerType = Excel::XLSX;

    private $start;
    private $end;
    private $leads;

    public function __construct($start = null, $end = null, $leads)
    {
        $this->start = $start;
        $this->end = $end;
        $this->leads = $leads;
    }


    private $headers = [
        'Content-Type' => 'text/xlsx',
    ];
    /**
    * @return \Illuminate\Support\Collection
    */
    public function view(): View
    {
        return view('exports.leads-saleland', [
            'today' =>  (Carbon::now())->format('H:i d-m-Y'),
            'leads' => $this->leads,
            "start" => $this->start,
            "end" => $this->end
        ]);
    }
}
