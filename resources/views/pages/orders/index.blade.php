@extends('layouts.dashboard')
@section('content')
    <orders-index route="{{ route('cms.sales-statistics.orders.index') }}" route-get-all="{{ route('cms.sales-statistics.orders.get-all') }}"></orders-index>
@endsection