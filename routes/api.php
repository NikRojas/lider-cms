<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::namespace('Api')->group(function() { 
    /*Route::get('notify','Orders\OrdersController@test'); 
    Route::get('notify2','Orders\OrdersController@test2'); 
    Route::get('notify3','Orders\OrdersController@test3'); */
    Route::get('layout', 'BaseController@layout');

    Route::get('filters', 'BaseController@getFilters');
    /*Route::get('departments', 'BaseController@getDepartments');
    Route::get('districts', 'BaseController@getDistricts');*/
    Route::prefix('paginate')->group(function() { 
        Route::get('projects', 'BaseController@paginateProjects');
        Route::get('testimonials', 'BaseController@paginateTestimonials');
    });
    Route::prefix('post')->group(function() { 
        Route::post('suscribe', 'PostController@suscribe');
        Route::post('quotation', 'PostController@quotation');
        Route::post('applicant', 'PostController@applicant');
        Route::prefix('lead')->group(function() { 
            Route::post('online-appointment', 'PostController@onlineAppointment');
            Route::post('traditional', 'PostController@traditional');
            Route::post('sell-land', 'PostController@sellLand');
        });
    });
    Route::prefix('page')->group(function() { 
        Route::get('home', 'PageController@home');
        Route::get('blog', 'PageController@blog');
        Route::get('blog/category/{slug}', 'PageController@blogCategory');
        Route::get('blog/category/{slug}/{post}', 'PageController@blogCategoryPost');
        Route::get('online-appointment', 'PageController@onlineAppointment');
        Route::get('contact-us', 'PageController@contactUs');
        Route::get('sell-your-land', 'PageController@sellLand');
        Route::get('projects', 'PageController@projects');
        Route::get('projects/{slug}', 'PageController@projectsRead');
        /*Route::get('know-us', 'PageController@knowUs');
        Route::get('privacity-policy', 'PageController@privacityPolicy');*/
        Route::get('work-with-us', 'PageController@workWithUs');
        Route::get('testimonials', 'PageController@testimonials');
    });
});


