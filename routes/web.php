<?php

use App\Applicant;
use App\FinancingOption;
use App\Jobs\SendReserveToSap;
use App\Lead;
use App\Order;
use App\ProjectQuotation;
use App\ProjectTypeDepartment;

Route::get('/', 'Cms\Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Cms\Auth\LoginController@login')->name('login.post');
Route::post('logout', 'Cms\Auth\LoginController@logout')->name('logout');
Route::post('login/email', 'Cms\Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('login/restablecer/{token}', 'Cms\Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('login/reset', 'Cms\Auth\ResetPasswordController@reset')->name('password.update');

Route::middleware(['auth'])->namespace('Cms')->name('cms.')->group(function () {
    Route::get('/dashboard', 'DashboardController@index')->name('dashboard');
    Route::get('json/dashboard', 'DashboardController@getStatistics')->name('dashboard.get-statistics');
    Route::get('json/dashboard-by-date', 'DashboardController@getStatisticsByDate')->name('dashboard.get-statistics-by-date');

    Route::get('perfil', 'ProfileController@index')->name('profile');
    Route::get('json/profile', 'ProfileController@getProfile')->name('profile.json.get-profile');
    Route::put('profile', 'ProfileController@updateProfile')->name('profile.update-profile');
    Route::put('change-password', 'ProfileController@updatePassword')->name('profile.update-contrasena');

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
        Route::name('logs-sap.')->prefix('logs-sap')->group(function () {
            Route::get('/', 'LogsSapController@index')->name('index');
            Route::get('/json/get-all', 'LogsSapController@getAll')->name('get-all');
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
            Route::put('/credentials/{element}', 'AdvisorsController@credentials')->name('credentials');
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

        Route::name('bonds.')->prefix('bonos')->group(function () {
            Route::get('/', 'BondsController@index')->name('index');
            Route::post('/', 'BondsController@store')->name('store');
            Route::put('/{element}', 'BondsController@update')->name('update');
            Route::delete('/{element}', 'BondsController@destroy')->name('destroy');
            Route::get('/json/get-all', 'BondsController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'BondsController@get')->name('get');
        });

        Route::name('views.')->prefix('vistas')->group(function () {
            Route::get('/', 'ViewsController@index')->name('index');
            Route::post('/', 'ViewsController@store')->name('store');
            Route::put('/{element}', 'ViewsController@update')->name('update');
            Route::delete('/{element}', 'ViewsController@destroy')->name('destroy');
            Route::get('/json/get-all', 'ViewsController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'ViewsController@get')->name('get');
        });

        Route::name('types.')->prefix('tipos')->group(function () {
            Route::get('/', 'TypesController@index')->name('index');
            Route::post('/', 'TypesController@store')->name('store');
            Route::put('/{element}', 'TypesController@update')->name('update');
            Route::delete('/{element}', 'TypesController@destroy')->name('destroy');
            Route::get('/json/get-all', 'TypesController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'TypesController@get')->name('get');
        });
    });

    Route::namespace('OrdersStatistics')->prefix('ventas-estadisticas')->name('sales-statistics.')->group(function () {
        Route::name('orders.')->prefix('ventas')->group(function () {
            Route::get('/', 'OrdersController@index')->name('index');
            Route::get('/json/get-all', 'OrdersController@getAll')->name('get-all');
            Route::get('/all-export', 'OrdersController@allExport')->name('all-export');
            Route::post('/filter-export', 'OrdersController@filterExport')->name('filter-export');
            Route::post('/sap/{element}', 'OrdersController@sendToSap')->name('send-to-sap');
            Route::post('resend/{element}', 'OrdersController@resendEmail')->name('resend');
            Route::put('/cancel/{element}', 'OrdersController@cancel')->name('cancel');
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
        Route::get('/all-export', 'CustomersController@allExport')->name('all-export');
        Route::post('/filter-export', 'CustomersController@filterExport')->name('filter-export');
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

            Route::get('/{element}/all-export', 'QuotationsController@allExport')->name('all-export');
            Route::post('/{element}/filter-export', 'QuotationsController@filterExport')->name('filter-export');
        });

        Route::prefix('banners')->name('banners.')->group(function () {
            Route::get('/{element}', 'BannerController@index')->name('index');
            Route::post('/', 'BannerController@store')->name('store');
            Route::get('/json/get-all', 'BannerController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'BannerController@get')->name('get');
            Route::put('/order', 'BannerController@order')->name('order');
            Route::put('/{element}', 'BannerController@update')->name('update');
            Route::delete('/{element}', 'BannerController@destroy')->name('destroy');
            Route::put('/{element}', 'BannerController@update')->name('update');
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
            /*Route::prefix('planos')->name('blueprints.')->group(function () {
                Route::get('/{element}/{subelement}', 'BlueprintsController@index')->name('index');
                Route::post('/', 'BlueprintsController@store')->name('store');
                Route::get('/json/get-all', 'BlueprintsController@getAll')->name('get-all');
                Route::get('/json/get/{element}', 'BlueprintsController@get')->name('get');
                Route::put('/order', 'BlueprintsController@order')->name('order');
            });*/
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

        Route::prefix('tour-virtual')->name('virtual-tour.')->group(function () {
            Route::get('/{element}', 'VirtualTourController@index')->name('index');
            Route::post('/', 'VirtualTourController@store')->name('store');
            Route::get('/json/get-all', 'VirtualTourController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'VirtualTourController@get')->name('get');
            Route::delete('/{element}', 'VirtualTourController@destroy')->name('destroy');
            Route::put('/order', 'VirtualTourController@order')->name('order');
            Route::put('/{element}', 'VirtualTourController@update')->name('update');
        });

        Route::prefix('inmuebles')->name('departments.')->group(function () {
            Route::prefix('images')->name('images.')->group(function () {
                Route::delete('/', 'DepartmentsImagesController@deleteImages')->name('store');
                Route::post('/', 'DepartmentsImagesController@store')->name('store');
                Route::get('/json/get-all/{element}', 'DepartmentsImagesController@getAll')->name('json.get-all');
            });
            Route::get('/{element}', 'DepartmentsController@index')->name('index');
            Route::delete('/{element}', 'DepartmentsController@destroy')->name('index');
            Route::get('/get-sap/{element}', 'DepartmentsController@getSap')->name('get-sap-departments');
            Route::get('/json/get-all', 'DepartmentsController@getAll')->name('get-all');
        });

        Route::prefix('credenciales-pasarela')->name('credentials.')->group(function () {
            Route::post('/updated-credential', 'CredentialsController@updateCredential')->name('update-credential');
            Route::post('/updated-tokens', 'CredentialsController@updateTokens')->name('update-tokens');
            Route::post('/test', 'CredentialsController@test')->name('test');
            Route::post('/prod', 'CredentialsController@prod')->name('prod');
            Route::post('/activate', 'CredentialsController@activate')->name('activate');
            Route::get('/{element}', 'CredentialsController@index')->name('index');
        });

        Route::prefix('informacion-plataforma-comercial')->name('platform-general-information.')->group(function () {
            Route::get('/{element}', 'TpsGeneralInformationController@index')->name('index');
            Route::post('/', 'TpsGeneralInformationController@store')->name('store');
            Route::get('/json/get', 'TpsGeneralInformationController@get')->name('get');
        });

        Route::prefix('ubicacion-plataforma-comercial')->name('tps-location.')->group(function () {
            Route::post('/', 'TpsLocationController@store')->name('store');
            Route::get('/json/get-all', 'TpsLocationController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'TpsLocationController@get')->name('get');
            Route::delete('/{element}', 'TpsLocationController@destroy')->name('destroy');
            Route::put('/order', 'TpsLocationController@order')->name('order');
            Route::put('/{element}', 'TpsLocationController@update')->name('update');
        });

        Route::prefix('promocion-plataforma-comercial')->name('tps-promotion.')->group(function () {
            Route::post('/', 'TpsPromotionController@store')->name('store');
            Route::get('/json/get-all', 'TpsPromotionController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'TpsPromotionController@get')->name('get');
            Route::delete('/{element}', 'TpsPromotionController@destroy')->name('destroy');
            Route::put('/order', 'TpsPromotionController@order')->name('order');
            Route::put('/{element}', 'TpsPromotionController@update')->name('update');
        });

        Route::prefix('materiales-galeria')->name('tps-gallery-materials.')->group(function () {
            Route::post('/', 'TpsMaterialsGalleryController@store')->name('store');
            Route::get('/json/get-all', 'TpsMaterialsGalleryController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'TpsMaterialsGalleryController@get')->name('get');
            Route::delete('/{element}', 'TpsMaterialsGalleryController@destroy')->name('destroy');
            Route::put('/order', 'TpsMaterialsGalleryController@order')->name('order');
            Route::put('/{element}', 'TpsMaterialsGalleryController@update')->name('update');
        });

        Route::prefix('pines-plataforma-comercial')->name('tps-pins.')->group(function () {
            Route::post('/', 'TpsPinsController@store')->name('store');
            Route::get('/json/get-all', 'TpsPinsController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'TpsPinsController@get')->name('get');
            Route::delete('/{element}', 'TpsPinsController@destroy')->name('destroy');
            Route::put('/{element}', 'TpsPinsController@update')->name('update');
        });
    });

    Route::namespace('AdvisorySystem')->prefix('sistema-asesores')->name('advisory-system.')->group(function () {
        Route::name('general-information.')->prefix('sobre-lider')->group(function () {
            #General Information
            Route::get('/', 'GeneralInformationController@index')->name('index');
            Route::post('/', 'GeneralInformationController@store')->name('store');
            Route::get('/json/get', 'GeneralInformationController@get')->name('get');
        });
    });

    Route::namespace('Content')->prefix('contenido')->name('content.')->group(function () {
        Route::name('general-content.')->prefix('contenido-general')->group(function () {
            Route::get('/', 'GeneralContentController@index')->name('index');
            Route::put('/', 'GeneralContentController@updateSection')->name('update-section');
            Route::get('/json/get-all', 'GeneralContentController@getAllPages')->name('get-all');
            Route::get('/json/get/{page}', 'GeneralContentController@getPageSections')->name('get');
            Route::get('/json/get/section/{section}', 'GeneralContentController@getPageSectionFields')->name('get-page-sections-fields');
            Route::post('/image', 'GeneralContentController@storeImage')->name('store-image');
        });

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

        Route::prefix('cami')->name('cami.')->group(function () {
            #Cami
            Route::get('/', 'CamiController@index')->name('index');
            Route::post('/', 'CamiController@store')->name('store');
            Route::get('/json/get', 'CamiController@get')->name('get');
            #Cami Elements
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

        #Sobre Lider
        Route::prefix('sobre-lider')->name('about.')->group(function () {
            Route::get('/', 'AboutController@index')->name('index');
            Route::prefix('third')->name('third.')->namespace('About')->group(function () {
                Route::post('/', 'ThirdController@store')->name('store');
                Route::put('/order', 'ThirdController@order')->name('order');
                Route::put('/{element}', 'ThirdController@update')->name('update');
                Route::delete('/{element}', 'ThirdController@destroy')->name('destroy');
                Route::get('/json/get-all', 'ThirdController@getAll')->name('get-all');
                Route::get('/json/get/{element}', 'ThirdController@get')->name('get');

                Route::post('/text', 'ThirdController@updateText')->name('update-text');
                Route::get('/json/get', 'ThirdController@getText')->name('get-text');
            });
            Route::prefix('fifth')->name('fifth.')->namespace('About')->group(function () {
                Route::post('/', 'FifthController@store')->name('store');
                Route::put('/order', 'FifthController@order')->name('order');
                Route::put('/{element}', 'FifthController@update')->name('update');
                Route::delete('/{element}', 'FifthController@destroy')->name('destroy');
                Route::get('/json/get-all', 'FifthController@getAll')->name('get-all');
                Route::get('/json/get/{element}', 'FifthController@get')->name('get');

                Route::post('/text', 'FifthController@updateText')->name('update-text');
                Route::get('/json/get', 'FifthController@getText')->name('get-text');
            });
            Route::prefix('fourth')->name('fourth.')->namespace('About')->group(function () {
                Route::post('/', 'FourthController@store')->name('store');
                Route::put('/order', 'FourthController@order')->name('order');
                Route::put('/{element}', 'FourthController@update')->name('update');
                Route::delete('/{element}', 'FourthController@destroy')->name('destroy');
                Route::get('/json/get-all', 'FourthController@getAll')->name('get-all');
                Route::get('/json/get/{element}', 'FourthController@get')->name('get');

                Route::post('/text', 'FourthController@updateText')->name('update-text');
                Route::get('/json/get', 'FourthController@getText')->name('get-text');
            });

            Route::prefix('second')->name('second.')->namespace('About')->group(function () {
                Route::post('/', 'SecondController@update')->name('update');
                Route::get('/json/get', 'SecondController@get')->name('get');
            });

            Route::prefix('first')->name('first.')->namespace('About')->group(function () {
                Route::post('/', 'FirstController@update')->name('update');
                Route::get('/json/get', 'FirstController@get')->name('get');
            });
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

            Route::get('/all-export', 'LeadTraditionalController@allExport')->name('all-export');
            Route::post('/filter-export', 'LeadTraditionalController@filterExport')->name('filter-export');
        });

        Route::name('online-appointment.')->prefix('cita-online')->group(function () {
            Route::get('/', 'LeadOnlineController@index')->name('index');
            Route::get('/json/get-all', 'LeadOnlineController@getAll')->name('get-all');
            Route::delete('/{element}', 'LeadOnlineController@destroy')->name('destroy');
            Route::get('/json/get/{element}', 'LeadOnlineController@get')->name('get');

            Route::put('/', 'LeadOnlineController@update')->name('update');
            Route::get('/get-email-destination', 'LeadOnlineController@getEmailDestination')->name('get-email-destination');

            Route::get('/all-export', 'LeadOnlineController@allExport')->name('all-export');
            Route::post('/filter-export', 'LeadOnlineController@filterExport')->name('filter-export');

            Route::get('/webhook', 'LeadOnlineController@getWebhook')->name('get.webhook');
            Route::put('/webhook', 'LeadOnlineController@updateWebhook')->name('update.webhook');
        });

        Route::name('land-sale.')->prefix('venta-terreno')->group(function () {
            Route::get('/', 'LeadLandSaleController@index')->name('index');
            Route::get('/json/get-all', 'LeadLandSaleController@getAll')->name('get-all');
            Route::delete('/{element}', 'LeadLandSaleController@destroy')->name('destroy');
            Route::get('/json/get/{element}', 'LeadLandSaleController@get')->name('get');

            Route::put('/', 'LeadLandSaleController@update')->name('update');
            Route::get('/get-email-destination', 'LeadLandSaleController@getEmailDestination')->name('get-email-destination');

            Route::get('/all-export', 'LeadLandSaleController@allExport')->name('all-export');
            Route::post('/filter-export', 'LeadLandSaleController@filterExport')->name('filter-export');
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

    Route::prefix('chatbot')->name('chatbot.')->group(function () {
        Route::get('/', 'ChatbotController@index')->name('index');
        Route::delete('/leads/{element}', 'ChatbotController@leadsDestroy')->name('leads-destroy');
        Route::get('/leads/json/get-all', 'ChatbotController@leadsGetAll')->name('leads-get-all');
        Route::get('/leads/json/get/{element}', 'ChatbotController@leadsGet')->name('leads-get');
        Route::get('/leads/all-export', 'ChatbotController@leadsAllExport')->name('all-export');
        Route::post('/leads/filter-export', 'ChatbotController@leadsFilterExport')->name('filter-export');
        Route::get('/qualification/json/get-all', 'ChatbotController@qualificationGet')->name('qualification-get');
        Route::get('/faq/json/get-all', 'ChatbotController@faqGetAll')->name('faq-get-all');
        Route::post('/faq', 'ChatbotController@faqStore')->name('faq-store');
        Route::put('/faq/order', 'ChatbotController@faqOrder')->name('faq-order');
        Route::get('/faq/json/get/{element}', 'ChatbotController@faqGet')->name('faq-get');
        Route::post('/faq/image/image', 'ChatbotController@faqStoreImage')->name('faq-store-image');
        Route::delete('/faq/delete/{element}', 'ChatbotController@faqDestroy')->name('faq-destroy');
        Route::put('/faq/{element}', 'ChatbotController@faqUpdate')->name('faq-update');
    });

    #Misc
    Route::get('files/{folder}/{subfolder}/{file}', 'CmsController@getFile')->name('get-file');
    Route::get('json/get-departments', 'CmsController@getDepartmentsParent')->name('json.get-departments');
    Route::get('json/get-provinces', 'CmsController@getProvincesParent')->name('json.get-provinces');
    Route::get('json/get-districts', 'CmsController@getDistrictsParent')->name('json.get-districts');
    Route::get('json/select/categories', 'CmsController@getCategories')->name('json.get-categories');
});

/*Route::get('/get-tipologies', function () {
    $els = ProjectTypeDepartment::with('projectRel')->get();
    $html = "<table>";
    foreach ($els as $key => $value) {
            $html.= "<tr>";
            $html.= "<td>".$value["id"]."</td>";
            $html.= "<td>".$value["projectRel"]["name_es"]."</td>";
            $html.= "<td>".$value["name"]."</td>";
            $html.= "<td>".$value["area"]."</td>";
            $html.= "<td>".$value["slug"]."</td>";
            $html.= "</tr>";
    }
    $html.= "</table>";
    return $html;
});*/

/*Route::get('/send-to-sap', function () {
    $order = Order::find(100000000);
    SendReserveToSap::dispatch($order);
    //return view('emails.orders.paid',["order" => $order]);
});

*/
Route::get('/mail/reserve', function () {
    $order = Order::find(100000013);
    return view('emails.orders.paid',["order" => $order]);
});
/*
Route::get('/mail/user/quotation', function () {
    $lead = ProjectQuotation::with('projectRel.statusRel','advisorRel','projectTypeDepartmentRel','projectRel.financingOptionsRel')->find(7);
    $financingOptions = FinancingOption::where('active',true)->orderBy('index','asc')->get();
    return view('emails.user-quotation',["lead" => $lead, "financingOptions" => $financingOptions]);
});

Route::get('send-to-sap/{element}','Cms\OrdersStatistics\OrdersController@sendToSap');

Route::get('/mail/advisor/reserve', function () {
    $order = Order::find(100000008);
    return view('emails.orders.advisor-paid',["order" => $order]);
});

Route::get('/mail/user', function () {
    return view('emails.user-lead');
});

Route::get('/mail/advisor/lead', function () {
    $lead = Lead::first();
    return view('emails.advisor-lead',["lead" => $lead, "type" => "Tradicional"]);
});

Route::get('/mail/user/quotation', function () {
    $lead = ProjectQuotation::with('projectRel.statusRel','advisorRel','projectTypeDepartmentRel','projectRel.financingOptionsRel')->find(7);
    $financingOptions = FinancingOption::where('active',true)->orderBy('index','asc')->get();
    return view('emails.user-quotation',["lead" => $lead, "financingOptions" => $financingOptions]);
});

/*Route::get('/mail/advisor/quotation', function () {
    $lead = ProjectQuotation::with('projectRel.statusRel','advisorRel','projectTypeDepartmentRel')->first();
    return view('emails.advisor-quotation',["lead" => $lead]);
});

Route::get('/mail/applicant', function () {
    $applicant = Applicant::first();
    return view('emails.applicant',["applicant" => $applicant]);
});

Route::get('/sap-departments/{element}','Cms\Projects\DepartmentsController@getSap');*/
