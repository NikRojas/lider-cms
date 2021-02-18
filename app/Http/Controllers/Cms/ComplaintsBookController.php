<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\Controller;
use App\Http\Traits\CmsTrait;
use App\ComplaintBook;
use App\Repositories\ComplaintBookRepository;
use Illuminate\Http\Request;

class ComplaintsBookController extends Controller
{
    use CmsTrait;

    public function index(){
        return view ("pages.complaints-book");   
    }

    public function getAll(Request $request,ComplaintBookRepository $repo){
      $q = $request->q;
      $headers = ["Id", "Código", "Nombre", "Email", "Documento", "Tipo","Registrado el"];
      if($q){
          $elements = $repo->datatable($request->date,$request->range,$request->itemsPerPage,$q);
      }
      else{
          $elements = $repo->datatable($request->date,$request->range,$request->itemsPerPage);
      }
      $elements["headers"] = $headers;
      return response()->json($elements);
    }

    public function get(ComplaintBook $element){
        return response()->json($element->load('documentTypeRel','claimTypeRel','goodContractedRel','ubigeoRel'));
    }

    public function destroy(ComplaintBook $element){
        try {
            $destroy = $element->delete();
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.complaint')]) ],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.complaint')]) ],500);
        }
    }

}
