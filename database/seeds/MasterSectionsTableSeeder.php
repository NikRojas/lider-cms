<?php

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
            #Home
            [
                'name' 		=> 'Banner',
                'master_page_id'     => 1,
            ],
            [
                'name' 		=> 'Know How',
                'master_page_id'     => 1,
            ],
            [
                'name' 		=> 'Blog',
                'master_page_id'     => 1,
            ],
            [
                'name' 		=> 'Contáctenos',
                'master_page_id'     => 1,
            ],
            #Blog
            [
                'name' 		=> 'Banner',
                'master_page_id'     => 5,
            ],
            #Trabaja con Nosotros
            [
                'name' 		=> 'Banner',
                'master_page_id'     => 8,
            ],
            #Conocenos
            [
                'name' 		=> 'Banner',
                'master_page_id'     => 6,
            ],
            [
                'name' 		=> 'Sobre Nosotros',
                'master_page_id'     => 6,
            ],
            [
                'name' 		=> '¿Qué hacemos?',
                'master_page_id'     => 6,
            ],
            [
                'name' 		=> '¿Hacia dónde apuntamos?',
                'master_page_id'     => 6,
            ],
            [
                'name' 		=> 'Premios',
                'master_page_id'     => 6,
            ],
            [
                'name' 		=> 'ADN',
                'master_page_id'     => 6,
            ],
            [
                'name' 		=> 'Políticas de Calidad',
                'master_page_id'     => 6,
            ],
            [
                'name' 		=> 'Ponle PLAY a la Felicidad',
                'master_page_id'     => 6,
            ],
            [
                'name' 		=> 'PLAY Experience',
                'master_page_id'     => 6,
            ],
            [
                'name' 		=> 'Players',
                'master_page_id'     => 6,
            ],
            [
                'name' 		=> 'Contáctenos',
                'master_page_id'     => 6,
            ],
            #SF
            [
                'name' 		=> 'Banner',
                'master_page_id'     => 2,
            ],
            [
                'name' 		=> 'Qué hacemos?',
                'master_page_id'     => 2,
            ],
            [
                'name' 		=> 'Casos de Éxito',
                'master_page_id'     => 2,
            ],
            [
                'name' 		=> 'Clientes',
                'master_page_id'     => 2,
            ],
            [
                'name' 		=> 'Contáctenos',
                'master_page_id'     => 2,
            ],
            #CH
            [
                'name' 		=> 'Banner',
                'master_page_id'     => 3,
            ],
            [
                'name' 		=> 'Qué hacemos?',
                'master_page_id'     => 3,
            ],
            [
                'name' 		=> 'Casos de Éxito',
                'master_page_id'     => 3,
            ],
            [
                'name' 		=> 'Clientes',
                'master_page_id'     => 3,
            ],
            [
                'name' 		=> 'Contáctenos',
                'master_page_id'     => 3,
            ],
            #DP
            [
                'name' 		=> 'Banner',
                'master_page_id'     => 4,
            ],
            [
                'name' 		=> 'Qué hacemos?',
                'master_page_id'     => 4,
            ],
            [
                'name' 		=> 'Casos de Éxito',
                'master_page_id'     => 4,
            ],
            [
                'name' 		=> 'Clientes',
                'master_page_id'     => 4,
            ],
            [
                'name' 		=> 'Contáctenos',
                'master_page_id'     => 4,
            ],
            #Politicas
            [
                'name' 		=> 'Banner',
                'master_page_id'     => 7,
            ],
            [
                'name' 		=> 'Información',
                'master_page_id'     => 7,
            ],
        ]);
    }
}
