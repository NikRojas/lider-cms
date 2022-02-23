<?php

namespace App\Http\Controllers\Cms\Configuration\General;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\Configuration\ScheduleRequest;
use App\Http\Requests\Cms\Configuration\TasaSeguroRequest;
use App\Http\Traits\CmsTrait;
use App\MasterLeadTimeDay;
use App\TasaSeguro;

class TasaSeguroController extends Controller
{
 use CmsTrait;

 public function getAll()
 {
  $elements = TasaSeguro::with('sectorRel')->get();
  return response()->json($elements);
 }

 public function store(ScheduleRequest $request)
 {
  $element = request(["name"]);
  $index = $this->getMaxIndex(MasterLeadTimeDay::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
  $element = array_merge($element, ["index" => $index]);
  try {
   $element = MasterLeadTimeDay::UpdateOrCreate($element);
   return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.schedule')])], 200);
  } catch (\Exception $e) {
   return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.schedule')])], 500);
  }
 }

 public function update(TasaSeguroRequest $request)
 {
  try {
   $element1 = TasaSeguro::UpdateOrCreate(["id" => 1], ["value" => $request-> tasa_seguro_depa]);
   $element2 = TasaSeguro::UpdateOrCreate(["id" => 2], ["value" => $request-> tasa_seguro_casa]);
   return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.tasa')])], 200);
  } catch (\Exception $e) {
   return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.tasa')])], 500);
  }
 }
}
