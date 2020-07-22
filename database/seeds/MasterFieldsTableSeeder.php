<?php

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
            #Home
            //Banner
            [
                'name' 		=> 'Video',
                'variable'     => 'video',
                'type'     => 'video',
                'master_section_id'     => 1
            ],
            [
                'name' 		=> 'Poster',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 1
            ],
            /*[
                'name' 		=> 'Imagen Responsive',
                'variable'     => 'image_responsive',
                'type'     => 'image',
                'master_section_id'     => 1
            ],*/
            //Know How
            [
                'name' 		=> 'Imagen',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 2
            ],
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 2
            ],
            [
                'name' 		=> 'Descripción',
                'variable' 		=> 'description',
                'type'     => 'editor_small',
                'master_section_id' => 2
            ],
            //Premios
            //Blog
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 3
            ],
            [
                'name' 		=> 'Descripción',
                'variable' 		=> 'description',
                'type'     => 'editor_small',
                'master_section_id' => 3
            ],
            //Contáctenos
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 4
            ],
            [
                'name' 		=> 'Descripción',
                'variable' 		=> 'description',
                'type'     => 'editor_small',
                'master_section_id' => 4
            ],
            [
                'name' 		=> 'Fondo',
                'variable'     => 'background',
                'type'     => 'image',
                'master_section_id'     => 4
            ],
            #Blog
            //Banner
            [
                'name' 		=> 'Banner',
                'variable'     => 'background',
                'type'     => 'image',
                'master_section_id'     => 5
            ],
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 5
            ],
            #Trabaja con Nosotros
            //Banner
            [
                'name' 		=> 'Banner',
                'variable'     => 'background',
                'type'     => 'image',
                'master_section_id'     => 6
            ],
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 6
            ],
            #Conocenos
            //Banner
            [
                'name' 		=> 'Fondo',
                'variable'     => 'background',
                'type'     => 'image',
                'master_section_id'     => 7
            ],
            [
                'name' 		=> 'Fondo Responsive',
                'variable'     => 'image_responsive',
                'type'     => 'image',
                'master_section_id'     => 7
            ],
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 7
            ],
            [
                'name' 		=> 'Descripción',
                'variable' 		=> 'description',
                'type'     => 'editor_small',
                'master_section_id' => 7
            ],
            //Sobre Nosotros
            [
                'name' 		=> 'Bot',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 8
            ],
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 8
            ],
            [
                'name' 		=> 'Descripción',
                'variable' 		=> 'description',
                'type'     => 'editor_small',
                'master_section_id' => 8
            ],
            //¿Qué hacemos?
            [
                'name' 		=> 'Imagen',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 9
            ],
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 9
            ],
            [
                'name' 		=> 'Descripción',
                'variable' 		=> 'description',
                'type'     => 'editor_small',
                'master_section_id' => 9
            ],
            //¿Hacia dónde apuntamos?
            [
                'name' 		=> 'Imagen',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 10
            ],
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 10
            ],
            [
                'name' 		=> 'Descripción',
                'variable' 		=> 'description',
                'type'     => 'editor_small',
                'master_section_id' => 10
            ],
            //Premios
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 11
            ],
            //ADN
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 12
            ],
            //Políticas de Calidad
            [
                'name' 		=> 'Imagen',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 13
            ],
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 13
            ],
            [
                'name' 		=> 'Descripción',
                'variable' 		=> 'description',
                'type'     => 'editor_small',
                'master_section_id' => 13
            ],
            [
                'name' 		=> 'Item 1',
                'variable' 		=> 'item_1',
                'type'     => 'editor_small',
                'master_section_id' => 13
            ],
            [
                'name' 		=> 'Item 2',
                'variable' 		=> 'item_2',
                'type'     => 'editor_small',
                'master_section_id' => 13
            ],
            [
                'name' 		=> 'Item 3',
                'variable' 		=> 'item_3',
                'type'     => 'editor_small',
                'master_section_id' => 13
            ],
            //Ponle PLAY a la Felicidad
            [
                'name' 		=> 'Logo',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 14
            ],
            [
                'name' 		=> 'Imagen Video',
                'variable'     => 'image_responsive',
                'type'     => 'image',
                'master_section_id'     => 14
            ],
            [
                'name' 		=> 'Youtube ID Video',
                'variable' 		=> 'link',
                'type'     => 'input',
                'master_section_id' => 14
            ],
            //PLAY Experience
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 15
            ],
            //Players
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 16
            ],
            //Contáctenos
            [
                'name' 		=> 'Fondo',
                'variable'     => 'background',
                'type'     => 'image',
                'master_section_id'     => 17
            ],
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 17
            ],
            [
                'name' 		=> 'Descripción',
                'variable' 		=> 'description',
                'type'     => 'editor_small',
                'master_section_id' => 17
            ],
            #SF
            //Banner
            [
                'name' 		=> 'Fondo',
                'variable'     => 'background',
                'type'     => 'image',
                'master_section_id'     => 18
            ],
            [
                'name' 		=> 'Gráfica',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 18
            ],
            //Qué hacemos?
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 19
            ],
            [
                'name' 		=> 'Descripción',
                'variable' 		=> 'description',
                'type'     => 'editor_small',
                'master_section_id' => 19
            ],
            [
                'name' 		=> 'Gráfica',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 19
            ],
            //Casos de Éxito
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 20
            ],
            //Clientes
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 21
            ],
            [
                'name' 		=> 'Imagen',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 21
            ],
            [
                'name' 		=> 'Imagen Responsive',
                'variable'     => 'image_responsive',
                'type'     => 'image',
                'master_section_id'     => 21
            ],
            //Contáctenos
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 22
            ],
            [
                'name' 		=> 'Descripción',
                'variable' 		=> 'description',
                'type'     => 'editor_small',
                'master_section_id' => 22
            ],
            [
                'name' 		=> 'Fondo',
                'variable'     => 'background',
                'type'     => 'image',
                'master_section_id'     => 22
            ],
            [
                'name' 		=> 'Bot',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 22
            ],
            [
                'name' 		=> 'Speech',
                'variable' 		=> 'speech',
                'type'     => 'input',
                'master_section_id' => 22
            ],
            
            #CH
            //Banner
            [
                'name' 		=> 'Fondo',
                'variable'     => 'background',
                'type'     => 'image',
                'master_section_id'     => 23
            ],
            [
                'name' 		=> 'Gráfica',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 23
            ],
            //Qué hacemos?
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 24
            ],
            [
                'name' 		=> 'Descripción',
                'variable' 		=> 'description',
                'type'     => 'editor_small',
                'master_section_id' => 24
            ],
            [
                'name' 		=> 'Gráfica',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 24
            ],
            //Casos de Éxito
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 25
            ],
            //Clientes
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 26
            ],
            [
                'name' 		=> 'Imagen',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 26
            ],
            [
                'name' 		=> 'Imagen Responsive',
                'variable'     => 'image_responsive',
                'type'     => 'image',
                'master_section_id'     => 26
            ],
            //Contáctenos
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 27
            ],
            [
                'name' 		=> 'Descripción',
                'variable' 		=> 'description',
                'type'     => 'editor_small',
                'master_section_id' => 27
            ],
            [
                'name' 		=> 'Fondo',
                'variable'     => 'background',
                'type'     => 'image',
                'master_section_id'     => 27
            ],
            [
                'name' 		=> 'Bot',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 27
            ],
            [
                'name' 		=> 'Speech',
                'variable' 		=> 'speech',
                'type'     => 'input',
                'master_section_id' => 27
            ],

            #DP
            //Banner
            [
                'name' 		=> 'Fondo',
                'variable'     => 'background',
                'type'     => 'image',
                'master_section_id'     => 28
            ],
            [
                'name' 		=> 'Gráfica',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 28
            ],
            //Qué hacemos?
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 29
            ],
            [
                'name' 		=> 'Descripción',
                'variable' 		=> 'description',
                'type'     => 'editor_small',
                'master_section_id' => 29
            ],
            [
                'name' 		=> 'Gráfica',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 29
            ],
            //Casos de Éxito
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 30
            ],
            //Clientes
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 31
            ],
            [
                'name' 		=> 'Imagen',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 31
            ],
            [
                'name' 		=> 'Imagen Responsive',
                'variable'     => 'image_responsive',
                'type'     => 'image',
                'master_section_id'     => 31
            ],
            //Contáctenos
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 32
            ],
            [
                'name' 		=> 'Descripción',
                'variable' 		=> 'description',
                'type'     => 'editor_small',
                'master_section_id' => 32
            ],
            [
                'name' 		=> 'Fondo',
                'variable'     => 'background',
                'type'     => 'image',
                'master_section_id'     => 32
            ],
            [
                'name' 		=> 'Bot',
                'variable'     => 'image',
                'type'     => 'image',
                'master_section_id'     => 32
            ],
            [
                'name' 		=> 'Speech',
                'variable' 		=> 'speech',
                'type'     => 'input',
                'master_section_id' => 32
            ],

            #Politicas
            //Banner
            [
                'name' 		=> 'Banner',
                'variable'     => 'background',
                'type'     => 'image',
                'master_section_id'     => 33
            ],
            [
                'name' 		=> 'Título',
                'variable' 		=> 'title',
                'type'     => 'input',
                'master_section_id' => 33
            ],
            //Informacion
            [
                'name' 		=> 'Descripción',
                'variable' 		=> 'description',
                'type'     => 'editor_large',
                'master_section_id' => 34
            ],
        ]);
    }
}
