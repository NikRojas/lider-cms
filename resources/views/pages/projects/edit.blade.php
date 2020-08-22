@extends('layouts.dashboard')
@section('content')
    <projects-edit :element-parent="{{ $element }}" route-store="{{ route('cms.projects.store') }}" route-return="{{ route('cms.projects.index') }}"
    images-url="{{ config('services.images_url') }}"
    route-advisors-get-all="{{ route('cms.administration.advisors.get-all') }}"
    route-features-get-all="{{ route('cms.administration.features-project.get-all') }}"
    route-financial-get-all="{{ route('cms.administration.financial-entities.get-all') }}"
    route-statuses-get-all="{{ route('cms.administration.statuses-project.get-all') }}"
    route-financial-create="{{ route('cms.administration.financial-entities.index') }}"
    route-statuses-create="{{ route('cms.administration.statuses-project.index') }}"
    route-features-create="{{ route('cms.administration.features-project.index') }}"
    route-advisors-create="{{ route('cms.administration.advisors.index') }}"
    route-departments-get="{{ route('cms.json.get-departments')}}"
    route-provinces-get="{{ route('cms.json.get-provinces')}}"
    route-districts-get="{{ route('cms.json.get-districts')}}"></projects-edit>
@endsection