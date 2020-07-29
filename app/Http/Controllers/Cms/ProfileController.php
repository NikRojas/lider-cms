<?php

namespace App\Http\Controllers\Cms;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Traits\CmsTrait;
use Illuminate\Support\Facades\Storage;

use App\Http\Requests\Cms\ProfileRequest;
use App\Http\Requests\Cms\PasswordRequest;
use Auth;
use App\User;

class ProfileController extends Controller
{
    use CmsTrait;

    public function index()
    {
        return view ("pages.profile");
    }

    public function getProfile(){
        $user = Auth::user();
        return response()->json($user);
    }

    public function updateProfile(ProfileRequest $request){
        $user = Auth::user();
        $request_user = request(['name','email']);
        if($request->hasFile('avatar')){
            $avatar_name = $this->setFileName('u-'.uniqid(),$request->file('avatar'));
            $store_avatar = Storage::disk('private')->putFileAs('img/users/',$request->file('avatar'),$avatar_name);
            #Verificar si subio correctamente la avatar
            if(!$store_avatar){
                return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.errors.image') ],500);    
            }
            $request_user = array_merge($request_user,["avatar" => $avatar_name]);
        }
        if($request->hasFile('avatar') && $user->avatar){
            Storage::disk('private')->delete('img/users/'.$user->avatar);
        }
        if($request->eliminar_imagen && $user->avatar){
            Storage::disk('private')->delete('img/users/'.$user->avatar); 
            $request_user = array_merge($request_user,["avatar" => null]);  
        }
        try{
            $user = User::UpdateOrCreate(["id"=>$user->id],$request_user);
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.profile')]) ],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.profile')]) ],500);
        }
    }

    public function updatePassword(PasswordRequest $request){
        $user = Auth::user();
        if(!Hash::check($request->current_password, $user->password)){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> 'Lo sentimos, la contraseña actual es incorrecta.' ],401);
        }
        try{
            $user = User::UpdateOrCreate(["id"=>$user->id],['password' => Hash::make($request->new_password)]);
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.password')]) . ' Se cerrará la sesión en 5 segundos.' ],200);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.password')]) ],500);
        }
    }
}