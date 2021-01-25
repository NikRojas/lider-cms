@extends('layouts.dashboard')
@section('content')
<slider-edit images-url="{{ config('services.images_url') }}" :element-parent="{{ $element }}" route-update="{{ route('cms.content.slider.store') }}" route-return="{{ route('cms.content.slider.index') }}"></slider-edit>
@endsection