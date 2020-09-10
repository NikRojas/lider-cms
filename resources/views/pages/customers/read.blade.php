@extends('layouts.dashboard')
@section('content')
<customers-read 
route-return="{{ route('cms.customers.index') }}"
:element-parent="{{ $element }}"
images-url="{{ config('services.images_url') }}"
route-project="{{ route('cms.projects.index') }}"
route-order="{{ route('cms.sales-statistics.orders.index')}}"
></customers-read>
@endsection