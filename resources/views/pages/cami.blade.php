@extends('layouts.dashboard')
@section('content')

    <cami
    route-update="{{ route('cms.cami.store') }}" 
    images-url="{{ config('services.images_url') }}" 
    message-order="@lang('custom.message.order')"
    route-get="{{ route('cms.cami.get') }}"></cami>
 
    <cami-projects route-order="{{ route('cms.cami.projects.order') }}"
    route="{{ route('cms.cami.projects.store') }}" 
    message-order="@lang('custom.message.order')"
    images-url="{{ config('services.images_url') }}"
    route-get-all="{{ route('cms.cami.projects.get-all') }}"></cami-projects>
 

@endsection