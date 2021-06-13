<table style="border: 1px solid black;">
  <thead>
    <tr>
    <tr>
      <th
        style="background-color:#01C670;color:#FFFFFF;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;"
        colspan="2">Fecha de Exportación</th>
      <th style=" font-size:13px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
        {{ $today }}</th>
    </tr>
    @if($start && $end)
    <tr>
      <th
        style="background-color:#01C670;color:#FFFFFF;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;"
        colspan="2">Rango de Exportación</th>
      <th style=" font-size:13px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
        {{ \Carbon\Carbon::createFromFormat("Y-m-d H:i:s",$start )->isoFormat('llll') }} -
        {{ \Carbon\Carbon::createFromFormat("Y-m-d H:i:s",$end )->isoFormat('llll') }}</th>
    </tr>
    @endif
    <tr>
      <th
        style="background-color:#01C670;color:#FFFFFF;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;"
        colspan="2">Cantidad de Órdenes</th>
      <th style=" font-size:13px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
        {{ count($orders) }}</th>
    </tr>
  </thead>
</table>
<table style="border: 1px solid black;">
  <thead>
       
    <tr>
      <th
        style="background-color:#01C670;color:#FFFFFF;width:7px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
        #</th>
      <th
        style="background-color:#01C670;color:#FFFFFF;width:7px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
       Fecha</th>
      <th
        style="background-color:#01C670;color:#FFFFFF;width:30px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
        Cliente Nombre</th>
      <th
        style="background-color:#01C670;color:#FFFFFF;width:30px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
        Cliente Apellido Paterno</th>

      <th
        style="background-color:#01C670;color:#FFFFFF;width:30px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
        Cliente Apellido Materno</th>
        <th
        style="background-color:#01C670;color:#FFFFFF;width:30px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
        Cliente Tipo Documento</th>
      <th
        style="background-color:#01C670;color:#FFFFFF;width:30px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
        Cliente N Documento</th>
      <th
        style="background-color:#01C670;color:#FFFFFF;width:30px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
        Reserva Proyecto</th>

      <th
        style="background-color:#01C670;color:#FFFFFF;width:30px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
        Reserva Inmueble</th>
      <th
        style="background-color:#01C670;color:#FFFFFF;width:20px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
        Tipo Moneda</th>
      <th
        style="background-color:#01C670;color:#FFFFFF;width:20px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
        Total</th>
      <th
        style="background-color:#01C670;color:#FFFFFF;width:20px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
        Estado de Pago</th>
    </tr>
  </thead>
  <tbody>
    @foreach($orders as $key => $el)
    <tr>
      <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $key + 1 }}</td>
      <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $el->order_date_format }}</td>
      <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $el->customerRel["name"] ? $el->customerRel["name"] : 'No registrado' }}</td>
      <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $el->customerRel["lastname"] ? $el->customerRel["lastname"] : 'No registrado' }}</td>
      <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $el->customerRel["lastname_2"] ? $el->customerRel["lastname_2"] : 'No registrado' }}</td>
      <td style="text-align:center;vertical-align:middle;border: 1px solid black;">
        {{ $el->customerRel["documentTypeRel"]["description"] ? $el->customerRel["documentTypeRel"]["description"] :  'No registrado' }}</td>
      <td style="text-align:center;vertical-align:middle;border: 1px solid black;">
        {{ $el->customerRel["document_number"] ? $el->customerRel["document_number"] : 'No registrado' }}</td>
      <td style="text-align:center;vertical-align:middle;border: 1px solid black;">
        {{ $el->orderDetailsRel[0]["projectRel"]["name_es"] }}</td>
      <td style="text-align:center;vertical-align:middle;border: 1px solid black;">
        {{ $el->orderDetailsRel[0]["departmentRel"]["description"] }}</td>
      <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $el->currencyRel["abbreviation"] }}</td>
      <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $el->total_price }}</td>
      <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $el->transactionLatestRel["statusRel"]["name"] }}</td>
    </tr>
    @endforeach
  </tbody>
</table>