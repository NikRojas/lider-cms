@extends('layouts.dashboard')
@section('content')
    <slider-index route-create="{{ route('cms.slider.create') }}"
    route-order="{{ route('cms.slider.order') }}"
    route="{{ route('cms.slider.index') }}" 
    images-url="{{ config('services.images_url') }}"
    route-get-all="{{ route('cms.slider.get-all') }}"
    message-order="@lang('custom.message.order')"
    ></slider-index>
@endsection