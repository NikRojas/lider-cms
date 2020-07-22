<?php

use Illuminate\Database\Seeder;

class MasterModulesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_modules')->insert([
            [
                'name' 	=> 'Dashboard',
				'slug' 		=> 'dashboard',
				'parent' 	=> 0,
				'icon' 		=> 'fas fa-chart-bar',
                'index'    => 1
            ],

            [
                'name' 	=> 'Especialidades',
				'slug' 		=> 'especialidades',
				'parent' 	=> 0,
				'icon' 		=> 'fas fa-project-diagram',
                'index'    => 2
            ],

            [
                'name' 	=> 'Clientes',
				'slug' 		=> 'clientes',
				'parent' 	=> 0,
				'icon' 		=> 'fas fa-handshake',
                'index'    => 3
            ],

            [
                'name' 	=> 'Premios',
				'slug' 		=> 'premios',
				'parent' 	=> 0,
				'icon' 		=> 'fas fa-trophy',
                'index'    => 4
            ],

            [
                'name' 	=> 'Testimonios',
				'slug' 		=> 'testimonios',
				'parent' 	=> 0,
				'icon' 		=> 'fas fa-award',
                'index'    => 5
            ],

            [
                'name' 	=> 'Información',
				'slug' 		=> NULL,
				'parent' 	=> 0,
				'icon' 		=> 'fas fa-info',
                'index'    => 6
            ],
                [
                    'name' 	=> 'SEO',
                    'slug' 		=> 'informacion/seo',
                    'parent' 	=> 6,
                    'icon' 		=> NULL,
                    'index'    => 2
                ],

                [
                    'name' 	=> 'Inf. General & Socios',
                    'slug' 		=> 'informacion/general',
                    'parent' 	=> 6,
                    'icon' 		=> NULL,
                    'index'    => 1
                ],
                
                [
                    'name' 	=> 'Páginas',
                    'slug' 		=> 'informacion/paginas',
                    'parent' 	=> 6,
                    'icon' 		=> NULL,
                    'index'    => 3
                ],
                
                [
                    'name' 	=> 'Redes Sociales',
                    'slug' 		=> 'informacion/redes-sociales',
                    'parent' 	=> 6,
                    'icon' 		=> NULL,
                    'index'    => 5
                ],

            [
                'name' 	=> 'Players',
                'slug' 		=> 'players',
                'parent' 	=> 0,
                'icon' 		=> 'fas fa-ghost',
                'index'    => 7
            ],    

            [
                'name' 	=> 'Casos de Éxito',
                'slug' 		=> 'casos-de-exito',
                'parent' 	=> 0,
                'icon' 		=> 'fas fa-burn',
                'index'    => 8
            ], 
            
            [
                'name' 	=> 'Cooltura PLAY',
                'slug' 		=> NULL,
                'parent' 	=> 0,
                'icon' 		=> 'fas fa-hashtag',
                'index'    => 9
            ],   
                [
                    'name' 	=> 'Galería',
                    'slug' 		=> 'cooltura-play/galeria',
                    'parent' 	=> 13,
                    'icon' 		=> NULL,
                    'index'    => 1
                ],
                [
                    'name' 	=> 'ADN',
                    'slug' 		=> 'cooltura-play/adn',
                    'parent' 	=> 13,
                    'icon' 		=> NULL,
                    'index'    => 2
                ],

            [
                'name' 	=> 'Blog',
				'slug' 		=> NULL,
				'parent' 	=> 0,
				'icon' 		=> 'fas fa-newspaper',
                'index'    => 10
            ],
                [
                    'name' 	=> 'Posts',
                    'slug' 		=> 'blog/posts',
                    'parent' 	=> 16,
                    'icon' 		=> NULL,
                    'index'    => 1
                ],
                [
                    'name' 	=> 'Categorías',
                    'slug' 		=> 'blog/categorias',
                    'parent' 	=> 16,
                    'icon' 		=> NULL,
                    'index'    => 2
                ],

            [
                'name' 	=> 'Leads',
				'slug' 		=> 'leads',
				'parent' 	=> 0,
				'icon' 		=> 'fas fa-paper-plane',
                'index'    => 11
            ],

            [
                'name' 	=> 'Postulantes',
				'slug' 		=> 'postulantes',
				'parent' 	=> 0,
				'icon' 		=> 'fas fa-users',
                'index'    => 12
            ],


            [
                'name' 	=> 'Configuración',
				'slug' 		=> NULL,
				'parent' 	=> 0,
				'icon' 		=> 'fas fa-cogs',
                'index'    => 99
            ],
                [
                    'name' 	=> 'Usuarios',
                    'slug' 		=> 'configuracion/usuarios',
                    'parent' 	=> 21,
                    'icon' 		=> NULL,
                    'index'    => 1
                ],
                [
                    'name' 	=> 'Roles',
                    'slug' 		=> 'configuracion/roles',
                    'parent' 	=> 21,
                    'icon' 		=> NULL,
                    'index'    => 2
                ],
        ]); 
    }
}
