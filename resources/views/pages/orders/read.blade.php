@extends('layouts.dashboard')
@section('head')
    <style>
        body{ background-color: #FDFBFA !important}
        a{color: initial !important;}
    </style>
@endsection
@section('content')
    <orders-read route-return="{{ route('cms.sales-statistics.orders.index') }}"
    :element-parent="{{ $element }}"
    images-url="{{ config('services.images_url') }}"
    route-project="{{ route('cms.projects.index') }}"
route-customer="{{ route('cms.customers.index')}}"></orders-read>
@endsection