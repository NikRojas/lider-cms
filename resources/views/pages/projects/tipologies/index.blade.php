@extends('layouts.dashboard')
@section('head')
<style>
.form-check{
    padding-left: 0px !important;
    background: transparent !important;
    border: 0 !important;
}
</style>
@endsection
@section('content')
<projects-tipologies-index 
    route="{{ route('cms.projects.tipologies.store') }}" 
    images-url="{{ config('services.images_url') }}"
    route-return="{{ route('cms.projects.index') }}"
    message-order="@lang('custom.message.order')"
    :element-parent="{{ $element }}"
    route-order="{{ route('cms.projects.tipologies.order') }}"
    route-get-all="{{ route('cms.projects.tipologies.get-all') }}"
    ></projects-tipologies-index>
@endsection