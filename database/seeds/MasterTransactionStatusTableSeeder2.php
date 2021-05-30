<?php

use Illuminate\Database\Seeder;

class MasterTransactionStatusTableSeeder2 extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //DB::table('master_transaction_status')->where('name', 'Anulado')->delete();
        DB::table('master_transaction_status')->where('name', 'Pendiente')->update(['value_status' => 'UNPAID' ,'value_detailed_status' => NULL]);
        DB::table('master_transaction_status')->where('name', 'Rechazado')->update(['value_status' => 'UNPAID' ,'value_detailed_status' => 'REFUSED']);
        DB::table('master_transaction_status')->where('name', 'Pagado')->update(['value_status' => 'PAID', 'value_detailed_status' => 'ACCEPTED']);
        DB::table('master_transaction_status')->where('name', 'Reintegrado')->update(['value_status' => 'UNPAID', 'value_detailed_status' => 'REFUNDED']);
        DB::table('master_transaction_status')->insert([
            [
                'name' 	=> 'Autorizado',
                'value_status' => 'PAID' ,'value_detailed_status' => 'AUTHORISED'
            ],
            [
                'name' 	=> 'Capturado',
                'value_status' => 'PAID' ,'value_detailed_status' => 'CAPTURED'
            ],
            [
                //Pago no terminado en el carrito
                'name' 	=> 'No Pagado',
                'value_status' => 'UNPAID' ,'value_detailed_status' => 'EXPIRED'
            ],
            [
                //Pago se cancelo antes de capturarse el monto podria ser UNPAID O PAID dependiendo si se pago
                'name' 	=> 'Cancelado',
                'value_status' => 'UNPAID',
                'value_detailed_status' => 'CANCELLED'
            ],
            [
                //Pago se cancelo antes de capturarse el monto
                'name' 	=> 'Error',
                'value_status' => 'UNPAID' ,'value_detailed_status' => 'ERROR'
            ],
        ]);
    }
}
