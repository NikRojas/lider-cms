@extends('layouts.dashboard')
@section('content')
  <administration-financial-entities route="{{ route('cms.administration.financial-entities.index') }}"
  message-cant-delete="@lang('custom.message.cant_delete')" 
  images-url="{{ config('services.images_url') }}"
  route-get-all="{{ route('cms.administration.financial-entities.get-all') }}"></administration-financial-entities>
@endsection
