@extends('layouts.dashboard')
@section('content')
    <orders-index route="{{ route('cms.sales-statistics.orders.index') }}" route-get-all="{{ route('cms.sales-statistics.orders.get-all') }}"
    route-export="{{ route('cms.sales-statistics.orders.export') }}" route-export-file="{{ route('cms.sales-statistics.orders.export-file') }}" route-export-total="{{ route('cms.sales-statistics.orders.export-total') }}"></orders-index>
@endsection