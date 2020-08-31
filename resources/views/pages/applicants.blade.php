@extends('layouts.dashboard')
@section('content')
    <applicants  
    route="{{ route('cms.applicants.index') }}" 
    route-get-all="{{ route('cms.applicants.get-all')}}" 
    app-url="{{ config('services.web_url') }}"
    ></applicants>
@endsection