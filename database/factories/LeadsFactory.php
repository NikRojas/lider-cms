<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Lead;
use Faker\Generator as Faker;

$factory->define(Lead::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'mobile' => $faker->randomNumber(9, false),
        'lead_source_id' => $faker->randomElement([1,2]),
        'created_at' => $faker->dateTimeThisYear($max = 'now', $timezone = null)
    ];
});
