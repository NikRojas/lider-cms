@extends('layouts.dashboard')
@section('content')
  <configuration-general
    route-order-schedules="{{ route('cms.configuration.general.schedules.order') }}"
    route-get-schedules="{{ route('cms.configuration.general.schedules.getAll') }}"
    route-get-financing-options="{{ route('cms.configuration.general.financing-options.getAll') }}"
    route-order-financing-options="{{ route('cms.configuration.general.financing-options.order') }}"
    message-order="@lang('custom.message.order')"
  ></configuration-general>
@endsection
