@extends('layouts.dashboard')
@section('head')
    <style>
        body{ background-color: #FDFBFA !important}
        /*a{color: initial !important;}*/
        a.btn-inverse-light{color: initial !important;}
    </style>
@endsection
@section('content')
    <orders-read route-return="{{ route('cms.sales-statistics.orders.index') }}"
    route-resend="{{ route('cms.sales-statistics.orders.index') }}"
    :element-parent="{{ $element }}"
    :timeline-parent="{{ json_encode($timeline) }}"
    images-url="{{ config('services.images_url') }}"
    route-project="{{ route('cms.projects.index') }}"
    route-customer="{{ route('cms.customers.index')}}"></orders-read>
@endsection