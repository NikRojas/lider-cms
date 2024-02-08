<?php

return [
    'attribute' => [
        'user' => 'El usuario',
        'role' => 'El rol',
        'password' => 'La contraseña',
        'information' => 'La información',
        'network' => 'La red social',
        'seo' => 'El seo',
        'element' => 'El elemento',
        'category' => 'La categoría',
        'post' => 'El post',
        'profile' => 'El perfil',
        'cami' => 'Cami',
        'customer' => 'El cliente',
        'emails' => 'Los correos',
        'applicant' => 'El postulante',
        'section' => 'La sección',
        'testimonial' => 'El testimonio',
        'member' => 'El miembro',
        'lead' => 'El lead',
        'features' => 'La característica',
        'bank' => 'La entidad financiera',
        'slide' => 'El slide',
        'advisor' => 'El asesor',
        'status' => 'El estado',
        'project' => 'El proyecto',
        'tipology' => 'La tipología',
        'currency' => 'El tipo de moneda',
        'complaint' => 'El reclamo',
        'suscriber' => 'El suscriptor',
        'schedule' => 'El horario',
        'financing-option' => 'La opción de financiamiento',
        'project_finished' => 'El proyecto entregado',
        'bond' => 'El bono',
        'view' => 'La vista del inmueble',
        'type' => 'El tipo de inmueble',
        'image' => 'La imagen',
        'elements' => 'Los elementos',
        'etapa' => 'La etapa',
        'tasa' => 'La tasa seguro del bien',
        'type-seguro' => 'El tipo de seguro'
    ],
    'title' => [
        'error' => 'Error',
        'warning' => 'Advertencia',
        'success' => 'Éxito'
    ],
    'errors' => [
        'image' => 'Ocurrió un error al momento de subir la imagen. Por favor, inténtelo nuevamente.',
        'file' => 'Ocurrió un error al momento de subir el archivo. Por favor, inténtelo nuevamente.',
        'video' => 'Ocurrió un error al momento de subir el video. Por favor, inténtelo nuevamente.'
    ],
    'message' => [
        'disable' => [
            'success' => ':name se ha deshabilitado.',
            'error' => "Lo sentimos. :name no se pudo deshabilitar debido a un error.",
        ],
        'resend' => [
            'success' => 'El email se ha reenviado.',
            'error' => "Lo sentimos. El email no se pudo reenviar debido a un error.",
        ],
        'cancel' => [
            'success' => 'La orden se ha anulado.',
            'error' => "Lo sentimos. La orden no se pudo anular debido a un error.",
        ],
        'create' => [
            'success' => ':name se ha creado.',
            'error' => "Lo sentimos. :name no se pudo crear debido a un error.",
        ],
        'update' => [
            'success' => ':name se ha actualizado.',
            'error' => "Lo sentimos. :name no se pudo actualizar debido a un error.",
            'plural' => [
                'success' => ':name se han actualizado.',
                'error' => "Lo sentimos. :name no se pudieron actualizar debido a un error.",
            ]
        ],
        'delete' => [
            'success' => ':name se ha eliminado.',
            'error' => "Lo sentimos, :name no se pudo eliminar debido a un error.",
            'plural' => [
                'success' => ':name se han eliminado.',
                'error' => "Lo sentimos. :name no se pudieron eliminar debido a un error.",
            ]
        ],
        'export' => [
            'success' => 'El archivo se ha exportado.',
            'no_data' => [
                'range' => 'No se encontraron resultados en la fecha especificada',
                'total' => 'No se encontraron resultados'
            ]
        ],
        'order'  => 'Arrastre los elementos en el orden que desee mostrarlos',
        'cant_delete'  => 'No se puede eliminar debido a que está anidado en al menos un proyecto',
        'cant_delete_department' => 'No se puede eliminar debido a que está anidado al menos un inmueble',
        'cant_delete_department_project'  => 'No se puede eliminar debido a que está anidado en al menos un proyecto o a un inmueble',
        'cant_delete_post'  => 'No se puede eliminar debido a que está anidado en al menos un Post',
        'sap'    => [
            'no_token' => 'Token SAP no obtenido aún. Por favor, inténtelo de nuevo en unos minutos.',
            'get_departments' => [
                'no_code_sap' => 'El Proyecto :name no tiene un código de SAP registrado, por favor actualícelo en la sección Editar Proyecto :name.',
                'no_departments' => 'El Proyecto :name no cuenta con inmuebles en SAP.',
                'success' => 'Se obtuvieron :total inmuebles de SAP.',
                'error' => 'Lo sentimos. Los inmuebles no se pudo registrar/actualizar debido a un error.',
                'error_connection' => 'Lo sentimos. Hubo un error al realizar la conexión con SAP.',
            ]
        ],
        'departments_images' => [
            'error' => 'Lo sentimos. Hubo un error al subir las imágenes.',
        ]
    ],
    'order' => [
        'timeline' => [
            'reserve' => 'El cliente registro la reserva.',
            'order_received' => 'Se envió el email sobre: Espera de confirmación de pago de la reserva a :name (:email).',
            'order_paid' => 'Se envió el email sobre: Pago confirmado de la reserva a :name (:email).',
            'order_not_paid' => 'Se envió el email sobre: Pago rechazado de la reserva a :name (:email).',

            'resend_order_received' => 'Se reenvió el email sobre: Espera de confirmación de pago de la reserva a :name (:email).',
            'resend_order_paid' => 'Se reenvió el email sobre: Pago confirmado de la reserva a :name (:email).',
            'resend_order_not_paid' => 'Se reenvió el email sobre: Pago rechazado de la reserva a :name (:email).'
        ],
        'payment' => [
            'no_pay' => '',
            'error' => 'Lo sentimos. Hubo un error al procesar el pago.'
        ]
    ],
    'mail' => [
        'subjects' => [
            'order_received' => ':name, Hemos recibido tu solicitud de reserva de tu inmueble',
            'order_paid' => ':name, el pago de la reserva de tu inmueble ha sido confirmado',
            'order_not_paid' => ':name, No se pudo completar la reserva de tu inmueble',
            'advisor_order_paid' => ':web - :name ha realizado una separación',
        ]
    ]
];
