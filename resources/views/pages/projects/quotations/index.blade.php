@extends('layouts.dashboard')
@section('content')
<projects-quotations-index 
    images-url="{{ config('services.images_url') }}"
    route-return="{{ route('cms.projects.index') }}"
    :element-parent="{{ $project }}"
    route-get-all="{{ route('cms.projects.quotations.get-all') }}"

    all-export="{{ route('cms.projects.quotations.all-export',['element' => $project->id])}}" 
    filter-export="{{ route('cms.projects.quotations.filter-export',['element' => $project->id])}}" 
    ></projects-quotations-index>
@endsection