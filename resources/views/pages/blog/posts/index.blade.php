@extends('layouts.dashboard')
@section('content')
  <posts 
  route-create="{{ route('cms.blog.posts.create') }}" 
  route="{{ route('cms.blog.posts.index') }}" 
  images-url="{{ config('services.images_url') }}"
  app-url="{{ config('services.web_url') }}"
  ></posts>
@endsection
