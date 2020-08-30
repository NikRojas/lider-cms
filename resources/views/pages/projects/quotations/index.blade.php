@extends('layouts.dashboard')
@section('content')
<projects-quotations-index 
    images-url="{{ config('services.images_url') }}"
    route-return="{{ route('cms.projects.index') }}"
    :element-parent="{{ $project }}"
    route-get-all="{{ route('cms.projects.quotations.get-all') }}"
    ></projects-quotations-index>
@endsection