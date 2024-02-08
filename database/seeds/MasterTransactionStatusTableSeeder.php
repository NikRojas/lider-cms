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
                //Para los pedidos con pagos capturados, el pago es reembolsado
                'name' 	=> 'Reintegrado',
            ],
            [
                //Para un pedido en el que aún no se ha capturado el pago, el estado del pago aparece como Anulado 
                'name' 	=> 'Anulado',
            ],
        ]);
    }
}
