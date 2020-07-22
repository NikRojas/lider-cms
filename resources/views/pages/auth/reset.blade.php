@extends('layouts.app',["class" => "login"])
@section('head')
@endsection
@section('page')
    <div class="login-container">
        <div class="container-fluid h-100">
            <div class="row h-100">
                <div class="col-lg-7 d-none h-100 login-bg d-lg-flex justify-content-center align-items-center" style="background-image: url({{asset('storage/img/bg-login.jpg') }})">
                <img src="{{ asset('storage/img/logo-pg_white.svg') }}" alt="" width="150"></div>
                <div class="col-12 col-lg h-100">
                    <!--<login ruta-login="{{ route('login',[],false) }}" ruta-restore-contrasena="{{ route('password.email') }}" ></login>-->
                    <reset route-reset-password="{{ route('password.update') }}" token="{{ $token }}" email="{{ $email }}"></reset>
                </div>
            </div>
        </div>
    </div>
@endsection