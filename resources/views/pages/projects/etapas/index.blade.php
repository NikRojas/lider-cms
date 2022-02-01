@extends('layouts.dashboard')
@section('content')
    <projects-etapas-index route-return="{{ route('cms.projects.index') }}"
    route-slug="{{ route('cms.projects.etapas.index', ['project' => $element->slug_es]) }}" 
    route="{{ route('cms.projects.etapas.index', ['project' => $element->id]) }}" 
    images-url="{{ config('services.images_url') }}"
    route-get-all="{{ route('cms.projects.etapas.get-all', ['project' => $element->id]) }}"
    message-order="@lang('custom.message.order')"
    app-url="{{ config('services.web_url') }}"
    :element-parent="{{ $element }}"
    :estados-parent="{{ $statuses }}"
    ></projects-etapas-index>
@endsection