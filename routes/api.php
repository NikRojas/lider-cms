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

Route::get('/testCombo', function () {
    $priceProject = 1000000;
    $priceForeignProject = 40000;
    $combosFinal = [];
    $combos = App\RealStatePackage::select('*')->where('project_id',1)->with('projectRel.currencyRel')->get();
    if(count($combos) > 0){
        $combosFiltered = $combos->filter(function($combo){
            return $combo->status_calculate == true;
        });
    }
    if(count($combosFiltered) > 0){
        foreach ($combosFiltered as $comboElement) {
            if($comboElement->projectRel->master_currency_id == 1){
                $price = $comboElement->departmentsRel->pluck('price');
            }
            else{
                $price = $comboElement->departmentsRel->pluck('price_foreign');
            }
            $combosFinal[] = [
                'id' => $comboElement->id,
                'description' => $comboElement->description,
                'price' => $price->sum()
            ];
        }
        $combosCollect = collect($combosFinal);
        $minPrice = $combosCollect->min('price');
        $maxPrice = $combosCollect->max('price');
    }
    return response()->json($combosFinal);
});

Route::namespace('Api')->group(function() { 
    Route::get('layout', 'BaseController@layout');
    Route::get('sitemap-blog', 'BaseController@sitemapBlog');
    Route::get('sitemap-projects', 'BaseController@sitemapProjects');
    Route::get('filters', 'BaseController@getFiltersSpecific');
    Route::prefix('paginate')->group(function() { 
        Route::get('projects', 'BaseController@paginateProjects');
        Route::get('blog', 'BaseController@paginateBlog');
        Route::get('testimonials', 'BaseController@paginateTestimonials');
        Route::get('departments', 'Reserve\IndexController@paginateDepartments');
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
        Route::get('cami', 'PageController@cami');
        Route::get('work-with-us', 'PageController@workWithUs');
        Route::get('about-us', 'PageController@aboutUs');
        Route::get('testimonials', 'PageController@testimonials');
        Route::get('privacy-policies', 'PageController@privacityPolicy');
        Route::get('terms-conditions', 'PageController@termsConditions');
        Route::get('quotation', 'PageController@quotation');
        Route::get('reserve', 'Reserve\IndexController@index');
        Route::get('reserve/summary/{code}', 'Reserve\IndexController@summary');
        Route::get('reserve/advisor', 'Reserve\IndexController@indexAdvisor');
        Route::get('reserve/{code}', 'Reserve\IndexController@detail');
    });
    Route::prefix('reserve')->group(function() { 
        Route::get('get-all', 'Reserve\IndexController@getDepartmentsWithCombos');
        Route::get('filters', 'Reserve\IndexController@updateFilters');
        Route::post('customer', 'Reserve\PostController@customer');
        #PLATAFORMA ASESORES
        Route::post('platform-commercial/customer', 'Reserve\PostController@customerPlatformCommercial');
        Route::get('available/{code}', 'Reserve\ConnectionController@availableSap');
        #PLATAFORMA ASESORES
        Route::get('reserve-departments/{code}', 'Reserve\ConnectionController@getReserveDepartments');
        Route::prefix('payment')->group(function() { 
            Route::post('init', 'Reserve\PostController@paymentInit');
            Route::post('ipn', 'Reserve\PostController@ipn');
            Route::post('platform-commercial/init', 'Reserve\PostController@paymentInitPlatformCommercial');
            Route::post('platform-commercial/ipn', 'Reserve\PostController@ipnPlatformCommercial');
        });
    });
    Route::prefix('chat')->group(function() { 
        Route::prefix('get')->group(function() { 
            Route::get('faq', 'Chat\GetController@getFaq');
            Route::get('departments', 'Chat\GetController@departments');
            Route::get('districts', 'Chat\GetController@districts');
            Route::get('projects', 'Chat\GetController@projects');
            Route::get('project', 'Chat\GetController@getProject');
            Route::get('project-bonds', 'Chat\GetController@getProjectBonds');
            Route::get('project-promos', 'Chat\GetController@getProjectPromos');
            Route::get('project-quotation', 'Chat\GetController@getProjectQuotation');
            Route::get('contact-link', 'Chat\GetController@getContactLink');
            Route::get('project-reserve', 'Chat\GetController@getProjectReserve');
            Route::get('project-other-projects', 'Chat\GetController@getProjectOtherProjects');
            Route::get('no-doubt', 'Chat\GetController@getNoDoubts');
            Route::get('project-contact', 'Chat\GetController@getProjectContact');
            //Route::get('contact-medium', 'Chat\GetController@contactMedium');
            //Route::get('contact-schedules', 'Chat\GetController@contactSchedules');
        });
        Route::prefix('post')->group(function() { 
            Route::post('qualification', 'Chat\PostController@qualification');
            //Route::post('project-advisory-contact', 'Chat\PostController@projectAdvisoryContact');
        });
    });
});


