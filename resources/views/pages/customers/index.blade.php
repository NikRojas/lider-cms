@extends('layouts.dashboard')
@section('head')
<style>
    .mx-panel-time .mx-time-list:nth-child(3){
        display: none;
    }
    .mx-panel-time .mx-time-list:nth-child(1), .mx-panel-time .mx-time-list:nth-child(2) {
        width: 50% !important;
    }
</style>
@endsection
@section('content')
    <customers-index 
    route="{{ route('cms.customers.index') }}" 
    route-get-all="{{ route('cms.customers.get-all') }}"
    all-export="{{ route('cms.customers.all-export')}}" 
    filter-export="{{ route('cms.customers.filter-export')}}" 
    ></customers-index>
@endsection

