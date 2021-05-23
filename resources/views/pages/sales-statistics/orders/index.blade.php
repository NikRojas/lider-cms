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
    <orders-index route="{{ route('cms.sales-statistics.orders.index') }}" route-get-all="{{ route('cms.sales-statistics.orders.get-all') }}"
    all-export="{{ route('cms.sales-statistics.orders.all-export')}}" 
    filter-export="{{ route('cms.sales-statistics.orders.filter-export')}}"></orders-index>
@endsection