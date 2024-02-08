@extends('layouts.dashboard')
@section('content')
    <complaints-book route="{{ route('cms.complaints-book.index') }}" route-get-all="{{ route('cms.complaints-book.get-all') }}"></complaints-book>
@endsection