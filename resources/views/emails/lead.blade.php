<html>
<head>
    <title>PLAY Group</title>
</head>
<body>
    <table align="center" bgcolor="#fbfbfb" border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody>
            <tr>
                <td align="center" valign="top">
                    <table width="600">
                        <tbody>

                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td align="center" valign="top">
                                    <table bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" style="overflow:hidden!important;border-radius:3px" width="580">
                                        <tbody>
                                            
                                            <tr>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td align="center">
                                                    <table border="0" cellpadding="0" cellspacing="0" width="78%">
                                                        <tbody>
                                                            <tr>
                                                                <td align="center" style="font-family:Arial,sans-serif!important;font-size:16px!important;line-height:30px!important;font-weight:400!important;color:#7e8890!important">
                                                                    <img src="https://storage.googleapis.com/playgroup-web/img/lid-mail.png" alt="lid" height="50">
                                                                    <h3><strong style="color:#1bafba;">Mensaje obtenido desde {{ $lead->leadSourceRel->name }}</strong></h3>
                                                                    
                                                                    
                                                                   
                                                                    @if($lead->department_id)
<h3 style="margin: 0; color: #212121; margin-bottom: 5px;display:block;">Landing: {{ $lead->departmentRel->name  }}</h3>
@endif
<p style="margin: 0; color: #212121; margin-bottom: 5px;display:block;">
<strong>Nombre Completo:</strong> {{ $lead->full_name }}
</p>
<p style="margin: 0; color: #212121; margin-bottom: 5px;display:block;">
<strong>Teléfono:</strong> {{ $lead->phone }}
</p>
<p style="margin: 0; color: #212121; margin-bottom: 5px;display:block;">
<strong>Email:</strong> {{ $lead->email }}
</p>

@if($lead->company)
<p style="margin: 0; color: #212121; margin-bottom: 5px;display:block;">
<strong>Empresa:</strong> {{ $lead->company }}
</p>
@endif

@if($lead->lead_medium_id)
<p style="margin: 0; color: #212121; margin-bottom: 5px;display:block;">
<strong>Contactar por:</strong> {{ $lead->leadMediumRel->name }}
</p>
@endif


@if($lead->message)
<p style="margin: 0; color: #212121; margin-bottom: 5px;display:block;">
<strong>Mensaje:</strong> {{ $lead->message }}
</p>
@endif



                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;</td>
                                            </tr>
                                            
                                            
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>

</body></html>