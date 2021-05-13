@extends('layouts.dashboard')
@section('head')
<style>
    th:nth-child(7){
        display: none;
    }
    tr td:nth-child(7n+7) {
        display: none;
    }
</style>
@endsection
@section('content')
    <configuration-logs-sap route="{{ route('cms.configuration.logs-sap.index') }}" route-get-all="{{ route('cms.configuration.logs-sap.get-all') }}"></configuration-logs-sap>
@endsection