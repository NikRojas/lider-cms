@extends('layouts.dashboard')
@section('content')
    <customers-index 
    route="{{ route('cms.customers.index') }}" 
    route-get-all="{{ route('cms.customers.get-all') }}"
    route-export="{{ route('cms.customers.export') }}" route-export-file="{{ route('cms.customers.export-file') }}" route-export-total="{{ route('cms.customers.export-total') }}"
    ></customers-index>
@endsection