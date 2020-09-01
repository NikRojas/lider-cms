@extends('layouts.dashboard')
@section('content')
  <online  
  route="{{ route('cms.leads.online-appointment.index') }}" 
  route-get-all="{{ route('cms.leads.online-appointment.get-all') }}"
  route-update="{{ route('cms.leads.online-appointment.update') }}" 
  get-email-destination="{{ route('cms.leads.online-appointment.get-email-destination')}}" 
  ></online>
@endsection
