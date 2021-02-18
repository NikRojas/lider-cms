@extends('layouts.dashboard')
@section('content')

    <cami
    route-update="{{ route('cms.content.cami.store') }}" 
    images-url="{{ config('services.images_url') }}" 
    message-order="@lang('custom.message.order')"
    route-get="{{ route('cms.content.cami.get') }}"></cami>
 
    <cami-projects route-order="{{ route('cms.content.cami.projects.order') }}"
    route="{{ route('cms.content.cami.projects.store') }}" 
    message-order="@lang('custom.message.order')"
    images-url="{{ config('services.images_url') }}"
    route-get-all="{{ route('cms.content.cami.projects.get-all') }}"></cami-projects>
 

@endsection