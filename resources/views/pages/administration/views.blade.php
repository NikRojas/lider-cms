@extends('layouts.dashboard')
@section('content')
  <administration-views message-cant-delete="@lang('custom.message.cant_delete')" route="{{ route('cms.administration.views.index') }}" route-get-all="{{ route('cms.administration.views.get-all') }}"></administration-views>
@endsection
