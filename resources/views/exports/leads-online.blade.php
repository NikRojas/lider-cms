<table style="border: 1px solid black;">
 <thead>
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
    colspan="2">Cantidad de Leads</th>
   <th style=" font-size:13px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
    {{ count($leads) }}</th>
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
    Email</th>
   <th
    style="background-color:#01C670;color:#FFFFFF;width:20px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
    Móvil</th>
    <th
    style="background-color:#01C670;color:#FFFFFF;width:20px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
    Tipo Documento</th>
    <th
    style="background-color:#01C670;color:#FFFFFF;width:20px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
    Nro. Documento</th>
    <th
    style="background-color:#01C670;color:#FFFFFF;width:20px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
    Horario</th>
    <th
    style="background-color:#01C670;color:#FFFFFF;width:20px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
    Proyecto</th>
    <th
    style="background-color:#01C670;color:#FFFFFF;width:20px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
    Canal</th>
    <!--<th
    style="background-color:#01C670;color:#FFFFFF;width:20px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
    Asesor</th>-->
    <th
    style="background-color:#01C670;color:#FFFFFF;width:20px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
    UTM Source</th>
    <th
    style="background-color:#01C670;color:#FFFFFF;width:20px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
    UTM Medium</th>
    <th
    style="background-color:#01C670;color:#FFFFFF;width:20px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
    UTM Campaign</th>
    <th
    style="background-color:#01C670;color:#FFFFFF;width:20px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
    UTM Term</th>
    <th
    style="background-color:#01C670;color:#FFFFFF;width:20px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
    UTM Content</th>
   <th
    style="background-color:#01C670;color:#FFFFFF;width:30px;font-size:14px;font-weight:bold;text-align:center;vertical-align:middle;border: 1px solid black;">
    Registrado el</th>
  </tr>
 </thead>
 <tbody>
  @foreach($leads as $key => $lead)
  <tr>
   <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $key + 1 }}</td>
   <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $lead->name ? $lead->name : 'No registrado' }}</td>
   <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $lead->email ? $lead->email : 'No registrado' }}</td>
   <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $lead->mobile ? $lead->mobile_format : 'No registrado' }}</td>
   <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $lead->type_document_id ? $lead->documentTypeRel->description : 'DNI' }}</td>
   <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $lead->document_number ? $lead->document_number : 'No registrado' }}</td>
   <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $lead->schedule }}</td>
   <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $lead->projectRel->name_es }}</td>
   <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $lead->id_canal ? $lead->canalRel->name : 'No registrado' }}</td>
   <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $lead->utm_source ? $lead->utm_source : 'No registrado' }}</td>
   <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $lead->utm_medium ? $lead->utm_medium : 'No registrado' }}</td>
   <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $lead->utm_campaign ? $lead->utm_campaign : 'No registrado' }}</td>
   <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $lead->utm_term ? $lead->utm_term : 'No registrado' }}</td>
   <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $lead->utm_content ? $lead->utm_content : 'No registrado' }}</td>
   <td style="text-align:center;vertical-align:middle;border: 1px solid black;">{{ $lead->created_at_format }}</td>
  </tr>
  @endforeach
 </tbody>
</table>
