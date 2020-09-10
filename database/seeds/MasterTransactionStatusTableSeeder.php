<?php

use Illuminate\Database\Seeder;

class MasterTransactionStatusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('master_transaction_status')->insert([
            [
                'name' 	=> 'Pendiente',
            ],
            [
                'name' 	=> 'Pagado',
            ],
            [
                'name' 	=> 'Rechazado',
            ],
            [
                'name' 	=> 'Reintegrado',
            ],
            [
                //Pago no terminado en el carrito
                'name' 	=> 'Anulado',
            ],
        ]);
    }
}
