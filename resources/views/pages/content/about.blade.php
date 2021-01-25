@extends('layouts.dashboard')
@section('content')
  <content-about
    project-finished-route-order="{{ route('cms.content.about.third.order') }}"
    project-finished-route="{{ route('cms.content.about.third.store') }}" 
    message-order="@lang('custom.message.order')"
    images-url="{{ config('services.images_url') }}"
    project-finished-route-get-all="{{ route('cms.content.about.third.get-all') }}"

    customer-support-route-order="{{ route('cms.content.about.fifth.order') }}"
    customer-support-route="{{ route('cms.content.about.fifth.store') }}" 
    customer-support-route-get-all="{{ route('cms.content.about.fifth.get-all') }}"
    ></content-seo>
@endsection
