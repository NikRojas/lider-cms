@extends('layouts.dashboard')
@section('head')
    <style>
        .custom-switch.b-custom-control-lg .custom-control-input:checked~.custom-control-label:after, .input-group-lg .custom-switch .custom-control-input:checked~.custom-control-label:after {
    -webkit-transform: translateX(.9375rem);
    transform: translateX(.9375rem);
}
        .custom-switch.b-custom-control-lg .custom-control-label, .input-group-lg .custom-switch .custom-control-label {
    font-size: 1rem;
    line-height: 1.75;
}

        .custom-switch.b-custom-control-lg .custom-control-label:before, .input-group-lg .custom-switch .custom-control-label:before {
    top: .3125rem;
    height: 1.25rem;
    left: -2.8125rem;
    width: 2.1875rem;
    border-radius: .625rem;
}
.custom-switch.b-custom-control-lg .custom-control-label:after, .input-group-lg .custom-switch .custom-control-label:after {
    top: calc(.3125rem + 2px);
    left: calc(-2.8125rem + 2px);
    width: calc(1.25rem - 4px);
    height: calc(1.25rem - 4px);
    border-radius: .625rem;
    background-size: 50% 50%;
}
        </style>
@endsection
@section('content')
    <projects-edit :element-parent="{{ $element }}" route-update="{{ route('cms.projects.store') }}" route-return="{{ route('cms.projects.index') }}"
    images-url="{{ config('services.images_url') }}"
    files-url="{{ config('services.files_url') }}"
    route-advisors-get-all="{{ route('cms.administration.advisors.get-all') }}"
    route-features-get-all="{{ route('cms.administration.features-project.get-all') }}"
    route-financial-get-all="{{ route('cms.administration.financial-entities.get-all') }}"
    route-statuses-get-all="{{ route('cms.administration.statuses-project.get-all') }}"
    route-financial-create="{{ route('cms.administration.financial-entities.index') }}"
    route-statuses-create="{{ route('cms.administration.statuses-project.index') }}"
    route-features-create="{{ route('cms.administration.features-project.index') }}"
    route-advisors-create="{{ route('cms.administration.advisors.index') }}"
    route-bonds-create="{{ route('cms.administration.bonds.index') }}"
    route-bonds-get-all="{{ route('cms.administration.bonds.get-all') }}"
    route-departments-get="{{ route('cms.json.get-departments')}}"
    route-provinces-get="{{ route('cms.json.get-provinces')}}"
    route-districts-get="{{ route('cms.json.get-districts')}}"
    route-projects-get-all="{{ route('cms.projects.get-all') }}"
    message-order="@lang('custom.message.order')"></projects-edit>
@endsection