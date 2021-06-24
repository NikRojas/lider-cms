@extends('layouts.dashboard')
@section('content')

<advisory-system-general-information route-update="{{ route('cms.advisory-system.general-information.store') }}" route-get="{{ route('cms.advisory-system.general-information.get') }}">
</advisory-system-general-information>

@endsection