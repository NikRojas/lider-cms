<?php

namespace App\Http\Controllers\Cms\Configuration;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

use App\User;
use Auth;

use App\Http\Requests\Cms\Configuration\UserRequest;
use App\Repositories\UserRepository;

use App\Http\Traits\CmsTrait;

class UsersController extends Controller
{
    use CmsTrait;

    public function index()
    {
        return view('pages.configuration.users');
    }

    public function update(UserRequest $request, User $user)
    {
        $request_user = request(['email','name']);
        if ($request->filled('password')) {
            $request_user = array_merge($request_user, ['password' => Hash::make($request->password) ]);
        }
        if ($request->hasFile('avatar')) {
            $fileName = $this->setFileName('u-'.time(), $request->file('avatar'));
            Storage::disk('private')->putFileAs('img/users', $request->file('avatar'), $fileName);
            $request_user = array_merge($request_user, ["avatar" => $fileName]);
        }
        if ($request->hasFile('avatar') && $user->avatar) {
            Storage::disk('private')->delete('img/users/'.$user->avatar);
        }
        try {
            $user = User::UpdateOrCreate(['id' => $user->id], $request_user);
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.update.success', ['name' => trans('custom.attribute.user')])]);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.update.error', ['name' => trans('custom.attribute.user')]) ], 500);
        }
    }

    public function store(UserRequest $request)
    {
        $user = request(['name','email']);
        if ($request->hasFile('avatar')) {
            $fileName = $this->setFileName('u-'.time(), $request->file('avatar'));
            Storage::disk('private')->putFileAs('img/users', $request->file('avatar'), $fileName);
            $user = array_merge($user, ["avatar" => $fileName]);
        }
        try {
            $user = User::UpdateOrCreate(array_merge($user, ["password"=> Hash::make($request->password) ]));
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.create.success', ['name' => trans('custom.attribute.user')])]);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.create.error', ['name' => trans('custom.attribute.user')]) ], 500);
        }
    }

    public function destroy(User $user)
    {
        try {
            $user->delete();
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.delete.success', ['name' => trans('custom.attribute.user')])]);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.delete.error', ['name' => trans('custom.attribute.user')]) ], 500);
        }
    }

    public function disable(User $user)
    {
        try {
            $user = User::UpdateOrCreate(["id" => $user->id], ["status" => 0,"updated_at" =>  date("Y-m-d H:i:s")]);
            return response()->json(['title'=> trans('custom.title.success'), 'message'=> trans('custom.message.disable.success', ['name' => trans('custom.attribute.user')])]);
        } catch (\Exception $e) {
            return response()->json(['title'=> trans('custom.title.error'), 'message'=> trans('custom.message.disable.error', ['name' => trans('custom.attribute.user')]) ], 500);
        }
    }

    public function get(User $user)
    {
        return response()->json($user);
    }

    public function getAll(Request $request, UserRepository $repo)
    {
        $q = $request->q;
        $headers = ["Id", "Nombre", "Usuario"];
        if ($q) {
            $elements = $repo->search(Auth::user()->id, $q, $request->itemsPerPage);
        } else {
            $elements = $repo->datatable(Auth::user()->id, $request->itemsPerPage);
        }
        $elements["headers"] = $headers;
        return response()->json($elements);
    }
}
