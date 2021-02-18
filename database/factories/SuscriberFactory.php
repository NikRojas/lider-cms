<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Suscriber;
use Faker\Generator as Faker;

$factory->define(Suscriber::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'created_at' => $faker->dateTimeThisDecade($max = 'now', $timezone = null)
    ];
});
