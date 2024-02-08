@extends('layouts.dashboard')
@section('content')
  <administration-bonds route="{{ route('cms.administration.bonds.index') }}"
  message-cant-delete="@lang('custom.message.cant_delete')" 
  images-url="{{ config('services.images_url') }}"
  route-get-all="{{ route('cms.administration.bonds.get-all') }}"></administration-bonds>
@endsection
