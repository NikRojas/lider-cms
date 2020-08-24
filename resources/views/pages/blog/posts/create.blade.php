@extends('layouts.dashboard')
@section('content')
    <projects-create route-store="{{ route('cms.blog.posts.store') }}" route-return="{{ route('cms.blog.posts.index') }}"
    images-url="{{ config('services.images_url') }}"
    ></projects-create>
@endsection