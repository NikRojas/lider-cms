<?php

namespace App\Http\Controllers\Admin\Configuration;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use App\Empresa;
use App\Role;
use App\Module;
use App\User;
use Auth;

use App\Http\Requests\Admin\Configuration\RoleRequest;


class RolesController extends Controller
{

    public function index()
    {
        return view('pages.configuracion.roles');
    }

    public function registrar(RoleRequest $request){
        $rol = request(['name']);
        $modulos = $request->permisos;
        try{
            $rol = Role::UpdateOrCreate(array_merge($rol));
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.role')]) ],500);    
        }
        try{
            if(in_array(7,$modulos) || in_array(8,$modulos) || in_array(9,$modulos) || in_array(10,$modulos)){
                $rol->relModules()->attach( 6);    
            }
            if(in_array(14,$modulos) || in_array(15,$modulos)){
                $rol->relModules()->attach( 13);    
            }
            if(in_array(17,$modulos) || in_array(18,$modulos)){
                $rol->relModules()->attach( 16);    
            }
            if(in_array(22,$modulos) || in_array(23,$modulos)){
                $rol->relModules()->attach( 21);    
            }

            for ($i=0; $i < count($modulos); $i++) { 
                $rol->relModules()->attach( $modulos[$i]);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.role')])]);
        }
        catch(\Exception $e){
            $rol->delete();
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.role')]) ],500);    
        }
    }

    public function eliminar(Role $rol){
        try{
            $rol = $rol->delete();
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.role')])]);
        }   
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.role')]) ],500);    
        } 
    }

    public function actualizar(RoleRequest $request,Role $rol){
        $r_rol = request(['name']);
        $modulos = $request->permisos;

        try{
            $rol = Role::UpdateOrCreate(["id" => $rol->id],array_merge($r_rol));
        }
        catch(\Exception $e){
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.actualizar.error', ['name' => trans('custom.attribute.role')]) ],500);    
        }
        try{
            $rol_eliminar_permisos = $rol->relModules()->detach();
            if(in_array(7,$modulos) || in_array(8,$modulos) || in_array(9,$modulos) || in_array(10,$modulos)){
                $rol->relModules()->attach( 6);    
            }
            if(in_array(14,$modulos) || in_array(15,$modulos)){
                $rol->relModules()->attach( 13);    
            }
            if(in_array(17,$modulos) || in_array(18,$modulos)){
                $rol->relModules()->attach( 16);    
            }
            if(in_array(22,$modulos) || in_array(23,$modulos)){
                $rol->relModules()->attach( 21);    
            }
            for ($i=0; $i < count($modulos); $i++) { 
                $rol->relModules()->attach( $modulos[$i]);
            }
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.role')])]);
        }
        catch(\Exception $e){
            $rol->delete();
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.role')]) ],500);    
        }
    }

    public function obtenerRol(Role $rol){
        
        $rol = $rol->load(['relModules' => function ($query) {
            $query->whereNotNull('slug');
        }])->toArray();
        $modulos = Role::find($rol["id"])->relModules()->whereNotNull('slug')
        ->paginate(10);
        $permisos = [];
        foreach($rol["rel_modules"] as $el){
            array_push($permisos,$el["id"]);    
        }
        $users = User::where('role_id',$rol["id"])->get()->count();
        if($users > 0){
            $rol["usuarios"] = $users;   
        }
        $rol["modulos_paginado"] = $modulos; 
        $rol["permisos"] = $permisos; 
        return response()->json($rol);
    }

  public function obtenerModulos(){
      $modulos_total = Module::select('id','name')->where('slug','!=','dashboard')->where('slug','!=','configuracion/roles')->where('slug','!=','especialidades')->whereNotNull('slug')->get();
      $modulos_paginado = Module::select('id','name')->where('slug','!=','dashboard')->where('slug','!=','configuracion/roles')->where('slug','!=','especialidades')->whereNotNull('slug')->orderBy('id','asc')->orderBy('index','asc')->paginate(10)->toArray();
      $modulos_paginado["modulos_total"] = $modulos_total;
      return response()->json($modulos_paginado);    
  }

  public function obtenerRoles(Request $request){
    $buscar = $request->buscar;
    if($buscar){
        $roles = Role::select('id','name')->where('id','!=',1)->where('name','like',$buscar.'%')->orderBy('id','desc')->paginate($request->desde)->toArray();
    }
    else{
        $roles = Role::select('id','name')->where('id','!=',1)->orderBy('id','desc')->paginate($request->desde)->toArray();
    }   
    $headers = ["Id","Nombre"];
    $roles["headers"] = $headers;
    return response()->json($roles); 
}
}
