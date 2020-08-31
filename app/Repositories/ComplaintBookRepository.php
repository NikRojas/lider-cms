<?php 
namespace App\Repositories;

use App\ComplaintBook;
use Carbon\Carbon;

class ComplaintBookRepository 
{
    public function datatable($items_per_page,$q = false){
        if($q){
            $leads = ComplaintBook::select("id","name","lastname","email","document_number","document_type_id")
            ->where('name','like','%'.$q.'%')
            ->orWhere('document_number','like','%'.$q.'%')
            ->with('documentTypeRel:id,name')
            ->with('claimTypeRel:id,name')
            ->orderBy('created_at','desc')
            ->paginate($items_per_page);
        }
        else{
            $leads = ComplaintBook::select("id","name","lastname","email","document_number","document_type_id","claim_type_id")
            ->with('documentTypeRel:id,name')
            ->with('claimTypeRel:id,name')
            ->orderBy('created_at','desc')
            ->paginate($items_per_page);
        }   
        foreach($leads as $lead){
            $data[] = array(
                "id" => $lead["id"],
                "name" => $lead["name"]." ".$lead["lastname"],
                "email" => $lead["email"],
                "document_number" => '<div>'.$lead["documentTypeRel"]["name"].'<br>'.$lead["document_number"].'</div>',
                "type" => $lead["claimTypeRel"]["name"],
            );
        }
        $leads = $leads->toArray();
        if(isset($data)){
            $leads["data"] = '';
            $leads["data"] = $data;
        }
        return $leads;
    }
}