@extends('layouts.dashboard')
@section('content')
  <category 
  message-cant-delete="@lang('custom.message.cant_delete_post')"
  route="{{ route('cms.blog.category.index') }}" 
  route-get-all="{{ route('cms.blog.category.get-all') }}"></category>
@endsection
