@extends('layouts.dashboard')
@section('content')
  <administration-types message-cant-delete="@lang('custom.message.cant_delete_department')" route="{{ route('cms.administration.types.index') }}" route-get-all="{{ route('cms.administration.types.get-all') }}"></administration-types>
@endsection
