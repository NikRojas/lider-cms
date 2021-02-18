@extends('layouts.dashboard')
@section('content')
<administration-exchange route="{{ route('cms.administration.exchange.index') }}" 
  route-get-all="{{ route('cms.administration.exchange.get-all') }}"></administration-exchange>
@endsection