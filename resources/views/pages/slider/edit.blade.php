@extends('layouts.dashboard')
@section('content')
<slider-edit images-url="{{ config('services.images_url') }}" :element-parent="{{ $element }}" route-update="{{ route('cms.slider.store') }}" route-return="{{ route('cms.slider.index') }}"></slider-edit>
@endsection