<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class VerifyPermission
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $slug)
    {
        if(!Auth::user()->relRole->relModules()->where('slug', $slug)->first()){
            abort(403);
        }
        return $next($request);
    }
}
