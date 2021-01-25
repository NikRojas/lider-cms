@extends('layouts.dashboard')
@section('content')
    <slider-create route-store="{{ route('cms.content.slider.store') }}" route-return="{{ route('cms.content.slider.index') }}"></slider-create>
@endsection