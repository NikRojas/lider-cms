@extends('layouts.dashboard')
@section('content')
    <applicants  
    route="{{ route('cms.applicants.index') }}" 
    route-update="{{ route('cms.applicants.update') }}" 
    route-get-all="{{ route('cms.applicants.get-all')}}" 
    get-email-destination="{{ route('cms.applicants.get-email-destination')}}" 
    app-url="{{ config('services.web_url') }}"
    ></applicants>
@endsection