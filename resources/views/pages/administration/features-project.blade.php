@extends('layouts.dashboard')
@section('content')
  <administration-features-project route="{{ route('cms.administration.features-project.index') }}" 
  image-url="{{ env('IMAGES_URL') }}"
  route-get-all="{{ route('cms.administration.features-project.get-all') }}"></administration-features-project>
@endsection
