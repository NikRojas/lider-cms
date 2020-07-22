<?php

namespace App\Http\Controllers\Cms\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

use Illuminate\Http\Request;
use Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    protected $maxAttempts = 10;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/dashboard';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function showLoginForm(){
        return view('pages.auth.login');
    }

    public function username(){
        return "username";
    }

    protected function sendLoginResponse(Request $request){
        return ["route" => route('admin.dashboard')];
    }

    protected function credentials(Request $request){     
        return ['username' => $request->{$this->username()}, 'password' => $request->password, 'status' => 1];
    }

    public function logout(Request $request) {
        Auth::logout();
        return redirect('/');
    }
}
