@extends('layouts.dashboard')
@section('content')
    <content-general-content
        images-url="{{ config('services.images_url') }}"
        videos-url="{{ config('services.images_url') }}"
        route="{{ route('cms.content.general-content.index') }}"
        route-get-all="{{ route('cms.content.general-content.get-all') }}"
        route-update-section="{{ route('cms.content.general-content.update-section') }}"
    ></content-general-content>
@endsection
