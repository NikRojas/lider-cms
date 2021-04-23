@extends('layouts.dashboard')
@section('content')
  <online  
  :config="{{ json_encode($config) }}"
  :projects="{{ json_encode($projects) }}"
  route="{{ route('cms.leads.online-appointment.index') }}" 
  route-get-all="{{ route('cms.leads.online-appointment.get-all') }}"
  route-update="{{ route('cms.leads.online-appointment.update') }}" 
  get-email-destination="{{ route('cms.leads.online-appointment.get-email-destination')}}" 

  all-export="{{ route('cms.leads.online-appointment.all-export')}}" 
  filter-export="{{ route('cms.leads.online-appointment.filter-export')}}" 
  ></online>
@endsection
