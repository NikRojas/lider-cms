<?php

namespace App\Http\Traits;

use App\Ubigeo;
use Carbon\Carbon;

trait CmsTrait {

    public function setFileName($nombre,$archivo) {
        $nombreArchivo = $nombre.time().uniqid().'.'.$archivo->getClientOriginalExtension();
        return $nombreArchivo;
    }

    public function getMaxIndex($model){
        $element = $model->toArray();
        $index = 1;
        if(count($element) > 0){
            $index = $element[0]["index"] + 1; 
        }
        return $index;
    }

    public function getArrayColumn($value){
        $array = implode(',', $value);
        return $array;
    }

    public function getDepartments()
    {
        $data = Ubigeo::select('code_department','department')->distinct()->orderBy('department')->get();
        return $data;
    }

    public function getProvinces($department)
    {
        $data = Ubigeo::select('code_province','province')->distinct()->where('code_department',$department)
        ->where('code_province','!=','00')->orderBy('province')->get();
        return $data;
    }

    public function getDistricts($department,$province)
    {
        $data = Ubigeo::select('code_district','district')->distinct()->where('code_department',$department)
        ->where('code_province',$province)
        ->where('code_district','!=','00')->orderBy('district')->get();
        return $data;
    }

    public function getRangeStatistics($valueDate, $valueRange)
    {
        $date = $max = $rows = $dateSub = $date2 = $rangeType = null;
        switch ($valueDate) {
            case 'today':
                $date = Carbon::today();
                $max = 4;
                $format = 'h a';
                break;
            case 'range':
                $date = Carbon::parse($valueRange[0]);
                $date2 = Carbon::parse($valueRange[1]);
                $max = $date->diffInDays($date2);
                if ($max > 90) {
                    $rangeType = "month";
                    $max = intdiv($max, 30);
                    $format = 'MMM YY';
                } else {
                    $rangeType = "day";
                    $format = 'D MMM';
                }
                break;
            case '7':
                $date = Carbon::today()->subDays(6);
                $max = 7;
                $format = 'D MMM';
                break;

            case '30':
                $date = Carbon::today()->subDays(30);
                $max = 30;
                $format = 'D MMM';
                break;

            case '90':
                $date = Carbon::today()->subDays(90);
                $max = 90;
                $format = 'D MMM';
                break;

            case 'this_year':
                $date = Carbon::today()->subYear(1);
                $max = 12;
                $format = 'MMM';
                break;
        }
        $dateSub = $date->copy()->toDateTimeString();
        for ($i = 0; $i < $max; $i++) {
            switch ($valueDate) {
                case 'today':
                    $dateTemp = $date;
                    $rows[] = ["date" => $dateTemp->format($format), "dateValue" => $dateTemp->toDateTimeString(), "dateValue2" => $dateTemp->addHours(6)->toDateTimeString()];
                    break;
                case '7':
                    $dateTemp = $date;
                    $rows[] = ["date" => $dateTemp->isoFormat($format), "dateValue" => $dateTemp->copy()->startOfDay()->toDateTimeString(), "dateValue2" => $dateTemp->endOfDay()->toDateTimeString()];
                    $dateTemp = $date->addDay();
                    break;
                case 'range':
                    /*$dateTemp = $date;
                    $rows[] = ["date" => $dateTemp->isoFormat($format), "dateValue" => $dateTemp->copy()->startOfDay()->toDateTimeString(), "dateValue2" => $dateTemp->endOfDay()->toDateTimeString()];
                    $dateTemp = $date->addDay();*/
                    if ($rangeType == 'month') {
                        $dateTemp = $date->addMonth();
                        $rows[] = ["date" => $dateTemp->isoFormat($format), "dateValue" => $dateTemp->month, "dateYear" => $dateTemp->year];
                    } else if ($rangeType == 'day') {
                        $dateTemp = $date;
                        $rows[] = ["date" => $dateTemp->isoFormat($format), "dateValue" => $dateTemp->copy()->startOfDay()->toDateTimeString(), "dateValue2" => $dateTemp->endOfDay()->toDateTimeString()];
                        $dateTemp = $date->addDay();
                    }
                    break;
                case '30':
                    $dateTemp = $date->addDay();
                    $rows[] = ["date" => $dateTemp->isoFormat($format), "dateValue" => $dateTemp->copy()->startOfDay()->toDateTimeString(), "dateValue2" => $dateTemp->endOfDay()->toDateTimeString()];
                    break;
                case '90':
                    $dateTemp = $date->addDay();
                    $rows[] = ["date" => $dateTemp->isoFormat($format), "dateValue" => $dateTemp->copy()->startOfDay()->toDateTimeString(), "dateValue2" => $dateTemp->endOfDay()->toDateTimeString()];
                    break;
                case 'this_year':
                    $dateTemp = $date->addMonth();
                    $rows[] = ["date" => $dateTemp->isoFormat($format), "dateValue" => $dateTemp->month, "dateYear" => $dateTemp->year];
                    break;
            }
        }
        return ["rows" => $rows, "dateSub" => $dateSub, "rangeType" => $rangeType];
    }

}