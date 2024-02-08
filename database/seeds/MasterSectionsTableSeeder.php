<?php

use App\MasterPage;
use Illuminate\Database\Seeder;

class MasterSectionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_sections')->insert([
            [
                'name' 		=> 'Cami',
                'master_page_id'     => MasterPage::where('name','Home')->first()->id,
            ],
            [
                'name' 		=> 'Blog',
                'master_page_id'     => MasterPage::where('name','Home')->first()->id,
            ],
            [
                'name' 		=> 'Banner',
                'master_page_id'     => MasterPage::where('name','Cami')->first()->id,
            ],
            [
                'name' 		=> 'Banner',
                'master_page_id'     => MasterPage::where('name','Contacto')->first()->id,
            ],
            [
                'name' 		=> 'Información',
                'master_page_id'     => MasterPage::where('name','Contacto')->first()->id,
            ],
            [
                'name' 		=> 'Banner',
                'master_page_id'     => MasterPage::where('name','Blog')->first()->id,
            ],
            [
                'name' 		=> 'Suscríbete',
                'master_page_id'     => MasterPage::where('name','Blog')->first()->id,
            ],
            [
                'name' 		=> 'Banner',
                'master_page_id'     => MasterPage::where('name','Testimoniales')->first()->id,
            ],
            [
                'name' 		=> 'Conoce lo que dicen nuestros vecinos Líder',
                'master_page_id'     => MasterPage::where('name','Testimoniales')->first()->id,
            ],
            [
                'name' 		=> 'Banner',
                'master_page_id'     => MasterPage::where('name','Vende tu terreno')->first()->id,
            ],
            [
                'name' 		=> 'Información',
                'master_page_id'     => MasterPage::where('name','Vende tu terreno')->first()->id,
            ],
            [
                'name' 		=> 'Banner',
                'master_page_id'     => MasterPage::where('name','Trabaja con nosotros')->first()->id,
            ],
            [
                'name' 		=> 'Información',
                'master_page_id'     => MasterPage::where('name','Trabaja con nosotros')->first()->id,
            ],
            [
                'name' 		=> 'Banner',
                'master_page_id'     => MasterPage::where('name','Términos y Condiciones')->first()->id,
            ],
            [
                'name' 		=> 'Información',
                'master_page_id'     => MasterPage::where('name','Términos y Condiciones')->first()->id,
            ],
            [
                'name' 		=> 'Banner',
                'master_page_id'     => MasterPage::where('name','Proyectos')->first()->id,
            ],
            [
                'name' 		=> 'Banner',
                'master_page_id'     => MasterPage::where('name','Nosotros')->first()->id,
            ],
            [
                'name' 		=> 'Banner',
                'master_page_id'     => MasterPage::where('name','Cita Online')->first()->id,
            ],
            [
                'name' 		=> 'Información',
                'master_page_id'     => MasterPage::where('name','Cita Online')->first()->id,
            ],
            [
                'name' 		=> 'Banner',
                'master_page_id'     => MasterPage::where('name','Políticas de Privacidad')->first()->id,
            ],
            [
                'name' 		=> 'Información',
                'master_page_id'     => MasterPage::where('name','Políticas de Privacidad')->first()->id,
            ],
        ]);
    }
}
