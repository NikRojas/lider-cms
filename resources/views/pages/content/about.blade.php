@extends('layouts.dashboard')
@section('content')
  <content-about
    project-finished-route-order="{{ route('cms.content.about.third.order') }}"
    project-finished-route="{{ route('cms.content.about.third.store') }}" 
    message-order="@lang('custom.message.order')"
    images-url="{{ config('services.images_url') }}"
    project-finished-route-get-all="{{ route('cms.content.about.third.get-all') }}"
    project-finished-text-route-get="{{ route('cms.content.about.third.get-text') }}"
    project-finished-text-route-update="{{ route('cms.content.about.third.update-text') }}"

    customer-support-route-order="{{ route('cms.content.about.fifth.order') }}"
    customer-support-route="{{ route('cms.content.about.fifth.store') }}" 
    customer-support-route-get-all="{{ route('cms.content.about.fifth.get-all') }}"
    customer-support-text-route-get="{{ route('cms.content.about.fifth.get-text') }}"
    customer-support-text-route-update="{{ route('cms.content.about.fifth.update-text') }}"

    warranty-elements-route-order="{{ route('cms.content.about.fourth.order') }}"
    warranty-elements-route="{{ route('cms.content.about.fourth.store') }}" 
    warranty-elements-route-get-all="{{ route('cms.content.about.fourth.get-all') }}"

    warranty-text-route-get="{{ route('cms.content.about.fourth.get-text') }}" 
    warranty-text-route-update="{{ route('cms.content.about.fourth.update-text') }}" 

    compromise-route-get="{{ route('cms.content.about.second.get') }}" 
    compromise-route-update="{{ route('cms.content.about.second.update') }}" 

    first-block-text-route-get="{{ route('cms.content.about.first.get') }}" 
    first-block-text-route-update="{{ route('cms.content.about.first.update') }}" 
    ></content-seo>
@endsection
