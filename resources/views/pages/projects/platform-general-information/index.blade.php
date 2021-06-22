@extends('layouts.dashboard')
@section('head')
<style>
    .form-check {
        padding-left: 0px !important;
        background: transparent !important;
        border: 0 !important;
    }
</style>
@endsection
@section('content')
<projects-tps-index route-update-text="{{ route('cms.projects.platform-general-information.store') }}" route-get-text="{{ route('cms.projects.platform-general-information.get') }}" :element-parent="{{ $element }}" route-return="{{ route('cms.projects.index') }}" route-location="{{ route('cms.projects.tps-location.store') }}" images-url-location="{{ config('services.images_url') }}" message-order-location="@lang('custom.message.order')" route-order-location="{{ route('cms.projects.tps-location.order') }}" route-get-all-location="{{ route('cms.projects.tps-location.get-all') }}" route-promotion="{{ route('cms.projects.tps-promotion.store') }}" images-url-promotion="{{ config('services.images_url') }}" message-order-promotion="@lang('custom.message.order')" route-order-promotion="{{ route('cms.projects.tps-promotion.order') }}" route-get-all-promotion="{{ route('cms.projects.tps-promotion.get-all') }}"></projects-tps-index>
@endsection