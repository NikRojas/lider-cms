@extends('layouts.dashboard')
@section('head')
<style>
    p{
        margin-bottom: 5px;
    }
    .VueCarousel-dot-container, .VueCarousel-dot{
        margin-top: 5px !important;
    }
</style>
@endsection
@section('content')
    <projects-read :element-parent="{{ $element }}" route-return="{{ route('cms.projects.index') }}"
    app-url="{{ config('services.web_url') }}"
    images-url="{{ config('services.images_url') }}"
    files-url="{{ config('services.files_url') }}"></projects-read>
@endsection