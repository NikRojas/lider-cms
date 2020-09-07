@extends('layouts.dashboard')
@section('content')
<customers-read 
route-return="{{ route('cms.customers.index') }}"
:element-parent="{{ $element }}"
></customers-read>
@endsection