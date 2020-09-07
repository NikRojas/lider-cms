@extends('layouts.dashboard')
@section('content')
    <suscribers route="{{ route('cms.suscribers.index') }}" route-get-all="{{ route('cms.suscribers.get-all') }}"
route-export="{{ route('cms.suscribers.export') }}" route-export-file="{{ route('cms.suscribers.export-file') }}" route-export-total="{{ route('cms.suscribers.export-total') }}"></suscribers>
@endsection