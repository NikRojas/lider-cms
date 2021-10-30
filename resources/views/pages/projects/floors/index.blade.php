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
<projects-floors-parking 
    route="{{ route('cms.projects.floors.store') }}" 
    images-url="{{ config('services.images_url') }}"
    route-return="{{ route('cms.projects.index') }}"
    message-order="@lang('custom.message.order')"
    :element-parent="{{ $element }}"
    :estates="{{ json_encode($estates) }}"
    route-order="{{ route('cms.projects.floors.order') }}"
    route-get-all="{{ route('cms.projects.floors.get-all') }}"
    ></projects-floors-parking>
@endsection