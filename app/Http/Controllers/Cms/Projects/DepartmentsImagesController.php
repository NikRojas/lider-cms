<?php

namespace App\Http\Controllers\Cms\Projects;

use App\Department;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Cms\Project\AddImagesDepartmentsRequest;
use App\Http\Requests\Cms\Project\DeleteImagesDepartmentsRequest;
use App\Http\Traits\CmsTrait;
use Illuminate\Support\Facades\Storage;
use Auth;

class DepartmentsImagesController extends Controller
{
    use CmsTrait;

    public function index()
    {
        return view("cms.paginas.gallery.index");
    }

    public function getAll($element)
    {
        $els = Department::whereNotNull('image')->where('project_id',$element)->get();
        return response()->json($els);
    }

    public function store(AddImagesDepartmentsRequest $request)
    {
        try {
            $project_id = $request->project_id;
            $notUploadedCount = 0;
            $notUploaded = null;
            $uploadedCount = 0;
            for ($i = 0; $i < $request->elements_count; $i++) {
                $image = $request->file('images' . $i);
                $imageNameTemp = $image->getClientOriginalName();
                $imageName = pathinfo($imageNameTemp, PATHINFO_FILENAME);
                $imageAlreadyStored = Department::where('sap_code',$imageName)->where("project_id",$project_id)->first();
                if($imageAlreadyStored){
                    $imageToStore = $this->setFileName($imageName.'-e-', $image);
                    $storeImage = Storage::disk('public')->putFileAs('img/projects/estates', $request->file('images' . $i), $imageToStore);
                    if($imageAlreadyStored->image){
                        Storage::disk('public')->delete('img/projects/estates/'.$imageAlreadyStored->image);
                    }
                    $imageAlreadyStored->image = $imageToStore;
                    $imageAlreadyStored->save();
                    $uploadedCount++;
                }
                else{
                    $notUploadedCount++;
                    $notUploaded[] = $imageName;
                }
            }
            if($request->elements_count == $notUploadedCount){
                $message = 'No se subio ninguna imagen. <br>';
            }
            if($uploadedCount > 0){
                $message = 'Se subieron '.$uploadedCount.' imágen(es). <br>';
            }
            if($notUploadedCount > 0){
                $str = implode(", ", $notUploaded);
                $message = $message.'<b class="text-danger">Código SAP</b>: No se pudieron subir '.$notUploadedCount.' imágen(es) (' . $str . ').';
            }
            return response()->json(['title' => trans('custom.title.success'), 'message' => $message], 200);
        } catch (\Exception $e) {
            return response()->json(['title' => trans('custom.title.error'), 'message' => trans('custom.message.departments_images.error')], 500);
        }
    }

    public function deleteImages(DeleteImagesDepartmentsRequest $request){
        $images = $request->images;
        try {
            foreach ($images as $key => $value) {
                $el = null;
                $el = Department::find($value);
                $deleted = Storage::disk('public')->delete('img/projects/estates/'.$el->image);
                $el->image = null;
                $el->save();
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.plural.success', ['name' => trans('custom.attribute.elements')]) ], 200);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.plural.error', ['name' => trans('custom.attribute.elements')]) ], 500);
        }
    }
}
