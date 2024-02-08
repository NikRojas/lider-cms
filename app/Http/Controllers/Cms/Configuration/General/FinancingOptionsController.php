<?php

namespace App\Http\Controllers\Cms\Configuration\General;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\Configuration\FinancingOptionRequest;
use App\Http\Traits\CmsTrait;
use App\FinancingOption;

class FinancingOptionsController extends Controller
{
 use CmsTrait;

 public function getAll()
 {
  $elements = FinancingOption::orderBy('index', 'asc')->get();
  foreach ($elements as $el) {
   $data[] = array(
    "id" => $el["id"],
    "name" => $el["name"],
    //"status" => $el["active"] ? "<span class='badge badge-pill badge-info badge-lg'>Habilitado</span>" : "<span class='badge badge-pill badge-danger badge-lg'>Deshabilitado</span>",
   );
  }
  if (isset($data)) {
   $elements["data"] = '';
   $elements["data"] = $data;
  }
  //$headers = ["Id", "Nombre", "Estado"];
  $headers = ["Id", "Nombre"];
  $elements["headers"] = $headers;
  return response()->json($elements);
 }

 public function store(FinancingOptionRequest $request)
 {
  $element = request(["name","active"]);
  $index = $this->getMaxIndex(FinancingOption::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
  $element = array_merge($element, ["index" => $index]);
  try {
   $element = FinancingOption::UpdateOrCreate($element);
   return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.financing-option')])], 200);
  } catch (\Exception $e) {
   return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.financing-option')])], 500);
  }
 }

 public function order(Request $request)
 {
  $elements = $request->all();
  try {
   for ($i = 0; $i < count($elements); $i++) {
    $element = FinancingOption::UpdateOrCreate(["id" => $elements[$i]["id"]], ["index" => $i + 1]);
   }
   return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.financing-option')])], 200);
  } catch (\Exception $e) {
   return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.financing-option')])], 500);
  }
 }
 public function destroy(FinancingOption $element)
 {
  try {
   $element = $element->delete();
   return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.delete.success', ['name' => trans('custom.attribute.financing-option')])], 200);
  } catch (\Exception $e) {
   return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.delete.error', ['name' => trans('custom.attribute.financing-option')])], 500);
  }
 }

 public function get(FinancingOption $element)
 {
  return response()->json($element);
 }

 public function update(FinancingOption $element, FinancingOptionRequest $request)
 {
  $request_el = request(["name","active"]);
  try {
   $element = FinancingOption::UpdateOrCreate(["id" => $element->id], $request_el);
   return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.financing-option')])], 200);
  } catch (\Exception $e) {
   return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.financing-option')])], 500);
  }
 }
}
