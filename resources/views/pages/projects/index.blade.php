@extends('layouts.dashboard')
@section('content')
    <projects-index route-create="{{ route('cms.projects.create') }}"
    route-order="{{ route('cms.projects.order') }}"
    route="{{ route('cms.projects.index') }}" 
    images-url="{{ config('services.images_url') }}"
    route-get-all="{{ route('cms.projects.get-all') }}"
    message-order="@lang('custom.message.order')"
    app-url="{{ config('app.web_url') }}"
    ></projects-index>
@endsection