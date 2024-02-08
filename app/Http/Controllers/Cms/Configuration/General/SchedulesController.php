<?php

namespace App\Http\Controllers\Cms\Configuration\General;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\Configuration\ScheduleRequest;
use App\Http\Traits\CmsTrait;
use App\MasterLeadTimeDay;

class SchedulesController extends Controller
{
 use CmsTrait;

 public function getAll()
 {
  $elements = MasterLeadTimeDay::orderBy('index', 'asc')->get();
  foreach ($elements as $el) {
   $data[] = array(
    "id" => $el["id"],
    "name" => $el["name"],
   );
  }
  if (isset($data)) {
   $elements["data"] = '';
   $elements["data"] = $data;
  }
  $headers = ["Id", "Rango de Horario"];
  $elements["headers"] = $headers;
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

 public function order(Request $request)
 {
  $elements = $request->all();
  try {
   for ($i = 0; $i < count($elements); $i++) {
    $element = MasterLeadTimeDay::UpdateOrCreate(["id" => $elements[$i]["id"]], ["index" => $i + 1]);
   }
   return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.schedule')])], 200);
  } catch (\Exception $e) {
   return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.schedule')])], 500);
  }
 }

 public function destroy(MasterLeadTimeDay $element)
 {
  try {
   $element = $element->delete();
   return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.delete.success', ['name' => trans('custom.attribute.schedule')])], 200);
  } catch (\Exception $e) {
   return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.delete.error', ['name' => trans('custom.attribute.schedule')])], 500);
  }
 }

 public function get(MasterLeadTimeDay $element)
 {
  return response()->json($element);
 }

 public function update(MasterLeadTimeDay $element, ScheduleRequest $request)
 {
  $request_el = request(["name"]);
  try {
   $element = MasterLeadTimeDay::UpdateOrCreate(["id" => $element->id], $request_el);
   return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.schedule')])], 200);
  } catch (\Exception $e) {
   return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.schedule')])], 500);
  }
 }
}
