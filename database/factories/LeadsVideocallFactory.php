<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\LeadVideocall;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(LeadVideocall::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'mobile' => $faker->randomNumber(9, false),
        'document_number' => $faker->randomNumber(8, false),
        'schedule' => Str::random(16),
        'project_id' => 1,
        'advisor_id' => $faker->randomElement([null,1]),
        'created_at' => $faker->dateTimeThisYear($max = 'now', $timezone = null)
    ];
});
