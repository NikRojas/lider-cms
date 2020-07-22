<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'full_name' => 'Anthony Tucto',
                'username' => 'atucto',
                'email' => 'anthony@playgroup.pe',
                'password' => bcrypt('Qwerty123'),
                'status' => 1,
                'role_id' => 1
            ],
            [
                'full_name' => 'Felipe Calixtro',
                'username' => 'fcalixtro',
                'email' => 'felipe@playgroup.pe',
                'password' => bcrypt('Qwerty123'),
                'status' => 1,
                'role_id' => 1
            ],
            [
                'full_name' => 'Luis Rojas',
                'username' => 'lrojas',
                'email' => 'luis@playgroup.pe',
                'password' => bcrypt('Qwerty123'),
                'status' => 1,
                'role_id' => 1
            ],
            [
                'full_name' => 'Roberto Maguiño',
                'username' => 'rmaguino',
                'email' => 'roberto@playgroup.pe',
                'password' => bcrypt('Qwerty123'),
                'status' => 1,
                'role_id' => 1
            ],
        ]);
    }
}
