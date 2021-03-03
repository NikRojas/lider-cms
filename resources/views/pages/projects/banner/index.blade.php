@extends('layouts.dashboard')
@section('content')
<projects-banner-index 
    route="{{ route('cms.projects.banners.store') }}" 
    images-url="{{ config('services.images_url') }}"
    route-return="{{ route('cms.projects.index') }}"
    message-order="@lang('custom.message.order')"
    :element-parent="{{ $element }}"
    route-order="{{ route('cms.projects.banners.order') }}" 
    route-get-all="{{ route('cms.projects.banners.get-all') }}"
    ></projects-banner-index>
@endsection