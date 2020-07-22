@extends('layouts.dashboard')
@section('content')
  <posts app-url="{{ config('app.url') }}"></posts>
@endsection
