@extends('layouts.dashboard')
@section('content')
  <social :master-networks="{{ json_encode($networks) }}"></social>
@endsection
