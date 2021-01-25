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
    <testimonials
    message-order="@lang('custom.message.order')"
    route="{{ route('cms.content.testimonials.index') }}" 
    route-order="{{ route('cms.content.testimonials.order') }}"
    images-url="{{ config('services.images_url') }}"
    route-get-all="{{ route('cms.content.testimonials.get-all') }}"
    ></testimonials>
@endsection