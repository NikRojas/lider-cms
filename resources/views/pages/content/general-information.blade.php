@extends('layouts.dashboard')
@section('content')
    <content-general-information
    route-update="{{ route('cms.content.general-information.store') }}" 
    route-get="{{ route('cms.content.general-information.get') }}"></content-general-information>

    <content-members route-order="{{ route('cms.content.general-information.members.order') }}"
    route="{{ route('cms.content.general-information.members.store') }}" 
    message-order="@lang('custom.message.order')"
    images-url="{{ config('services.images_url') }}"
    route-get-all="{{ route('cms.content.general-information.members.get-all') }}"></content-members>
@endsection