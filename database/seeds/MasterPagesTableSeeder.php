<?php

use Illuminate\Database\Seeder;

class MasterPagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $position = 0;
        DB::table('master_pages')->insert([
            [
                'name' 		=> 'Home',
                'slug_es'     => NULL,
                'slug_en'     => NULL,
                'title_es'     => 'Lider Inmobiliaria',
                'title_en'     => 'Lider Real State',
                'index' => $position++
            ],

            [
                'name' 		=> 'Nosotros',
                'slug_es'     => 'nosotros',
                'title_es'     => 'Nosotros',
                'slug_en'     => 'about-us',
                'title_en'     => 'About Us',
                'index' => $position++
            ],

            [
                'name' 		=> 'Proyectos',
                'slug_es'     => 'proyectos',
                'title_es'     => 'Proyectos',
                'slug_en'     => 'projects',
                'title_en'     => 'Projects',
                'index' => $position++
            ],

            [
                'name' 		=> 'Cita Online',
                'slug_es'     => 'cita-online',
                'title_es'     => 'Cita Online',
                'slug_en'     => 'appointment',
                'title_en'     => 'Appointment',
                'index' => $position++
            ],

            [
                'name' 		=> 'Separa tu Depa',
                'slug_es'     => 'separa-tu-depa',
                'title_es'     => 'Separa tu Depa',
                'slug_en'     => 'reserve-your-department',
                'title_en'     => 'Reserve your Department',
                'index' => $position++
            ],

            [
                'name' 		=> 'Cotiza aquí',
                'slug_es'     => 'cotiza-aqui',
                'title_es'     => 'Cotiza aquí',
                'slug_en'     => 'quote-here',
                'title_en'     => 'Quote here',
                'index' => $position++
            ],

            [
                'name' 		=> 'Cami',
                'slug_es'     => 'cami',
                'title_es'     => 'Cami',
                'slug_en'     => 'cami',
                'title_en'     => 'Cami',
                'index' => $position++
            ],
            

            [
                'name' 		=> 'Blog',
                'slug_es'     => 'blog',
                'title_es'     => 'Blog',
                'slug_en'     => 'blog',
                'title_en'     => 'Blog',
                'index' => $position++
            ],

            [
                'name' 		=> 'Contacto',
                'slug_es'     => 'contacto',
                'title_es'     => 'Contacto',
                'slug_en'     => 'contact-us',
                'title_en'     => 'Contact us',
                'index' => $position++
            ],

            [
                'name' 		=> 'Testimoniales',
                'slug_es'     => 'testimoniales',
                'title_es'     => 'Testimoniales',
                'slug_en'     => 'testimonials',
                'title_en'     => 'Testimonials',
                'index' => $position++
            ],

            [
                'name' 		=> 'Vende tu terreno',
                'slug_es'     => 'vende-tu-terreno',
                'title_es'     => 'Vender tu terreno',
                'slug_en'     => 'sell-your-land',
                'title_en'     => 'Sell your land',
                'index' => $position++
            ],

            [
                'name' 		=> 'Trabaja con nosotros',
                'slug_es'     => 'trabaja-con-nosotros',
                'title_es'     => 'Trabaja con nosotros',
                'slug_en'     => 'work-with-us',
                'title_en'     => 'Work with us',
                'index' => $position++
            ],

            [
                'name' 		=> 'Políticas de Privacidad',
                'slug_es'     => 'politicas-privacidad',
                'title_es'     => 'Políticas de Privacidad',
                'slug_en'     => 'privacy',
                'title_en'     => 'Privacy Policy',
                'index' => $position++
            ],
        ]);
    }
}
