@extends('layouts.dashboard')
@section('content')
<projects-files-index 
    route="{{ route('cms.projects.files.store') }}" 
    files-url="{{ config('services.files_url') }}"
    route-return="{{ route('cms.projects.index') }}"
    message-order="@lang('custom.message.order')"
    :element-parent="{{ $element }}"
    route-order="{{ route('cms.projects.files.order') }}"
    route-get-all="{{ route('cms.projects.files.get-all') }}"
    ></projects-files-index>
@endsection