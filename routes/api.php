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
    Route::get('layout', 'ApiController@layout');
    Route::get('paginate/blog', 'ApiController@paginateBlog');
    Route::get('paginate/success-stories', 'ApiController@paginateSuccessStories');
    Route::prefix('lead')->group(function() { 
        Route::post('save', 'LeadController@save');
        Route::post('save-landing', 'LeadController@saveLanding');
        Route::post('save-cliengo', 'LeadController@saveCliengo');
        Route::post('save-facebook-chatbot', 'LeadController@saveFacebookChatbot');
    });
    Route::prefix('applicant')->group(function() { 
        Route::post('save', 'ApplicantController@save');
    });
    Route::prefix('page')->group(function() { 
        Route::get('home', 'PageController@home');
        Route::get('department/{department}', 'PageController@department');
        Route::get('blog', 'PageController@blog');
        Route::get('blog/category/{category}', 'PageController@blogCategory');
        Route::get('blog/category/{category}/{post}', 'PageController@blogCategoryPost');
        Route::get('know-us', 'PageController@knowUs');
        Route::get('privacity-policy', 'PageController@privacityPolicy');
        Route::get('work-with-us', 'PageController@workWithUs');
        Route::get('contact-us', 'PageController@contactUs');
    });
});


