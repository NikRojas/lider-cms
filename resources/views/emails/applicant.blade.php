



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
                                                                    <h3><strong style="color:#1bafba;">Mensaje enviado desde la Web</strong></h3>
                                                                    
                                                                    
                                                                    <p style="margin: 0; color: #212121;margin-bottom: 5px;display:block;">
                                                                    <strong>Nombre Completo:</strong> {{ $applicant->full_name }}
                                                                    </p>
                                                                    <p style="margin: 0; color: #212121;margin-bottom: 5px;display:block;">
                                                                    <strong>Teléfono:</strong> {{ $applicant->phone }}
                                                                    </p>
                                                                    <p style="margin: 0; color: #212121;margin-bottom: 5px;display:block;">
                                                                    <strong>Email:</strong> {{ $applicant->email }}
                                                                    </p>
                                                                    <p style="margin: 0; color: #212121;margin-bottom: 5px;display:block;">
                                                                    <strong>Puesto:</strong> {{ $applicant->job }}
                                                                    </p>
                                                                    @if($applicant->url)
                                                                    <p style="margin: 0; color: #212121;margin-bottom: 5px;display:block;">
                                                                    <strong>URL Portafolio:</strong> {{ $applicant->url }}
                                                                    </p>
                                                                    @endif
                                                                    <p style="margin: 0; color: #212121;margin-bottom: 5px;display:block;">
                                                                    <strong>CV:</strong> 
                                                                    {!! $applicant->pdf_formatted !!}
                                                                    </p>
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