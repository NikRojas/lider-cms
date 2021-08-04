<?php

namespace App\Http\Controllers\Cms;

use App\ChatFaq;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\ChatLead;
use App\ChatQualification;
use App\Exports\ChatbotLeadExport;
use App\Http\Requests\Cms\Chatbot\FaqRequest;
use App\Http\Requests\Cms\Export\LeadExportExcel;
use App\Repositories\ChatbotRepository;

use App\Http\Traits\CmsTrait;
use Illuminate\Support\Facades\Storage;

class ChatbotController extends Controller
{
    use CmsTrait;

    public function index()
    {
        return view("pages.chatbot");
    }

    public function leadsGetAll(Request $request, ChatbotRepository $repo)
    {
        $q = $request->q;
        $headers = ["id", "Nombre", "Móvil", "Email", "Proyecto", "Host", "Registrado el"];
        if ($q) {
            $elements = $repo->datatable($request->itemsPerPage, $q);
        } else {
            $elements = $repo->datatable($request->itemsPerPage);
        }
        $elements["headers"] = $headers;
        return response()->json($elements);
    }

    public function qualificationGet(Request $request, ChatbotRepository $repo)
    {
        $elements = $repo->qualifications($request->date, $request->range);
        return response()->json($elements);
    }

    public function leadsGet(ChatLead $element)
    {
        return response()->json($element);
    }

    public function leadsDestroy(ChatLead $element)
    {
        try {
            $element->delete();
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.delete.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.delete.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }

    public function leadsAllExport()
    {
        $leads = ChatLead::orderBy('created_at', 'asc')->get();
        return new ChatbotLeadExport(null, null, $leads);
    }

    public function leadsFilterExport(LeadExportExcel $request)
    {
        $from = date("Y-m-d H:i:s", strtotime($request->from));
        $to = date("Y-m-d H:i:s", strtotime($request->to));
        $leads = ChatLead::whereBetween('created_at', [$from, $to])->orderBy('created_at', 'asc')->get();
        return (new ChatbotLeadExport($from, $to, $leads));
    }

    public function faqGetAll()
    {
        $elements = ChatFaq::orderBy('index', 'asc')->get();
        return response()->json($elements);
    }

    public function faqStore(FaqRequest $request)
    {
        $element = request(["answer", "question"]);
        $index = $this->getMaxIndex(ChatFaq::selectRaw('MAX(id),MAX(`index`) as "index"')->get());
        $element = array_merge($element, ["index" => $index]);
        try {
            $element = ChatFaq::UpdateOrCreate($element);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.create.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.create.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }

    public function faqUpdate(FaqRequest $request, $id)
    {
        $element = request(["answer", "question"]);
        try {
            $element = ChatFaq::UpdateOrCreate(["id" => $id], $element);
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }

    public function faqOrder(Request $request)
    {
        $elements = $request->all();
        try {
            for ($i = 0; $i < count($elements); $i++) {
                $element = ChatFaq::UpdateOrCreate(["id" => $elements[$i]["id"]], ["index" => $i + 1]);
            }
            return response()->json(['title' => trans('custom.title.success'), 'message' => trans('custom.message.update.success', ['name' => trans('custom.attribute.element')])], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.update.error', ['name' => trans('custom.attribute.element')])], 500);
        }
    }

    public function faqGet($el)
    {
        $faq = ChatFaq::where('id',$el)->first();
        return response()->json($faq);
    }

    public function faqDestroy($el)
    {
        $faq = ChatFaq::where('id',$el)->first();
        try {
            $destroy = $faq->delete();
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.element')]) ],200);
        } 
        catch (\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.element')]) ],500);
        }
    }

    public function faqStoreImage(Request $request)
    {
        $file_name = $this->setFileName('pi-', $request->file('image'));
        try {
            $store_image = Storage::disk('public')->putFileAs('img/faq/', $request->file('image'), $file_name);
            return response()->json(['image'=>Storage::disk('public')->url('img/faq/'.$file_name)]);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ], 500);
        }
    }
}
