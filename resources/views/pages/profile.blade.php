@extends('layouts.dashboard')
@section('content')
  <profile route-login="{{ route('login') }}" route-logout="{{ route('logout') }}"></profile>
@endsection