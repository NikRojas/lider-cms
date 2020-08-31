@extends('layouts.dashboard')
@section('content')
  <posts 
  route-create="{{ route('cms.blog.posts.create') }}" 
  route="{{ route('cms.blog.posts.index') }}" 
  route-get-all="{{ route('cms.blog.posts.get-all') }}"
  images-url="{{ config('services.images_url') }}"
  app-url="{{ config('services.web_url') }}"
  ></posts>
@endsection
