@extends('layouts.dashboard')
@section('content')
    <testimonials
    message-order="@lang('custom.message.order')"
    route="{{ route('cms.testimonials.index') }}" 
    route-order="{{ route('cms.testimonials.order') }}"
    images-url="{{ config('services.images_url') }}"
    route-get-all="{{ route('cms.testimonials.get-all') }}"
    ></testimonials>
@endsection