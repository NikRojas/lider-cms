@extends('layouts.dashboard')
@section('content')
  <online  
  route="{{ route('cms.leads.online-appointment.index') }}" 
  route-get-all="{{ route('cms.leads.online-appointment.get-all') }}"
  ></online>
@endsection
