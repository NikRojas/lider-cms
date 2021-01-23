<?php

Route::get('/', 'Cms\Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Cms\Auth\LoginController@login')->name('login.post');
Route::post('logout', 'Cms\Auth\LoginController@logout')->name('logout');
Route::post('login/email', 'Cms\Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('login/restablecer/{token}', 'Cms\Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('login/reset', 'Cms\Auth\ResetPasswordController@reset')->name('password.update');

Route::middleware(['auth'])->namespace('Cms')->name('cms.')->group(function () {
    Route::get('/dashboard', 'DashboardController@index')->name('dashboard');
    Route::get('json/dashboard', 'DashboardController@getStatistics')->name('dashboard.get-statistics');

    Route::get('perfil', 'ProfileController@index')->name('profile');
    Route::get('json/profile', 'ProfileController@getProfile')->name('profile.json.get-profile');
    Route::put('profile', 'ProfileController@updateProfile')->name('profile.update-profile');
    Route::put('change-password', 'ProfileController@updatePassword')->name('profile.update-contrasena');

    #Users
    Route::namespace('Configuration')->prefix('configuracion')->name('configuration.')->group(function () {
        Route::name('users.')->prefix('usuarios')->group(function () {
            Route::get('/', 'UsersController@index')->name('index');
            Route::post('/', 'UsersController@store')->name('store');
            Route::put('/{user}', 'UsersController@update')->name('update');
            Route::delete('/{user}', 'UsersController@destroy')->name('destroy');
            //Route::put('/disable/{usuario}', 'UsersController@disable')->name('update');
            Route::get('/json/get-all', 'UsersController@getAll')->name('get-all');
            Route::get('/json/get/{user}', 'UsersController@get')->name('get');
        });
        Route::name('general.')->prefix('general')->group(function () {
            Route::get('/', 'GeneralController@index')->name('index');

            Route::namespace('General')->name('schedules.')->prefix('schedules')->group(function () {
                Route::get('/', 'SchedulesController@getAll')->name('getAll');

                Route::post('/', 'SchedulesController@store')->name('store');
                Route::put('/order', 'SchedulesController@order')->name('order');
                Route::delete('/{element}', 'SchedulesController@destroy')->name('destroy');
                Route::put('/{element}', 'SchedulesController@update')->name('update');
                Route::get('/json/get/{element}', 'SchedulesController@get')->name('get');
            });

            Route::namespace('General')->name('financing-options.')->prefix('financing-options')->group(function () {
                Route::get('/', 'FinancingOptionsController@getAll')->name('getAll');

                Route::post('/', 'FinancingOptionsController@store')->name('store');
                Route::put('/order', 'FinancingOptionsController@order')->name('order');
                Route::delete('/{element}', 'FinancingOptionsController@destroy')->name('destroy');
                Route::put('/{element}', 'FinancingOptionsController@update')->name('update');
                Route::get('/json/get/{element}', 'FinancingOptionsController@get')->name('get');
            });

            
        });
    });

    #Administration
    Route::namespace('Administration')->prefix('administracion')->name('administration.')->group(function () {
        Route::name('statuses-project.')->prefix('estados-proyecto')->group(function () {
            Route::get('/', 'StatusesProyectController@index')->name('index');
            Route::post('/', 'StatusesProyectController@store')->name('store');
            Route::put('/{element}', 'StatusesProyectController@update')->name('update');
            Route::delete('/{element}', 'StatusesProyectController@destroy')->name('destroy');
            Route::get('/json/get-all', 'StatusesProyectController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'StatusesProyectController@get')->name('get');
        });
        Route::name('financial-entities.')->prefix('entidades-financieras')->group(function () {
            Route::get('/', 'FinancialEntitiesController@index')->name('index');
            Route::post('/', 'FinancialEntitiesController@store')->name('store');
            Route::put('/{element}', 'FinancialEntitiesController@update')->name('update');
            Route::delete('/{element}', 'FinancialEntitiesController@destroy')->name('destroy');
            Route::get('/json/get-all', 'FinancialEntitiesController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'FinancialEntitiesController@get')->name('get');
        });
        Route::name('features-project.')->prefix('caracteristicas-proyectos')->group(function () {
            Route::get('/', 'FeaturesProyectController@index')->name('index');
            Route::post('/', 'FeaturesProyectController@store')->name('store');
            Route::put('/{element}', 'FeaturesProyectController@update')->name('update');
            Route::delete('/{element}', 'FeaturesProyectController@destroy')->name('destroy');
            Route::get('/json/get-all', 'FeaturesProyectController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'FeaturesProyectController@get')->name('get');
        });
        Route::name('advisors.')->prefix('asesores')->group(function () {
            Route::get('/', 'AdvisorsController@index')->name('index');
            Route::post('/', 'AdvisorsController@store')->name('store');
            Route::put('/{element}', 'AdvisorsController@update')->name('update');
            Route::delete('/{element}', 'AdvisorsController@destroy')->name('destroy');
            Route::get('/json/get-all', 'AdvisorsController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'AdvisorsController@get')->name('get');
        });

        Route::name('exchange.')->prefix('tipo-cambio')->group(function () {
            Route::get('/', 'ExchangeController@index')->name('index');
            Route::post('/', 'ExchangeController@store')->name('store');
            Route::put('/{element}', 'ExchangeController@update')->name('update');
            Route::get('/json/get-all', 'ExchangeController@getAll')->name('get-all');
        });
    });

    #Customers
    Route::namespace('OrdersStatistics')->prefix('ventas-estadisticas')->name('sales-statistics.')->group(function () {
        Route::name('orders.')->prefix('ventas')->group(function () {
            Route::get('/', 'OrdersController@index')->name('index');
            Route::get('/json/get-all', 'OrdersController@getAll')->name('get-all');
            Route::post('export', 'OrdersController@export')->name('export'); 
            Route::post('export/total', 'OrdersController@exportTotal')->name('export-total'); 
            Route::get('export/{from?}/{to?}', 'OrdersController@exportFile')->name('export-file'); 
            Route::post('resend/{element}', 'OrdersController@resendEmail')->name('resend'); 
            Route::get('/{element}', 'OrdersController@read')->name('read');
        });
        Route::name('statistics.')->prefix('estadisticas')->group(function () {
            Route::get('/', 'StatisticsController@index')->name('index');
            Route::get('/json/get-all', 'StatisticsController@getAll')->name('get-all');
        });
    });

    #Customers
    Route::namespace('Customers')->prefix('clientes')->name('customers.')->group(function () {
        Route::get('/', 'CustomersController@index')->name('index');
        Route::get('/json/get-all', 'CustomersController@getAll')->name('get-all');
        Route::post('export', 'CustomersController@export')->name('export'); 
        Route::post('export/total', 'CustomersController@exportTotal')->name('export-total'); 
        Route::get('export/{from?}/{to?}', 'CustomersController@exportFile')->name('export-file'); 
        Route::get('/{element}', 'CustomersController@read')->name('read');
    });
 
    #Complaints Book
    Route::prefix('libro-de-reclamaciones')->name('complaints-book.')->group(function () {
        Route::get('/', 'ComplaintsBookController@index')->name('index');
        Route::get('/json/get-all', 'ComplaintsBookController@getAll')->name('get-all');
        Route::get('/json/get/{element}', 'ComplaintsBookController@get')->name('get');
        Route::delete('/{element}', 'ComplaintsBookController@destroy')->name('destroy');
    });

    #Suscribers
    Route::prefix('suscripciones')->name('suscribers.')->group(function () {
        Route::get('/', 'SuscribersController@index')->name('index');
        Route::get('/json/get-all', 'SuscribersController@getAll')->name('get-all');
        Route::get('/json/get/{element}', 'SuscribersController@get')->name('get');
        Route::delete('/{element}', 'SuscribersController@destroy')->name('destroy');
        Route::post('export', 'SuscribersController@export')->name('export'); 
        Route::post('export/total', 'SuscribersController@exportTotal')->name('export-total'); 
        Route::get('export/{from?}/{to?}', 'SuscribersController@exportFile')->name('export-file'); 
    });

    #Slider
    Route::prefix('slider')->name('slider.')->group(function () {
        Route::get('/', 'SliderController@index')->name('index');
        Route::get('/nuevo', 'SliderController@create')->name('create');
        Route::get('/editar/{element}', 'SliderController@edit')->name('edit');
        Route::put('/order', 'SliderController@order')->name('order');
        Route::post('/', 'SliderController@store')->name('store');
        Route::put('/{element}', 'SliderController@update')->name('update');
        Route::delete('/{element}', 'SliderController@destroy')->name('destroy');
        Route::get('/json/get-all', 'SliderController@getAll')->name('get-all');
        Route::get('/json/get/{element}', 'SliderController@get')->name('get');
    });

    #Projects
    Route::namespace('Projects')->prefix('proyectos')->name('projects.')->group(function () {
        Route::get('/', 'ProjectsController@index')->name('index');
        Route::get('/nuevo', 'ProjectsController@create')->name('create');
        Route::put('/order', 'ProjectsController@order')->name('order');
        Route::get('/editar/{element}', 'ProjectsController@edit')->name('edit');
        Route::post('/', 'ProjectsController@store')->name('store');
        Route::get('/json/get-all', 'ProjectsController@getAll')->name('get-all');
        Route::get('/json/get/{element}', 'ProjectsController@get')->name('get');
        Route::get('/{element}', 'ProjectsController@read')->name('read');
        Route::put('/{element}', 'ProjectsController@update')->name('update');
        Route::prefix('galeria')->name('gallery.')->group(function () {
            Route::get('/{element}', 'GalleryController@index')->name('index');
            Route::post('/', 'GalleryController@store')->name('store');
            Route::get('/json/get-all', 'GalleryController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'GalleryController@get')->name('get');
            Route::put('/order', 'GalleryController@order')->name('order');
            Route::delete('/{element}', 'GalleryController@destroy')->name('destroy');
            Route::put('/{element}', 'GalleryController@update')->name('update');
        });

        Route::prefix('cotizaciones')->name('quotations.')->group(function () {
            Route::get('/{element}', 'QuotationsController@index')->name('index');
            Route::get('/json/get-all', 'QuotationsController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'QuotationsController@get')->name('get');
            Route::delete('/{element}', 'QuotationsController@destroy')->name('destroy');
        });

        Route::prefix('tipologias')->name('tipologies.')->group(function () {
            Route::get('/{element}', 'TipologiesController@index')->name('index');
            Route::post('/', 'TipologiesController@store')->name('store');
            Route::get('/json/get-all', 'TipologiesController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'TipologiesController@get')->name('get');
            Route::put('/order', 'TipologiesController@order')->name('order');
            Route::put('/{element}', 'TipologiesController@update')->name('update');
            Route::delete('/{element}', 'TipologiesController@destroy')->name('destroy');
            Route::put('/{element}', 'TipologiesController@update')->name('update');

            Route::prefix('planos')->name('blueprints.')->group(function () {
                Route::get('/{element}/{subelement}', 'BlueprintsController@index')->name('index');
                Route::post('/', 'BlueprintsController@store')->name('store');
                Route::get('/json/get-all', 'BlueprintsController@getAll')->name('get-all');
                Route::get('/json/get/{element}', 'BlueprintsController@get')->name('get');
                Route::put('/order', 'BlueprintsController@order')->name('order');
            });
        });

        Route::prefix('documentos')->name('files.')->group(function () {
            Route::get('/{element}', 'FilesController@index')->name('index');
            Route::post('/', 'FilesController@store')->name('store');
            Route::get('/json/get-all', 'FilesController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'FilesController@get')->name('get');
            Route::delete('/{element}', 'FilesController@destroy')->name('destroy');
            Route::put('/order', 'FilesController@order')->name('order');
            Route::put('/{element}', 'FilesController@update')->name('update');
        });
    });

    Route::namespace('Content')->prefix('contenido')->name('content.')->group(function () {
        #Social Networks
        Route::name('social-networks.')->prefix('redes-sociales')->group(function () {
            Route::get('/', 'SocialController@index')->name('index');
            Route::post('/', 'SocialController@store')->name('store');
            Route::put('/order', 'SocialController@order')->name('order');
            Route::delete('/{element}', 'SocialController@destroy')->name('destroy');
            Route::put('/{element}', 'SocialController@update')->name('update');
            Route::get('/json/get-all', 'SocialController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'SocialController@get')->name('get');
        });

        Route::name('general-information.')->prefix('informacion-general')->group(function () {
            #General Information
            Route::get('/', 'GeneralInformationController@index')->name('index');
            Route::post('/', 'GeneralInformationController@store')->name('store');
            Route::get('/json/get', 'GeneralInformationController@get')->name('get');
            #Members
            Route::get('/members/json/get-all', 'GeneralInformationController@membersGetAll')->name('members.get-all');
            Route::post('/members', 'GeneralInformationController@membersStore')->name('members.store');
            Route::put('/members/order', 'GeneralInformationController@membersOrder')->name('members.order');
            Route::get('/members/json/get/{element}', 'GeneralInformationController@membersGet')->name('members.get');
            Route::delete('/members/{element}', 'GeneralInformationController@membersDestroy')->name('members.destroy');
            Route::put('/members/{element}', 'GeneralInformationController@membersUpdate')->name('members.update');
            #Certifications
            Route::get('/certifications/json/get-all', 'GeneralInformationController@certificationsGetAll')->name('certifications.get-all');
            Route::post('/certifications', 'GeneralInformationController@certificationsStore')->name('certifications.store');
            Route::put('/certifications/order', 'GeneralInformationController@certificationsOrder')->name('certifications.order');
            Route::get('/certifications/json/get/{element}', 'GeneralInformationController@certificationsGet')->name('certifications.get');
            Route::delete('/certifications/{element}', 'GeneralInformationController@certificationsDestroy')->name('certifications.destroy');
            Route::put('/certifications/{element}', 'GeneralInformationController@certificationsUpdate')->name('certifications.update');
        });

        #SEO
        Route::name('seo.')->prefix('seo')->group(function () {
            Route::get('/', 'SeoController@index')->name('index');
            Route::get('/json/get-all', 'SeoController@getAll')->name('get-all');
            Route::put('/{page}', 'SeoController@update')->name('update');
        });
    });
 
    Route::namespace('Blog')->prefix('blog')->name('blog.')->group(function () {
        Route::name('category.')->prefix('categorias')->group(function () {
            Route::get('/', 'CategoriesController@index')->name('index');
            Route::post('/', 'CategoriesController@store')->name('store');
            Route::put('/{element}', 'CategoriesController@update')->name('update');
            Route::delete('/{element}', 'CategoriesController@destroy')->name('destroy');
            Route::get('/json/get-all', 'CategoriesController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'CategoriesController@get')->name('get');
        });

        Route::name('posts.')->prefix('posts')->group(function () {
            Route::get('/', 'PostsController@index')->name('index');
            Route::get('/nuevo', 'PostsController@create')->name('create');
            Route::get('/editar/{element}', 'PostsController@edit')->name('edit');
            Route::post('/', 'PostsController@store')->name('store');
            Route::put('/{element}', 'PostsController@update')->name('update');
            Route::delete('/{element}', 'PostsController@destroy')->name('destroy');
            Route::get('/json/get-all', 'PostsController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'PostsController@get')->name('get');
            Route::post('/posts/image', 'PostsController@storeImage')->name('store-image');
        });
    });

    Route::namespace('Leads')->prefix('leads')->name('leads.')->group(function () {
        Route::name('traditional.')->prefix('tradicionales')->group(function () {
            Route::get('/', 'LeadTraditionalController@index')->name('index');
            Route::get('/json/get-all', 'LeadTraditionalController@getAll')->name('get-all');
            Route::delete('/{element}', 'LeadTraditionalController@destroy')->name('destroy');
            Route::get('/json/get/{element}', 'LeadTraditionalController@get')->name('get');
            
            Route::put('/', 'LeadTraditionalController@update')->name('update');
            Route::get('/get-email-destination', 'LeadTraditionalController@getEmailDestination')->name('get-email-destination');
        });

        Route::name('online-appointment.')->prefix('cita-online')->group(function () {
            Route::get('/', 'LeadOnlineController@index')->name('index');
            Route::get('/json/get-all', 'LeadOnlineController@getAll')->name('get-all');
            Route::delete('/{element}', 'LeadOnlineController@destroy')->name('destroy');
            Route::get('/json/get/{element}', 'LeadOnlineController@get')->name('get');
            
            Route::put('/', 'LeadOnlineController@update')->name('update');
            Route::get('/get-email-destination', 'LeadOnlineController@getEmailDestination')->name('get-email-destination');
        });
        
        Route::name('land-sale.')->prefix('venta-terreno')->group(function () {
            Route::get('/', 'LeadLandSaleController@index')->name('index');
            Route::get('/json/get-all', 'LeadLandSaleController@getAll')->name('get-all');
            Route::delete('/{element}', 'LeadLandSaleController@destroy')->name('destroy');
            Route::get('/json/get/{element}', 'LeadLandSaleController@get')->name('get');
            
            Route::put('/', 'LeadLandSaleController@update')->name('update');
            Route::get('/get-email-destination', 'LeadLandSaleController@getEmailDestination')->name('get-email-destination');
        });
    });

    Route::prefix('postulantes')->name('applicants.')->group(function () {
        Route::get('/', 'ApplicantsController@index')->name('index');
        Route::delete('/{element}', 'ApplicantsController@destroy')->name('destroy');
        Route::get('/json/get-all', 'ApplicantsController@getAll')->name('get-all');
        Route::get('/json/get/{element}', 'ApplicantsController@get')->name('get');

        Route::put('/', 'ApplicantsController@update')->name('update');
        Route::get('/get-email-destination', 'ApplicantsController@getEmailDestination')->name('get-email-destination');
    });

    Route::prefix('cami')->name('cami.')->group(function () {
        #Cami
        Route::get('/', 'CamiController@index')->name('index');
        Route::post('/', 'CamiController@store')->name('store');
        Route::get('/json/get', 'CamiController@get')->name('get');
        #Camii Elements
        Route::get('/projects/json/get-all', 'CamiController@elementsGetAll')->name('projects.get-all');
        Route::post('/projects', 'CamiController@elementsStore')->name('projects.store');
        Route::put('/projects/order', 'CamiController@elementsOrder')->name('projects.order');
        Route::get('/projects/json/get/{element}', 'CamiController@elementsGet')->name('projects.get');
        Route::delete('/projects/{element}', 'CamiController@elementsDestroy')->name('projects.destroy');
        Route::put('/projects/{element}', 'CamiController@elementsUpdate')->name('projects.update');
    });

    Route::prefix('testimoniales')->name('testimonials.')->group(function () {
        Route::get('/', 'TestimonialsController@index')->name('index');
        Route::post('/', 'TestimonialsController@store')->name('store');
        Route::put('/order', 'TestimonialsController@order')->name('order');
        Route::put('/{element}', 'TestimonialsController@update')->name('update');
        Route::delete('/{element}', 'TestimonialsController@destroy')->name('destroy');
        Route::get('/json/get-all', 'TestimonialsController@getAll')->name('get-all');
        Route::get('/json/get/{element}', 'TestimonialsController@get')->name('get');
    });

    #Misc
    Route::get('files/{folder}/{subfolder}/{file}', 'CmsController@getFile')->name('get-file');
    Route::get('json/get-departments', 'CmsController@getDepartmentsParent')->name('json.get-departments');
    Route::get('json/get-provinces', 'CmsController@getProvincesParent')->name('json.get-provinces');
    Route::get('json/get-districts', 'CmsController@getDistrictsParent')->name('json.get-districts');
    Route::get('json/select/categories', 'CmsController@getCategories')->name('json.get-categories');
});
