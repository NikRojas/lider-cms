<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Customer;
use App\Order;
use Faker\Generator as Faker;
use Illuminate\Support\Str;
use phpDocumentor\Reflection\Types\Null_;

$factory->define(Order::class, function (Faker $faker) {
    $value = $faker->boolean($chanceOfGettingTrue = 50);
    if($value){
        $proforma = Str::random(8);
    }
    else{
        $proforma = NULL;
    }
    return [
        'customer_id' => $faker->randomElement(Customer::pluck('id')->toArray()),
        'proforma_number' => $proforma,
        'total' => $faker->randomFloat($nbMaxDecimals = NULL, $min = 0, $max = 6500),
        'order_date' => $faker->dateTimeThisDecade($max = 'now', $timezone = null),
        'created_at' => $faker->dateTimeThisDecade($max = 'now', $timezone = null)
    ];
});
