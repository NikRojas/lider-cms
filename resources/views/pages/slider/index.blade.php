@extends('layouts.dashboard')
@section('content')
    <slider-index route-create="{{ route('cms.content.slider.create') }}"
    route-order="{{ route('cms.content.slider.order') }}"
    route="{{ route('cms.content.slider.index') }}" 
    images-url="{{ config('services.images_url') }}"
    route-get-all="{{ route('cms.content.slider.get-all') }}"
    message-order="@lang('custom.message.order')"
    ></slider-index>
@endsection