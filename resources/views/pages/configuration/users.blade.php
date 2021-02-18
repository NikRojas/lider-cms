@extends('layouts.dashboard')
@section('content')
    <users route="{{ route('cms.configuration.users.index') }}" route-get-all="{{ route('cms.configuration.users.get-all') }}"></users>
@endsection