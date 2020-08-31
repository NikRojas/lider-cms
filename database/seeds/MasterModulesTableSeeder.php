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
        $pConfiguracion = 29;
        $pBlog = 24;
        $position = 1;
        DB::table('master_modules')->insert([
            [
                'name' 	=> 'Dashboard',
				'slug' 		=> 'dashboard',
				'parent' 	=> NULL,
				'icon' 		=> 'pie-chart',
                'index'    => $position++
            ],
            [
                'name' 	=> 'Proyectos',
				'slug' 		=> 'proyectos',
				'parent' 	=> NULL,
				'icon' 		=> 'building',
                'index'    => $position++
            ],

            [
                'name' 	=> 'Ventas y Estad.',
				'slug' 		=> null,
				'parent' 	=> NULL,
				'icon' 		=> 'shopping-cart',
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
				'icon' 		=> 'magic',
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
                    'name' 	=> 'Estados del Proyecto',
                    'slug' 		=> 'administracion/estados-proyecto',
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
                    'name' 	=> 'Entidades Financieras',
                    'slug' 		=> 'administracion/entidades-financieras',
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
                'icon' 		=> 'pictures',
                'index'    => $position++
            ],
            [
                'name' 	=> 'Contenido',
				'slug' 		=> NULL,
				'parent' 	=> NULL,
				'icon' 		=> 'screen',
                'index'    => $position++
            ],
                [
                    'name' 	=> 'SEO',
                    'slug' 		=> 'contenido/seo',
                    'parent' 	=> $pContenido,
                    'icon' 		=> NULL,
                    'index'    => 1
                ],

                [
                    'name' 	=> 'Inf. General & Miembros',
                    'slug' 		=> 'contenido/informacion-general',
                    'parent' 	=> $pContenido,
                    'icon' 		=> NULL,
                    'index'    => 2
                ],
                
                [
                    'name' 	=> 'Contenido General',
                    'slug' 		=> 'contenido/contenido-general',
                    'parent' 	=> $pContenido,
                    'icon' 		=> NULL,
                    'index'    => 3
                ],
                
                [
                    'name' 	=> 'Redes Sociales',
                    'slug' 		=> 'contenido/redes-sociales',
                    'parent' 	=> $pContenido,
                    'icon' 		=> NULL,
                    'index'    => 4
                ],

            [
                'name' 	=> 'Leads',
                'slug' 		=> NULL,
                'parent' 	=> NULL,
                'icon' 		=> 'database',
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
                'icon' 		=> 'heart',
                'index'    => $position++
            ], 
            
            [
                'name' 	=> 'Testimoniales',
                'slug' 		=> 'testimoniales',
                'parent' 	=> NULL,
                'icon' 		=> 'id-card',
                'index'    => $position++
            ],

            [
                'name' 	=> 'Blog',
				'slug' 		=> NULL,
				'parent' 	=> NULL,
				'icon' 		=> 'newspaper',
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
				'icon' 		=> 'book',
                'index'    => $position++
            ],

            [
                'name' 	=> 'Libro de Reclamaciones',
				'slug' 		=> 'libro-reclamaciones',
				'parent' 	=> NULL,
				'icon' 		=> 'clipboard',
                'index'    => $position++
            ],

            [
                'name' 	=> 'Configuración',
				'slug' 		=> NULL,
				'parent' 	=> NULL,
				'icon' 		=> 'wrench',
                'index'    => $position++
            ],
                [
                    'name' 	=> 'Usuarios',
                    'slug' 		=> 'configuracion/usuarios',
                    'parent' 	=> $pConfiguracion,
                    'icon' 		=> NULL,
                    'index'    => 1
                ],
        ]); 
    }
}
