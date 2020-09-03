@extends('layouts.dashboard')
@section('content')
  <traditional  
  route="{{ route('cms.leads.traditional.index') }}" 
  route-get-all="{{ route('cms.leads.traditional.get-all') }}"
  route-update="{{ route('cms.leads.traditional.update') }}" 
  get-email-destination="{{ route('cms.leads.traditional.get-email-destination')}}" 
  ></traditional>
@endsection
