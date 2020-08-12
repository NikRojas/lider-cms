<?php

Route::get('/','Cms\Auth\LoginController@showLoginForm')->name('login');
Route::post('login','Cms\Auth\LoginController@login')->name('login.post');
Route::post('logout','Cms\Auth\LoginController@logout')->name('logout');
Route::post('login/email', 'Cms\Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('login/restablecer/{token}', 'Cms\Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('login/reset', 'Cms\Auth\ResetPasswordController@reset')->name('password.update');

Route::middleware(['auth'])->namespace('Cms')->name('cms.')->group(function() { 
    Route::get('/dashboard', 'DashboardController@index')->name('dashboard');  
    Route::get('json/dashboard', 'DashboardController@getStatistics')->name('dashboard.get-statistics');

    Route::get('perfil', 'ProfileController@index')->name('profile');
    Route::get('json/profile', 'ProfileController@getProfile')->name('profile.json.get-profile');
    Route::put('profile', 'ProfileController@updateProfile')->name('profile.update-profile'); 
    Route::put('change-password', 'ProfileController@updatePassword')->name('profile.update-contrasena');

    #Users
    Route::namespace('Configuration')->prefix('configuracion')->name('configuration.')->group(function() {
        Route::name('users.')->prefix('usuarios')->group(function() {
            Route::get('/', 'UsersController@index')->name('index');
            Route::post('/', 'UsersController@store')->name('store');
            Route::put('/{user}', 'UsersController@update')->name('update');
            Route::delete('/{user}', 'UsersController@destroy')->name('destroy');
            //Route::put('/disable/{usuario}', 'UsersController@disable')->name('update');
            Route::get('/json/get-all', 'UsersController@getAll')->name('get-all');
            Route::get('/json/get/{user}', 'UsersController@get')->name('get');
        });  
    });
    #Roles
    /*Route::get('configuracion/roles', 'Configuration\RolesController@index')->name('roles');
    Route::post('configuracion/roles', 'Configuration\RolesController@registrar')->name('roles.registrar');
    Route::put('configuracion/roles/{rol}', 'Configuration\RolesController@actualizar')->name('roles.update');
    Route::delete('configuracion/roles/{rol}', 'Configuration\RolesController@eliminar')->name('roles.delete');
    Route::get('configuracion/json/roles', 'Configuration\RolesController@obtenerRoles')->name('json.roles.get-roles');
    Route::get('configuracion/json/roles/{rol}', 'Configuration\RolesController@obtenerRol')->name('json.roles.get-rol');
    Route::get('configuracion/json/modulos', 'Configuration\RolesController@obtenerModulos')->name('json.roles.get-modulos')*/

    #Administration
    Route::namespace('Administration')->prefix('administracion')->name('administration.')->group(function() {
        Route::name('statuses-project.')->prefix('estados-proyecto')->group(function() {
            Route::get('/', 'StatusesProyectController@index')->name('index');
            Route::post('/', 'StatusesProyectController@store')->name('store');
            Route::put('/{element}', 'StatusesProyectController@update')->name('update');
            Route::delete('/{element}', 'StatusesProyectController@destroy')->name('destroy');
            Route::get('/json/get-all', 'StatusesProyectController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'StatusesProyectController@get')->name('get');
        });
        Route::name('financial-entities.')->prefix('entidades-financieras')->group(function() {
            Route::get('/', 'FinancialEntitiesController@index')->name('index');
            Route::post('/', 'FinancialEntitiesController@store')->name('store');
            Route::put('/{element}', 'FinancialEntitiesController@update')->name('update');
            Route::delete('/{element}', 'FinancialEntitiesController@destroy')->name('destroy');
            Route::get('/json/get-all', 'FinancialEntitiesController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'FinancialEntitiesController@get')->name('get');
        });
        Route::name('features-project.')->prefix('caracteristicas-proyectos')->group(function() {
            Route::get('/', 'FeaturesProyectController@index')->name('index');
            Route::post('/', 'FeaturesProyectController@store')->name('store');
            Route::put('/{element}', 'FeaturesProyectController@update')->name('update');
            Route::delete('/{element}', 'FeaturesProyectController@destroy')->name('destroy');
            Route::get('/json/get-all', 'FeaturesProyectController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'FeaturesProyectController@get')->name('get');
        });
        Route::name('advisors.')->prefix('asesores')->group(function() {
            Route::get('/', 'AdvisorsController@index')->name('index');
            Route::post('/', 'AdvisorsController@store')->name('store');
            Route::put('/{element}', 'AdvisorsController@update')->name('update');
            Route::delete('/{element}', 'AdvisorsController@destroy')->name('destroy');
            Route::get('/json/get-all', 'AdvisorsController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'AdvisorsController@get')->name('get');
        });

        Route::name('exchange.')->prefix('tipo-cambio')->group(function() {
            Route::get('/', 'ExchangeController@index')->name('index');
            Route::post('/', 'ExchangeController@store')->name('store');
            Route::put('/{element}', 'ExchangeController@update')->name('update');
            Route::get('/json/get-all', 'ExchangeController@getAll')->name('get-all');
        });
    });

    #Slider
    Route::prefix('slider')->name('slider.')->group(function() {
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

    Route::namespace('Content')->prefix('contenido')->name('content.')->group(function() {
        #Social Networks
        Route::name('social-networks.')->prefix('redes-sociales')->group(function() {
            Route::get('/', 'SocialController@index')->name('index');
            Route::post('/', 'SocialController@store')->name('store');
            Route::put('/order', 'SocialController@order')->name('order');
            Route::delete('/{element}', 'SocialController@destroy')->name('destroy');
            Route::put('/{element}', 'SocialController@update')->name('update');
            Route::get('/json/get-all', 'SocialController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'SocialController@get')->name('get');
        });

        Route::name('general-information.')->prefix('informacion-general')->group(function() {
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
        });

        #SEO
        Route::name('seo.')->prefix('seo')->group(function() {
            Route::get('/', 'SeoController@index')->name('index');
            Route::get('/json/get-all', 'SeoController@getAll')->name('get-all');
            Route::put('/{page}', 'SeoController@update')->name('update');
        });
    });

    #Pages
    /*Route::get('informacion/paginas', 'Information\PagesController@index')->name('pages');
    Route::get('informacion/json/pages', 'Information\PagesController@getPages')->name('pages.json.get-pages');
    Route::get('informacion/json/pages/{page}', 'Information\PagesController@getPageSections')->name('pages.json.get-page-sections');
    Route::get('informacion/json/pages/section/{section}', 'Information\PagesController@getPageSectionFields')->name('pages.json.get-page-sections-fields');
    Route::post('informacion/pages', 'Information\PagesController@updateSection')->name('pages.update-section');
    Route::post('informacion/pages/image', 'Information\PagesController@storeImage')->name('pages.store-image');*/
    
    #Blog
    #Category
    Route::get('blog/categorias', 'Blog\CategoriesController@index')->name('blog.categories');
    Route::post('blog/categories', 'Blog\CategoriesController@create')->name('blog.categories.create');
    Route::delete('blog/categories/{category}', 'Blog\CategoriesController@delete')->name('blog.categories.delete');
    Route::put('blog/categories/{category}', 'Blog\CategoriesController@update')->name('blog.categories.update');
    Route::get('blog/json/categories', 'Blog\CategoriesController@getCategories')->name('blog.categories.get-categories');
    Route::get('blog/json/categories/autocomplete', 'Blog\CategoriesController@autocomplete')->name('blog.categories.get-category-autocomplete'); 
    Route::get('blog/json/categories/{category}', 'Blog\CategoriesController@getCategory')->name('blog.categories.get-category');

    #Posts
    Route::get('blog/posts', 'Blog\PostsController@index')->name('blog.posts');
    Route::post('blog/posts', 'Blog\PostsController@create')->name('blog.posts.create');
    Route::get('blog/json/posts', 'Blog\PostsController@getPosts')->name('blog.posts.get-posts');
    Route::get('blog/json/posts/{post}', 'Blog\PostsController@getPost')->name('blog.posts.json.get-post');
    Route::delete('blog/posts/{post}', 'Blog\PostsController@delete')->name('blog.posts.delete');
    Route::put('blog/posts/{post}', 'Blog\PostsController@update')->name('blog.posts.update');
    Route::post('blog/posts/image', 'Blog\PostsController@storeImage')->name('blog.posts.store-image');

    #Customers
    /*Route::get('clientes', 'CustomerController@index')->name('clientes');
    Route::post('customers', 'CustomerController@create')->name('customers.create');
    Route::put('customers/order', 'CustomerController@order')->name('customers.order');
    Route::put('customers/{customer}', 'CustomerController@update')->name('customers.update');
    Route::get('json/customers', 'CustomerController@getCustomers')->name('customers.json.get-customers');
    Route::get('json/customers/{customer}', 'CustomerController@getCustomer')->name('customers.json.get-customer');
    Route::delete('customers/{customer}', 'CustomerController@delete')->name('customers.delete');*/

    #Testimonials
    /*Route::get('testimonios', 'TestimonialsController@index')->name('clientes');
    Route::post('testimonials', 'TestimonialsController@create')->name('testimonials.create');
    Route::put('testimonials/order', 'TestimonialsController@order')->name('testimonials.order');
    Route::put('testimonials/{testimonial}', 'TestimonialsController@update')->name('testimonials.update');
    Route::get('json/testimonials', 'TestimonialsController@getTestimonials')->name('testimonials.json.get-testimonials');
    Route::get('json/testimonials/{testimonial}', 'TestimonialsController@getTestimonial')->name('testimonials.json.get-testimonial');
    Route::delete('testimonials/{testimonial}', 'TestimonialsController@delete')->name('testimonials.delete');*/

    #Applicants
    /*Route::get('postulantes', 'ApplicantsController@index')->name('applicants');
    Route::get('json/applicants', 'ApplicantsController@getApplicants')->name('applicants.get-applicants');
    Route::get('json/applicants/{applicant}', 'ApplicantsController@getApplicant')->name('applicants.json.get-applicant');
    Route::delete('applicants/{applicant}', 'ApplicantsController@delete')->name('applicants.delete');

    Route::put('applicants', 'ApplicantsController@update')->name('applicants.update'); 
    Route::get('applicants/json/contact-email-destination', 'ApplicantsController@getEmailDestination')->name('applicants.json.contact-email-destination');*/

    #Misc
    Route::get('files/{folder}/{subfolder}/{file}','CmsController@getFile')->name('get-file');
    Route::get('json/select/categories', 'CmsController@getCategories')->name('json.get-categories');
});
