<?php

namespace App\Exports;

use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\FromView;
use Illuminate\Contracts\Support\Responsable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Excel;

use Maatwebsite\Excel\Concerns\Exportable;

class CustomerExport implements FromView, Responsable
{
    use Exportable;

    private $fileName = 'Líder Clientes.xlsx';
    private $writerType = Excel::XLSX;

    private $start;
    private $end;
    private $customers;

    public function __construct($start = null, $end = null, $customers)
    {
        $this->start = $start;
        $this->end = $end;
        $this->customers = $customers;
    }


    private $headers = [
        'Content-Type' => 'text/xlsx',
    ];
    /**
    * @return \Illuminate\Support\Collection
    */
    public function view(): View
    {
        return view('exports.customers', [
            'today' =>  (Carbon::now())->format('H:i d-m-Y'),
            'customers' => $this->customers,
            "start" => $this->start,
            "end" => $this->end
        ]);
    }
}
