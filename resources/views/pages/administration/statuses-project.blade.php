@extends('layouts.dashboard')
@section('content')
  <administration-status-project message-cant-delete="@lang('custom.message.cant_delete')" route="{{ route('cms.administration.statuses-project.index') }}" route-get-all="{{ route('cms.administration.statuses-project.get-all') }}"></administration-status-project>
@endsection
