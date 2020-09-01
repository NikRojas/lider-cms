@extends('layouts.dashboard')
@section('content')
  <landsale  
  route="{{ route('cms.leads.land-sale.index') }}" 
  route-get-all="{{ route('cms.leads.land-sale.get-all') }}"
  ></landsale>
@endsection
