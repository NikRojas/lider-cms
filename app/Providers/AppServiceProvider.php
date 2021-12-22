<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use Illuminate\Support\Str;
use Auth;
use Carbon\Carbon;
use App\Applicant;
use App\Observers\ApplicantObserver;

use App\Lead;
use App\LeadSaleLand;
use App\LeadVideocall;
use App\LogSapConnection;
use App\Observers\LeadObserver;
use App\Module;
use App\Observers\LeadSaleLandObserver;
use App\Observers\LeadVideocallObserver;
use App\Observers\LogSapConnectionObserver;
use App\Observers\ProjectQuotationObserver;
use App\Observers\TransactionObserver;
use App\ProjectQuotation;
use App\Transaction;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //Carbon::setLocale(config('app.locale'));
        view()->composer('layouts.dashboard',function($view){
            $menu = [];
            $modules = Module::where('name','!=','Postulantes')->where('name','!=','Combos')->where('name','!=','Libro de Reclamaciones')->orderBy('index')->get();
            foreach( $modules as $i => $module){
                if(!$module->parent){  
                    $menu[$i]["id"] = $module->id;
                    $menu[$i]["name"] = $module->name;
                    if($module->name == 'Ventas y Estad.'){
                        $menu[$i]["variable"] = 'ventas-estadisticas';
                    }
                    else{
                        $menu[$i]["variable"] = Str::slug($module->name, '-');
                    }
                    $menu[$i]["icon"] = $module->icon;
                    $menu[$i]["slug"] = $module->slug;
                }
            }
            foreach( Module::get() as $j => $module){
                foreach($menu as $k => $item){
                    if($item["id"] == $module->parent){
                        //$menu[$k]["clase"] = "dropdown";
                        $menu[$k]["menu_secondary"][$j]["name"] = $module->name;     
                        $menu[$k]["menu_secondary"][$j]["slug"] = $module->slug;    
                        $menu[$k]["menu_secondary"][$j]["icon"] = $module->icon;    
                    }
                }
            }
            $view->with(compact("menu"));
        });
        Applicant::observe(ApplicantObserver::class);
        Lead::observe(LeadObserver::class);
        LeadVideocall::observe(LeadVideocallObserver::class);
        LeadSaleLand::observe(LeadSaleLandObserver::class);
        ProjectQuotation::observe(ProjectQuotationObserver::class);
        LogSapConnection::observe(LogSapConnectionObserver::class);
        #Notificaciones de Orden Pendiente, Pagado y Rechazado
        #Envio a SAP Reserva de Inmueble
        Transaction::observe(TransactionObserver::class);
    }
}
