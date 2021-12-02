@extends('layouts.dashboard')
@section('content')
    <combos-index route-create="{{ route('cms.combos.create') }}"
    route-order="{{ route('cms.combos.order') }}"
    route="{{ route('cms.combos.index') }}" 
    images-url="{{ config('services.images_url') }}"
    route-get-all="{{ route('cms.combos.get-all') }}"
    message-order="@lang('custom.message.order')"
    app-url="{{ config('services.web_url') }}"
    ></combos-index>
@endsection