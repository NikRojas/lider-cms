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
    Route::get('configuracion/usuarios', 'Configuration\UsersController@index')->name('users');
    Route::post('configuracion/usuarios', 'Configuration\UsersController@registrar')->name('users.registrar');
    Route::put('configuracion/usuarios/{usuario}', 'Configuration\UsersController@actualizar')->name('users.update');
    Route::delete('configuracion/usuarios/{usuario}', 'Configuration\UsersController@eliminar')->name('users.delete');
    Route::put('configuracion/usuarios/deshabilitar/{usuario}', 'Configuration\UsersController@disable')->name('users.update');
    Route::get('configuracion/json/usuarios', 'Configuration\UsersController@obtenerUsuarios')->name('json.users');
    Route::get('configuracion/json/usuarios/{usuario}', 'Configuration\UsersController@obtenerUsuario')->name('json.user');
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
        Route::name('status-project.')->group(function() {
            Route::get('/', 'StatusProyectController@index')->name('index');
        });
        Route::name('features-project.')->prefix('caracteristicas-proyectos')->group(function() {
            Route::get('/', 'FeaturesProyectController@index')->name('index');
            Route::post('/', 'FeaturesProyectController@store')->name('store');
            Route::put('/{element}', 'FeaturesProyectController@update')->name('update');
            Route::delete('/{element}', 'FeaturesProyectController@destroy')->name('destroy');
            Route::get('/json/get-all', 'FeaturesProyectController@getAll')->name('get-all');
            Route::get('/json/get/{element}', 'FeaturesProyectController@get')->name('get');
        });
    });

    #Administration
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

    #Information
    #SEO
    Route::get('informacion/seo', 'Information\SeoController@index')->name('information.seo');
    Route::get('informacion/json/seo', 'Information\SeoController@getPages')->name('information.seo.json.get-pages');
    Route::put('informacion/seo/{page}', 'Information\SeoController@update')->name('information.seo.update');
    #General
    Route::get('informacion/general', 'Information\GeneralController@index')->name('information');
    Route::get('informacion/json/informacion', 'Information\GeneralController@get')->name('information.get');
    Route::post('informacion/general', 'Information\GeneralController@registrar')->name('information.registrar');


    Route::get('informacion/json/partners', 'Information\GeneralController@getPartners')->name('information.partners.json.get-partners');
    Route::post('informacion/partners', 'Information\GeneralController@createPartner')->name('information.partners.create');
    Route::put('informacion/partners/order', 'Information\GeneralController@orderPartners')->name('information.partners.order');
    Route::get('informacion/json/partners/{partner}', 'Information\GeneralController@getPartner')->name('information.partners.json.get-partner');
    Route::delete('informacion/partners/{partner}', 'Information\GeneralController@deletePartner')->name('information.partners.delete');
    Route::put('informacion/partners/{partner}', 'Information\GeneralController@updatePartner')->name('information.partners.update');


    #Pages
    /*Route::get('informacion/paginas', 'Information\PagesController@index')->name('pages');
    Route::get('informacion/json/pages', 'Information\PagesController@getPages')->name('pages.json.get-pages');
    Route::get('informacion/json/pages/{page}', 'Information\PagesController@getPageSections')->name('pages.json.get-page-sections');
    Route::get('informacion/json/pages/section/{section}', 'Information\PagesController@getPageSectionFields')->name('pages.json.get-page-sections-fields');
    Route::post('informacion/pages', 'Information\PagesController@updateSection')->name('pages.update-section');
    Route::post('informacion/pages/image', 'Information\PagesController@storeImage')->name('pages.store-image');*/
    
    #Social Networks
    Route::get('informacion/redes-sociales', 'Information\SocialController@index')->name('information.social');
    Route::get('informacion/json/social', 'Information\SocialController@getNetworks')->name('information.social.json.get-networks');
    Route::post('informacion/social', 'Information\SocialController@create')->name('information.social.create');
    Route::put('informacion/social/order', 'Information\SocialController@order')->name('information.social.order');
    Route::get('informacion/json/social/{social}', 'Information\SocialController@getNetwork')->name('information.social.json.get-social');
    Route::delete('informacion/social/{social}', 'Information\SocialController@delete')->name('information.social.delete');
    Route::put('informacion/social/{social}', 'Information\SocialController@update')->name('information.social.update');

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
