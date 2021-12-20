@extends('layouts.dashboard')
@section('content')
    <projects-combos-index route-return="{{ route('cms.projects.index') }}" route-create="{{ route('cms.projects.combos.create', ['project' => $element->slug_es]) }}"
    route-slug="{{ route('cms.projects.combos.index', ['project' => $element->slug_es]) }}" 
    route="{{ route('cms.projects.combos.index', ['project' => $element->id]) }}" 
    images-url="{{ config('services.images_url') }}"
    route-get-all="{{ route('cms.projects.combos.get-all', ['project' => $element->id]) }}"
    message-order="@lang('custom.message.order')"
    app-url="{{ config('services.web_url') }}"
    :element-parent="{{ $element }}"
    ></projects-combos-index>
@endsection