<?php 

namespace App\Repositories;

use App\User;

class UsuariosRepositorio
{
    public function buscar($id,$q,$pagination){
        $select = 'users.id, users.full_name, users.username, users.status, roles.name as role';
        $condicion = 'users.id != ? and users.id != ? and users.id != ? and (users.username like ? or users.full_name like ?)';
        $valores = [ 1, 2, $id,$q.'%',$q.'%',$q.'%',$q.'%',$q.'%' ];
        $users = User::
        selectRaw($select)
        ->join('roles','users.role_id','roles.id')
        ->whereRaw($condicion,$valores)
        ->orderBy('users.created_at', 'DESC')
        ->paginate($pagination);

        foreach($users as $user){
            $data[] = array(
                "id" => $user["id"],
                "full_name" => $user["full_name"],
                "user" => $user["username"],
                "role" => $user["role"],
                "status" => $user["status_format"],
            );
        }
        $users = $users->toArray();
        if(isset($data)){
            $users["data"] = '';
            $users["data"] = $data;
        } 
        return $users;
    }

    public function datatable($id,$pagination){
        $select = 'users.id, users.full_name, users.username, roles.name  as role, users.status';   
        $condicion = 'users.id != ? and users.id != ? and users.id != ?';
        $valores = [$id,1,2];
        $users = User::
        selectRaw($select)
        ->join('roles','users.role_id','roles.id')
        ->whereRaw($condicion,$valores)
        ->orderBy('users.created_at', 'DESC')
        ->paginate($pagination);

        foreach($users as $user){
            $data[] = array(
                "id" => $user["id"],
                "full_name" => $user["full_name"],
                "user" => $user["username"],
                "role" => $user["role"],
                "status" => $user["status_format"],
            );
        }
        $users = $users->toArray();
        if(isset($data)){
            $users["data"] = '';
            $users["data"] = $data;
        } 
        return $users;
    }
}