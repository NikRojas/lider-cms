<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Order;
use App\OrderDetail;
use App\Project;
use App\ProjectTypeDepartment;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(OrderDetail::class, function (Faker $faker) {
    $project = NULL;
    $project = Project::all()->random()->id;
    $projectTypeDepartment = ProjectTypeDepartment::where('project_id',$project)->get()->random()->id;
    $price = $faker->randomFloat($nbMaxDecimals = NULL, $min = 100, $max = 3000);
    $value = $faker->boolean($chanceOfGettingTrue = 50);
    if($value){
        $discount = $faker->randomFloat($nbMaxDecimals = NULL, $min = 10, $max = 200);
        $total = $price - $discount;
    }
    else{
        $discount = NULL;
        $total = $price;
    }
    return [
        'project_id' => $project,
        'project_type_department_id' => $projectTypeDepartment,
        'order_id' => $faker->randomElement(Order::pluck('id')->toArray()),
        'quantity' => 1,
        'price' => $price,
        'discount' => $discount,
        'total' => $total
    ];
});
