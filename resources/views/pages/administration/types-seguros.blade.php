@extends('layouts.dashboard')
@section('content')
  <administration-types-seguros 
  route-order="{{ route('cms.administration.types-seguros.order') }}"
  route="{{ route('cms.administration.types-seguros.index') }}" route-get-all="{{ route('cms.administration.types-seguros.get-all') }}"></administration-types-seguros>
@endsection
