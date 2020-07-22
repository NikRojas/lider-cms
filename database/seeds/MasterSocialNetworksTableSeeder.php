<?php

use Illuminate\Database\Seeder;

class MasterSocialNetworksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_social_networks')->insert([
            [
                'name' 		=> 'Facebook',
                'icon'     => 'facebook',
            ],
            [
                'name' 		=> 'Twitter',
                'icon'     => 'twitter',
            ],
            [
                'name' 		=> 'Whatsapp',
                'icon'     => 'whatsapp',
            ],
            [
                'name' 		=> 'Youtube',
                'icon'     => 'youtube',
            ],
            [
                'name' 		=> 'LinkedIn',
                'icon'     => 'linkedin',
            ],
            [
                'name' 		=> 'Instragram',
                'icon'     => 'instagram',
            ],
        ]);
    }
}
