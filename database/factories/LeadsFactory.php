<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Lead;
use Faker\Generator as Faker;

$factory->define(Lead::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'document_number' => $faker->randomNumber(8, false),
        'mobile' => $faker->randomNumber(9, false),
        'message' => $faker->realText($maxNbChars = 15, $indexSize = 2),
        'lead_source_id' => $faker->randomElement([1,2]),
        'created_at' => $faker->dateTimeThisYear($max = 'now', $timezone = null)
    ];
});
