@extends('layouts.dashboard')
@section('head')
    <style>
      .custom-control{
        margin-left: 10px;
      }
        .custom-switch.b-custom-control-lg .custom-control-input:checked~.custom-control-label:after, .input-group-lg .custom-switch .custom-control-input:checked~.custom-control-label:after {
    -webkit-transform: translateX(.9375rem);
    transform: translateX(.9375rem);
}
        .custom-switch.b-custom-control-lg .custom-control-label, .input-group-lg .custom-switch .custom-control-label {
    font-size: 1rem;
    line-height: 1.75;
}

        .custom-switch.b-custom-control-lg .custom-control-label:before, .input-group-lg .custom-switch .custom-control-label:before {
    top: .3125rem;
    height: 1.25rem;
    left: -2.8125rem;
    width: 2.1875rem;
    border-radius: .625rem;
}
.custom-switch.b-custom-control-lg .custom-control-label:after, .input-group-lg .custom-switch .custom-control-label:after {
    top: calc(.3125rem + 2px);
    left: calc(-2.8125rem + 2px);
    width: calc(1.25rem - 4px);
    height: calc(1.25rem - 4px);
    border-radius: .625rem;
    background-size: 50% 50%;
}
        </style>
@endsection
@section('content')
  <administration-advisors route="{{ route('cms.administration.advisors.index') }}" 
  message-cant-delete="@lang('custom.message.cant_delete')"
  images-url="{{ config('services.images_url') }}"
  route-get-all="{{ route('cms.administration.advisors.get-all') }}"></administration-advisors>
@endsection
