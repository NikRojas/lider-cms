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
.custom-switch {
    padding-left: 3rem;
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
    <posts-create 
    route-create="{{ route('cms.blog.category.index') }}"
    route-store="{{ route('cms.blog.posts.store') }}" 
    route-return="{{ route('cms.blog.posts.index') }}"
    images-url="{{ config('services.images_url') }}"
    ></posts-create>
@endsection