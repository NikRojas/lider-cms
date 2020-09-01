@extends('layouts.dashboard')
@section('content')
  <traditional  
  route="{{ route('cms.leads.traditional.index') }}" 
  route-get-all="{{ route('cms.leads.traditional.get-all') }}"
  ></traditional>
@endsection
