@extends('layouts.dashboard')
@section('content')
  <content-social-networks 
  route-order="{{ route('cms.content.social-networks.order') }}"
  route="{{ route('cms.content.social-networks.index') }}" 
  :master-networks="{{ json_encode($elements) }}"
  message-order="@lang('custom.message.order')"
  route-get-all="{{ route('cms.content.social-networks.get-all') }}"></content-social-networks>
@endsection
