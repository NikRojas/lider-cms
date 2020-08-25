@extends('layouts.dashboard')
@section('content')
<projects-gallery-index 
    route="{{ route('cms.projects.gallery.store') }}" 
    images-url="{{ config('services.images_url') }}"
    route-return="{{ route('cms.projects.index') }}"
    message-order="@lang('custom.message.order')"
    :element-parent="{{ $element }}"
    route-order="{{ route('cms.projects.gallery.order') }}"
    :types="{{ $types }}"
    route-get-all="{{ route('cms.projects.gallery.get-all') }}"
    ></projects-gallery-index>
@endsection