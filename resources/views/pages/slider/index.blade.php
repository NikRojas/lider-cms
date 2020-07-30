@extends('layouts.dashboard')
@section('content')
    <slider-index route-create="{{ route('cms.slider.create') }}"
    route-order="{{ route('cms.slider.order') }}"
    route="{{ route('cms.slider.index') }}" 
    image-url="{{ env('IMAGES_URL') }}"
    route-get-all="{{ route('cms.slider.get-all') }}"></slider-index>
@endsection