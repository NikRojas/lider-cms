<?php

use App\MasterPage;
use App\MasterSection;
use Illuminate\Database\Seeder;

class MasterPageAbrilTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_pages')->insert([
            [
                'name' 		=> 'Formulario sobre datos personales',
                'slug_es'     => 'formulario-datos-personales',
                'slug_en'     => 'personal-data-form',
                'title_es'     => 'Formulario sobre datos personales',
                'title_en'     => 'Personal data form',
                'index' => 13
            ],
        ]);

        DB::table('master_sections')->insert([
            [
                'name' 		=> 'Banner',
                'master_page_id'     => MasterPage::where('name','Formulario sobre datos personales')->first()->id,
            ],
            [
                'name' 		=> 'Información',
                'master_page_id'     => MasterPage::where('name','Formulario sobre datos personales')->first()->id,
            ],
            [
                'name' 		=> 'Archivos',
                'master_page_id'     => MasterPage::where('name','Formulario sobre datos personales')->first()->id,
            ],
        ]);
        DB::table('master_fields')->insert([
            [
                    'name' 		            => 'Fondo',
                    'variable'              => 'image',
                    'type'                  => 'image',
                    'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Formulario sobre datos personales')->first()->id)->first()->id
                ],
                [
                    'name' 		            => 'Título',
                    'variable' 		        => 'title',
                    'type'                  => 'input',
                    'master_section_id'     => MasterSection::where('name','Banner')->where('master_page_id',MasterPage::where('name','Formulario sobre datos personales')->first()->id)->first()->id
                ],
                [
                    'name' 		            => 'Descripción',
                    'variable' 		        => 'description',
                    'type'                  => 'editor_large',
                    'master_section_id'     => MasterSection::where('name','Información')->where('master_page_id',MasterPage::where('name','Formulario sobre datos personales')->first()->id)->first()->id
                ],
                [
                    'name' 		            => 'Lista de archivos',
                    'variable' 		        => 'files_pdfs_buttons',
                    'type'                  => 'multiplefiles_buttons',
                    'master_section_id'     => MasterSection::where('name','Archivos')->where('master_page_id',MasterPage::where('name','Formulario sobre datos personales')->first()->id)->first()->id
                ],
            ]); 
    }
}
