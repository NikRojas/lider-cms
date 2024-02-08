@extends('layouts.dashboard')
@section('head')
<style>
    .mx-panel-time .mx-time-list:nth-child(3){
        display: none;
    }
    .mx-panel-time .mx-time-list:nth-child(1), .mx-panel-time .mx-time-list:nth-child(2) {
        width: 50% !important;
    }
    /*th:nth-child(1){
        display: none;
    }
    tr td:nth-child(1) {
        display: none;
    }*/
</style>
@endsection
@section('content')
    <orders-index
    :projects=" {{ $projects }}"
    :transactions=" {{ $transactions }}"
    route="{{ route('cms.sales-statistics.orders.index') }}" route-get-all="{{ route('cms.sales-statistics.orders.get-all') }}"
    all-export="{{ route('cms.sales-statistics.orders.all-export')}}" 
    filter-export="{{ route('cms.sales-statistics.orders.filter-export')}}"></orders-index>
@endsection