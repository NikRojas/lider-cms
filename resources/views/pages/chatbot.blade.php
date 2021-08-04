@extends('layouts.dashboard')
@section('content')
    <chatbot  
    route="{{ route('cms.chatbot.index') }}" 
    route-leads-get-all="{{ route('cms.chatbot.leads-get-all')}}" 
    route-faq-get-all="{{ route('cms.chatbot.faq-get-all')}}" 
    route-qualification-get-all="{{ route('cms.chatbot.qualification-get')}}" 
    app-url="{{ config('services.web_url') }}"
    ></chatbot>
@endsection