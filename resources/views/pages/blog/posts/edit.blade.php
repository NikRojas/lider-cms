@extends('layouts.dashboard')
@section('content')
    <posts-edit 
    route-update="{{ route('cms.blog.posts.store') }}" 
    :element-parent="{{ $element }}"
    route-return="{{ route('cms.blog.posts.index') }}"
    images-url="{{ config('services.images_url') }}"
    ></posts-edit>
@endsection