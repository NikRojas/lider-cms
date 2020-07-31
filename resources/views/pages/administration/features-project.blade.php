@extends('layouts.dashboard')
@section('content')
  <administration-features-project route="{{ route('cms.administration.features-project.index') }}" 
  message-cant-delete="@lang('custom.message.cant_delete')"
  images-url="{{ config('services.images_url') }}"
  route-get-all="{{ route('cms.administration.features-project.get-all') }}"></administration-features-project>
@endsection
