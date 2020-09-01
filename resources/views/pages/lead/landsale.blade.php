@extends('layouts.dashboard')
@section('content')
  <landsale  
  route="{{ route('cms.leads.land-sale.index') }}" 
  route-get-all="{{ route('cms.leads.land-sale.get-all') }}"
  route-update="{{ route('cms.leads.land-sale.update') }}" 
  get-email-destination="{{ route('cms.leads.land-sale.get-email-destination')}}" 
  ></landsale>
@endsection
