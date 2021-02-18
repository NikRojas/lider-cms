@extends('layouts.dashboard')
@section('content')
    <statistics-index route-get-all="{{ route('cms.sales-statistics.statistics.get-all') }}"></statistics-index>
@endsection