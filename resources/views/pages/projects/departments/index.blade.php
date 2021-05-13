@extends('layouts.dashboard')
@section('head')
<style>
    .swal2-popup{
        width: 50em;
    }
</style>
@endsection
@section('content')
<projects-departments-index 
    images-url="{{ config('services.images_url') }}"
    route-return="{{ route('cms.projects.index') }}"
    :element-parent="{{ $project }}"
    route-get-sap="{{ route('cms.projects.departments.get-sap-departments',['element' => $project->slug_es]) }}"
    route-get-all="{{ route('cms.projects.departments.get-all') }}"
    ></projects-departments-index>
@endsection