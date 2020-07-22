@extends('layouts.dashboard')
@section('content')
    <contacts :leads-by-department="{{ json_encode($leads_by_department) }}" :leads-by-source="{{ json_encode($leads_by_source) }}"></contacts>
@endsection