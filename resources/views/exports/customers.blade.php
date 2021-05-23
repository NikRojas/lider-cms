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
   {{ \Carbon\Carbon::createFromFormat("Y-m-d H:i:s",$start )->isoFormat('llll') }} - {{ \Carbon\Carbon::createFromFormat("Y-m-d H:i:s",$end )->isoFormat('llll') }}</th>
  </tr>
  @endif
  <tr>
   <th
    style="background-color:#01C670;color:#FFFFFF;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;"
    colspan="2">Cantidad de Clientes</th>
   <th style=" font-size:13px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
    {{ count($customers) }}</th>
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
    style="background-color:#01C670;color:#FFFFFF;width:30px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
    Nombre</th>
    <th
    style="background-color:#01C670;color:#FFFFFF;width:30px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
    Apellido Paterno</th>
    <th
    style="background-color:#01C670;color:#FFFFFF;width:30px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
    Apellido Materno</th>
   <th
    style="background-color:#01C670;color:#FFFFFF;width:30px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
    Email</th>
   <th
    style="background-color:#01C670;color:#FFFFFF;width:20px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
    Móvil</th>
    <th
    style="background-color:#01C670;color:#FFFFFF;width:20px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
    Tipo de Documento</th>
    <th
    style="background-color:#01C670;color:#FFFFFF;width:20px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
    Número de Documento</th>
   <th
    style="background-color:#01C670;color:#FFFFFF;width:30px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
    Registrado el</th>
  </tr>
 </thead>
 <tbody>
  @foreach($customers as $key => $el)
  <tr>
   <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $key + 1 }}</td>
   <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $el->name ? $el->name : 'No registrado' }}</td>
   <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $el->lastname ? $el->lastname : 'No registrado' }}</td>
   <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $el->lastname_2 ? $el->lastname_2 : 'No registrado' }}</td>
   <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $el->email ? $el->email :  'No registrado' }}</td>
   <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $el->mobile ? $el->mobile_formatted : 'No registrado' }}</td>
   <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $el->documentTypeRel->description }}</td>
   <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $el->document_number ? $el->document_number : 'No registrado' }}</td>
   <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $el->created_at_format }}</td>
  </tr>
  @endforeach
 </tbody>
</table>
