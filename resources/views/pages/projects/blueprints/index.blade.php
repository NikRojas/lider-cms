@extends('layouts.dashboard')
@section('content')
<projects-blueprints-index 
    route="{{ route('cms.projects.tipologies.blueprints.store') }}" 
    images-url="{{ config('services.images_url') }}"
    route-return="{{ route('cms.projects.tipologies.index',["element" => $project->slug_es]) }}"
    message-order="@lang('custom.message.order')"
    :element-parent="{{ $project }}"
    :subelement-parent="{{ $element }}"
    route-order="{{ route('cms.projects.tipologies.blueprints.order') }}"
    route-get-all="{{ route('cms.projects.tipologies.blueprints.get-all') }}"
    ></projects-blueprints-index>
@endsection