<?php 

namespace App\Repositories;

use App\User;

class UsuariosRepositorio
{
    public function buscar($id,$q,$pagination){
        $select = 'users.id, users.name, users.email, users.status';
        $condicion = 'users.id != ? and (users.email like ? or users.name like ?)';
        $valores = [ $id,$q.'%',$q.'%',$q.'%',$q.'%',$q.'%' ];
        $users = User::
        selectRaw($select)
        //->join('roles','users.role_id','roles.id')
        ->whereRaw($condicion,$valores)
        ->orderBy('users.created_at', 'DESC')
        ->paginate($pagination);

        foreach($users as $user){
            $data[] = array(
                "id" => $user["id"],
                "name" => $user["name"],
                //"user" => $user["username"],
                //"role" => $user["role"],
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
        $select = 'users.id, users.name, users.email, users.status';   
        $condicion = 'users.id != ?';
        $valores = [$id];
        $users = User::
        selectRaw($select)
        //->join('roles','users.role_id','roles.id')
        ->whereRaw($condicion,$valores)
        ->orderBy('users.created_at', 'DESC')
        ->paginate($pagination);

        foreach($users as $user){
            $data[] = array(
                "id" => $user["id"],
                "name" => $user["name"],
                "user" => $user["email"],
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