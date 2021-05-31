<p>No se pudo completar el pago</p>

{{ $order->customerRel["full_name"] }}
<br>
{{ $order->customerRel["document_number"] }}
<br>
{{ $order->orderDetailsRel[0]["projectRel"]["name_es"] }}
<br>
{{ $order->orderDetailsRel[0]["projectRel"]["ubigeoRel"]["district"] }}
<br>
{{ $order->orderDetailsRel[0]["projectRel"]["statusRel"]["name"] }}
<br>
@if($order->orderDetailsRel[0]["departmentRel"]["tipologyRel"]["parent_type_department_id"])
{{ $order->orderDetailsRel[0]["departmentRel"]["tipologyRel"]["parentTypeDepartmentRel"]["name"] }}
@endif
<br>
{{ $order->orderDetailsRel[0]["departmentRel"]["description"] }}
<br>
{{ $order->orderDetailsRel[0]["departmentRel"]["viewRel"]["name"] }}
<br>
{{ $order->orderDetailsRel[0]["departmentRel"]["floor"] }}
<br>
{{ $order->orderDetailsRel[0]["departmentRel"]["area"] }}m2
<br>
{{ $order->orderDetailsRel[0]["departmentRel"]["tipologyRel"]["room"] }}
<br>
{{ $order->total_format}}
