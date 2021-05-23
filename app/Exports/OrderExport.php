<?php

namespace App\Exports;

use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\FromView;
use Illuminate\Contracts\Support\Responsable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Excel;

use Maatwebsite\Excel\Concerns\Exportable;

class OrderExport implements FromView, Responsable
{
    use Exportable;

    private $fileName = 'Líder Ventas.xlsx';
    private $writerType = Excel::XLSX;

    private $start;
    private $end;
    private $orders;

    public function __construct($start = null, $end = null, $orders)
    {
        $this->start = $start;
        $this->end = $end;
        $this->orders = $orders;
    }


    private $headers = [
        'Content-Type' => 'text/xlsx',
    ];
    /**
    * @return \Illuminate\Support\Collection
    */
    public function view(): View
    {
        return view('exports.orders', [
            'today' =>  (Carbon::now())->format('H:i d-m-Y'),
            'orders' => $this->orders,
            "start" => $this->start,
            "end" => $this->end
        ]);
    }
}
