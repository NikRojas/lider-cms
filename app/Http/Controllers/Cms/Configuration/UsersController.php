<?php

namespace App\Http\Controllers\Cms\Configuration;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

use App\User;
use Auth;

use App\Http\Requests\Admin\Configuration\UserRequest;
use App\Repositories\UsuariosRepositorio;

use App\Http\Traits\AdminTrait;

class UsersController extends Controller
{
    use AdminTrait;

    public function index()
    {
        return view('pages.configuracion.usuarios');
    }

    public function actualizar(UserRequest $request, User $usuario){
        $request_usuario = request(['username','role_id','email','full_name']);
        if($request->filled('password')){
            $request_usuario = array_merge($request_usuario,['password' => Hash::make($request->password) ]);
        }
        #Si el request tiene logo, guardarlo
        if($request->hasFile('avatar')){
            $nombre_archivo = $this->setFileName('u-'.time(),$request->file('avatar'));
            Storage::disk('private')->putFileAs('img/users',$request->file('avatar'),$nombre_archivo);
            $request_usuario = array_merge($request_usuario,["avatar" => $nombre_archivo]);
        }
        #Si el request no tiene imagen y se puso en eliminar imagen
        /*if(!$request->hasFile('avatar') && $request->eliminar){
            Storage::disk('private')->delete('img/users/'.$usuario->avatar);
            $request_usuario = array_merge($request_usuario,["imagen" => NULL]);
        }*/

        #Si el request tiene logo y tiene logo en la bd
        if($request->hasFile('avatar') && $usuario->avatar){
            Storage::disk('private')->delete('img/users/'.$usuario->avatar);
        }

        if($request->filled('available')){
            $request_usuario = array_merge($request_usuario,["status" => 1]);
        }

        try{
            $usuario = User::UpdateOrCreate(['id' => $usuario->id], $request_usuario);
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.user')])]);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.user')]) ],500);    
        }
    }

    public function registrar(UserRequest $request){
        $usuario = request(['username','role_id','full_name','email']);
        if($request->hasFile('avatar')){
            $nombre_archivo = $this->setFileName('u-'.time(),$request->file('avatar'));
            Storage::disk('private')->putFileAs('img/users',$request->file('avatar'),$nombre_archivo);
            $usuario = array_merge($usuario,["avatar" => $nombre_archivo]);
        }
        try{
            $usuario = User::UpdateOrCreate(array_merge($usuario,["password"=> Hash::make($request->password), "status" => 1 ]));
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.user')])]);
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.user')]) ],500);    
        }
    }

    public function eliminar(User $usuario){
        try{
            //$usuario = User::UpdateOrCreate(["id" => $usuario->id],["status" => 0,"updated_at" =>  date("Y-m-d H:i:s")]);
            $usuario->delete();
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.user')])]);
        }   
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.user')]) ],500);    
        } 
    }

    public function disable(User $usuario){
        try{
            $usuario = User::UpdateOrCreate(["id" => $usuario->id],["status" => 0,"updated_at" =>  date("Y-m-d H:i:s")]);
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.disable.success', ['name' => trans('custom.attribute.user')])]);
        }   
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.disable.error', ['name' => trans('custom.attribute.user')]) ],500);    
        } 
    }


    public function obtenerUsuario(User $usuario){
        return response()->json($usuario->load('relRole:id,name'));    
    }

    public function obtenerUsuarios(Request $request,UsuariosRepositorio $repo){
        $buscar = $request->buscar;
        $headers = ["Id", "Nombre", "Usuario", "Rol","Estado"];
            if($buscar){
                $usuarios = $repo->buscar(Auth::user()->id,$buscar,$request->desde);
            }
            else{
                $usuarios = $repo->datatable(Auth::user()->id,$request->desde);
            }
        #Agregar al array las headers
        $usuarios["headers"] = $headers;
        return response()->json($usuarios);
    }
    
}
