@extends('layouts.dashboard')
@section('content')
    <slider-create route-store="{{ route('cms.slider.store') }}" route-return="{{ route('cms.slider.index') }}"></slider-create>
@endsection