@extends('layouts.dashboard')
@section('content')
  <administration-advisors route="{{ route('cms.administration.advisors.index') }}" 
  message-cant-delete="@lang('custom.message.cant_delete')"
  images-url="{{ config('services.images_url') }}"
  route-get-all="{{ route('cms.administration.advisors.get-all') }}"></administration-advisors>
@endsection
