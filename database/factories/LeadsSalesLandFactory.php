<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\LeadSaleLand;
use Faker\Generator as Faker;

$factory->define(LeadSaleLand::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'mobile' => $faker->randomNumber(9, false),
        'message' => 'Lorem ipsum dolor',
        'area' => $faker->randomFloat(2,0,200),
        'created_at' => $faker->dateTimeThisYear($max = 'now', $timezone = null)
    ];
});
