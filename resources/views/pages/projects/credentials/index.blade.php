@extends('layouts.dashboard')
@section('head')
<style>
    .swal2-popup {
        width: 50em;
    }

    .custom-switch.b-custom-control-lg .custom-control-input:checked~.custom-control-label:after,
    .input-group-lg .custom-switch .custom-control-input:checked~.custom-control-label:after {
        -webkit-transform: translateX(.9375rem);
        transform: translateX(.9375rem);
    }

    .custom-switch.b-custom-control-lg .custom-control-label,
    .input-group-lg .custom-switch .custom-control-label {
        font-size: 1rem;
        line-height: 1.75;
    }

    .custom-switch.b-custom-control-lg .custom-control-label:before,
    .input-group-lg .custom-switch .custom-control-label:before {
        top: .3125rem;
        height: 1.25rem;
        left: -2.8125rem;
        width: 2.1875rem;
        border-radius: .625rem;
    }

    .custom-switch.b-custom-control-lg .custom-control-label:after,
    .input-group-lg .custom-switch .custom-control-label:after {
        top: calc(.3125rem + 2px);
        left: calc(-2.8125rem + 2px);
        width: calc(1.25rem - 4px);
        height: calc(1.25rem - 4px);
        border-radius: .625rem;
        background-size: 50% 50%;
    }
</style>
<script src="https://static.micuentaweb.pe/static/js/krypton-client/V4.0/ext/classic.js"></script>
<link rel="stylesheet" href="https://static.micuentaweb.pe/static/js/krypton-client/V4.0/ext/classic-reset.css">
@endsection
@section('content')
@if($credential)
<projects-credentials-index route-return="{{ route('cms.projects.index') }}" :element-parent="{{ $project }}"
    :values="{{ $values }}" :credential-parent="{{ json_encode($credential) }}"
    route-update="{{ route('cms.projects.credentials.update-credential') }}"
    route-update-tokens="{{ route('cms.projects.credentials.update-tokens') }}"
    route-activate="{{ route('cms.projects.credentials.activate') }}"
    route-test="{{ route('cms.projects.credentials.test') }}"></projects-credentials-index>
@else
<projects-credentials-index route-return="{{ route('cms.projects.index') }}" :element-parent="{{ $project }}"
    route-update-tokens="{{ route('cms.projects.credentials.update-tokens') }}"
    route-update="{{ route('cms.projects.credentials.update-credential') }}"
    route-test="{{ route('cms.projects.credentials.test') }}"
    route-activate="{{ route('cms.projects.credentials.activate') }}"></projects-credentials-index>
@endif
@endsection