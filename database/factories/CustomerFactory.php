<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Customer;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Customer::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'lastname' => $faker->lastname,
        'email' => $faker->unique()->safeEmail,
        'mobile' => $faker->randomNumber(9, false),
        'document_number' => $faker->randomNumber(8, false),
        'slug' => Str::random(12),
        'created_at' => $faker->dateTimeThisDecade($max = 'now', $timezone = null)
    ];
});
