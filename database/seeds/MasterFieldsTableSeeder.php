<?php

use App\MasterPage;
use App\MasterSection;
use Illuminate\Database\Seeder;

class MasterFieldsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_fields')->insert([
            [
                'name' 		            => 'Imagen',
                'variable' 		        => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Cami')->where('master_page_id',MasterPage::where('name','Home')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Blog')->where('master_page_id',MasterPage::where('name','Home')->first()->id)->first()->id
            ],

            [
                'name' 		            => 'Fondo',
                'variable'              => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Cami')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Cami')->first()->id)->first()->id
            ],

            [
                'name' 		            => 'Fondo',
                'variable'              => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Contacto')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Contacto')->first()->id)->first()->id
            ],

            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Información')->where('master_page_id',MasterPage::where('name','Contacto')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Descripción',
                'variable' 		        => 'description',
                'type'                  => 'editor_small',
                'master_section_id'     => MasterSection::where('name','Información')->where('master_page_id',MasterPage::where('name','Contacto')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Imagen',
                'variable' 		        => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Información')->where('master_page_id',MasterPage::where('name','Contacto')->first()->id)->first()->id
            ],

            [
                'name' 		            => 'Fondo',
                'variable'              => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Blog')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Blog')->first()->id)->first()->id
            ],

            [
                'name' 		            => 'Fondo',
                'variable'              => 'background',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Suscríbete')->where('master_page_id',MasterPage::where('name','Blog')->first()->id)->first()->id
            ],

            [
                'name' 		            => 'Imagen',
                'variable'              => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Suscríbete')->where('master_page_id',MasterPage::where('name','Blog')->first()->id)->first()->id
            ],

            [
                'name' 		            => 'Fondo',
                'variable'              => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Testimoniales')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Testimoniales')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Conoce lo que dicen nuestros vecinos Líder')->where('master_page_id',MasterPage::where('name','Testimoniales')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Descripción',
                'variable' 		        => 'description',
                'type'                  => 'editor_small',
                'master_section_id'     => MasterSection::where('name','Conoce lo que dicen nuestros vecinos Líder')->where('master_page_id',MasterPage::where('name','Testimoniales')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Fondo',
                'variable'              => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Vende tu terreno')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Vende tu terreno')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Información')->where('master_page_id',MasterPage::where('name','Vende tu terreno')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Descripción',
                'variable' 		        => 'description',
                'type'                  => 'editor_small',
                'master_section_id'     => MasterSection::where('name','Información')->where('master_page_id',MasterPage::where('name','Vende tu terreno')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Imagen',
                'variable' 		        => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Información')->where('master_page_id',MasterPage::where('name','Vende tu terreno')->first()->id)->first()->id
            ],
            
            [
                'name' 		            => 'Fondo',
                'variable'              => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Trabaja con nosotros')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Trabaja con nosotros')->first()->id)->first()->id
            ],

            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Información')->where('master_page_id',MasterPage::where('name','Trabaja con nosotros')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Descripción',
                'variable' 		        => 'description',
                'type'                  => 'editor_small',
                'master_section_id'     => MasterSection::where('name','Información')->where('master_page_id',MasterPage::where('name','Trabaja con nosotros')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Imagen',
                'variable' 		        => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Información')->where('master_page_id',MasterPage::where('name','Trabaja con nosotros')->first()->id)->first()->id
            ],

            [
                'name' 		            => 'Fondo',
                'variable'              => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Términos y Condiciones')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Términos y Condiciones')->first()->id)->first()->id
            ],
            /*[
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Información')->where('master_page_id',MasterPage::where('name','Términos y Condiciones')->first()->id)->first()->id
            ],*/
            [
                'name' 		            => 'Descripción',
                'variable' 		        => 'description',
                'type'                  => 'editor_large',
                'master_section_id'     => MasterSection::where('name','Información')->where('master_page_id',MasterPage::where('name','Términos y Condiciones')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Fondo',
                'variable'              => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Proyectos')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Proyectos')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Fondo',
                'variable'              => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Nosotros')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Nosotros')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Fondo',
                'variable'              => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Cita Online')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Cita Online')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Información')->where('master_page_id',MasterPage::where('name','Cita Online')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Descripción',
                'variable' 		        => 'description',
                'type'                  => 'editor_small',
                'master_section_id'     => MasterSection::where('name','Información')->where('master_page_id',MasterPage::where('name','Cita Online')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Imagen',
                'variable' 		        => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Información')->where('master_page_id',MasterPage::where('name','Cita Online')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Fondo',
                'variable'              => 'image',
                'type'                  => 'image',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Políticas de Privacidad')->first()->id)->first()->id
            ],
            [
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Políticas de Privacidad')->first()->id)->first()->id
            ],
            /*[
                'name' 		            => 'Título',
                'variable' 		        => 'title',
                'type'                  => 'input',
                'master_section_id'     => MasterSection::where('name','Información')->where('master_page_id',MasterPage::where('name','Políticas de Privacidad')->first()->id)->first()->id
            ],*/
            [
                'name' 		            => 'Descripción',
                'variable' 		        => 'description',
                'type'                  => 'editor_large',
                'master_section_id'     => MasterSection::where('name','Información')->where('master_page_id',MasterPage::where('name','Políticas de Privacidad')->first()->id)->first()->id
            ],
        ]);
    }
}
