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
        $pVentas = 3;
        $pAdmin = 6;
        $pContenido = 13;
        $pLeads = 18;
        $pConfiguracion = 28;
        $pBlog = 24;
        $position = 1;
        DB::table('master_modules')->insert([
            [
                'name' 	=> 'Dashboard',
				'slug' 		=> 'dashboard',
				'parent' 	=> NULL,
				'icon' 		=> 'fas fa-chart-bar',
                'index'    => $position++
            ],
            [
                'name' 	=> 'Proyectos',
				'slug' 		=> 'proyectos',
				'parent' 	=> NULL,
				'icon' 		=> 'fas fa-project-diagram',
                'index'    => $position++
            ],

            [
                'name' 	=> 'Ventas y Estadísticas',
				'slug' 		=> null,
				'parent' 	=> NULL,
				'icon' 		=> 'fas fa-handshake',
                'index'    => $position++
            ],  

                [
                    'name' 	=> 'Ventas',
                    'slug' 		=> 'ventas',
                    'parent' 	=> $pVentas,
                    'icon' 		=> NULL,
                    'index'    => $position++
                ],

                [
                    'name' 	=> 'Estadísticas',
                    'slug' 		=> 'estadisticas',
                    'parent' 	=> $pVentas,
                    'icon' 		=> NULL,
                    'index'    => $position++
                ],
            
            [
                'name' 	=> 'Administración',
				'slug' 		=> NULL,
				'parent' 	=> NULL,
				'icon' 		=> 'fas fa-award',
                'index'    => $position++
            ],
                [
                    'name' 	=> 'Tipo de Cambio',
                    'slug' 		=> 'administracion/tipo-cambio',
                    'parent' 	=> $pAdmin,
                    'icon' 		=> NULL,
                    'index'    => 1
                ],
                [
                    'name' 	=> 'Estado del Proyecto',
                    'slug' 		=> 'administracion/estado-proyecto',
                    'parent' 	=> $pAdmin,
                    'icon' 		=> NULL,
                    'index'    => 2
                ],
                [
                    'name' 	=> 'Asesores',
                    'slug' 		=> 'administracion/asesores',
                    'parent' 	=> $pAdmin,
                    'icon' 		=> NULL,
                    'index'    => 3
                ],
                [
                    'name' 	=> 'Entidad Financiera',
                    'slug' 		=> 'administracion/entidad-financiera',
                    'parent' 	=> $pAdmin,
                    'icon' 		=> NULL,
                    'index'    => 4
                ],
                [
                    'name' 	=> 'Características Proyectos',
                    'slug' 		=> 'administracion/caracteristicas-proyectos',
                    'parent' 	=> $pAdmin,
                    'icon' 		=> NULL,
                    'index'    => 5
                ],

            [
                'name' 	=> 'Slider',
                'slug' 		=> 'slider',
                'parent' 	=> NULL,
                'icon' 		=> 'fas fa-award',
                'index'    => $position++
            ],
            [
                'name' 	=> 'Contenido General',
				'slug' 		=> NULL,
				'parent' 	=> NULL,
				'icon' 		=> 'fas fa-info',
                'index'    => $position++
            ],
                [
                    'name' 	=> 'SEO',
                    'slug' 		=> 'contenido-general/seo',
                    'parent' 	=> $pContenido,
                    'icon' 		=> NULL,
                    'index'    => 1
                ],

                [
                    'name' 	=> 'Inf. General & Miembros',
                    'slug' 		=> 'contenido-general/general',
                    'parent' 	=> $pContenido,
                    'icon' 		=> NULL,
                    'index'    => 2
                ],
                
                [
                    'name' 	=> 'Contenido General',
                    'slug' 		=> 'contenido-general',
                    'parent' 	=> $pContenido,
                    'icon' 		=> NULL,
                    'index'    => 3
                ],
                
                [
                    'name' 	=> 'Redes Sociales',
                    'slug' 		=> 'contenido-general/redes-sociales',
                    'parent' 	=> $pContenido,
                    'icon' 		=> NULL,
                    'index'    => 4
                ],

            [
                'name' 	=> 'Leads',
                'slug' 		=> NULL,
                'parent' 	=> NULL,
                'icon' 		=> 'fas fa-info',
                'index'    => $position++
            ],
                [
                    'name' 	=> 'Tradicionales',
                    'slug' 		=> 'leads/tradicionales',
                    'parent' 	=> $pLeads,
                    'icon' 		=> NULL,
                    'index'    => 1
                ],

                [
                    'name' 	=> 'Cita Online',
                    'slug' 		=> 'leads/cita-online',
                    'parent' 	=> $pLeads,
                    'icon' 		=> NULL,
                    'index'    => 2
                ],

                [
                    'name' 	=> 'Venta Terreno',
                    'slug' 		=> 'leads/venta-terreno',
                    'parent' 	=> $pLeads,
                    'icon' 		=> NULL,
                    'index'    => 3
                ],

            [
                'name' 	=> 'Cami',
                'slug' 		=> 'cami',
                'parent' 	=> NULL,
                'icon' 		=> 'fas fa-burn',
                'index'    => $position++
            ], 
            
            [
                'name' 	=> 'Testimoniales',
                'slug' 		=> 'testimoniales',
                'parent' 	=> NULL,
                'icon' 		=> 'fas fa-award',
                'index'    => $position++
            ],

            [
                'name' 	=> 'Blog',
				'slug' 		=> NULL,
				'parent' 	=> NULL,
				'icon' 		=> 'fas fa-newspaper',
                'index'    => $position++
            ],
                [
                    'name' 	=> 'Posts',
                    'slug' 		=> 'blog/posts',
                    'parent' 	=> $pBlog,
                    'icon' 		=> NULL,
                    'index'    => 1
                ],
                [
                    'name' 	=> 'Categorías',
                    'slug' 		=> 'blog/categorias',
                    'parent' 	=> $pBlog,
                    'icon' 		=> NULL,
                    'index'    => 2
                ],

            [
                'name' 	=> 'Postulantes',
				'slug' 		=> 'postulantes',
				'parent' 	=> NULL,
				'icon' 		=> 'fas fa-users',
                'index'    => $position++
            ],

            [
                'name' 	=> 'Configuración',
				'slug' 		=> NULL,
				'parent' 	=> $pConfiguracion,
				'icon' 		=> 'fas fa-cogs',
                'index'    => $position++
            ],
                [
                    'name' 	=> 'Usuarios',
                    'slug' 		=> 'configuracion/usuarios',
                    'parent' 	=> 21,
                    'icon' 		=> NULL,
                    'index'    => 1
                ],
        ]); 
    }
}
