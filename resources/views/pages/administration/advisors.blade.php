@extends('layouts.dashboard')
@section('content')
  <administration-advisors route="{{ route('cms.administration.advisors.index') }}" 
  images-url="{{ config('services.images_url') }}"
  route-get-all="{{ route('cms.administration.advisors.get-all') }}"></administration-advisors>
@endsection
