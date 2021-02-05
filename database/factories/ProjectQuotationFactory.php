<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Advisor;
use App\Project;
use App\ProjectQuotation;
use App\ProjectTypeDepartment;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(ProjectQuotation::class, function (Faker $faker) {
    $project = NULL;
    $project = Project::all()->random()->id;
    $projectTypeDepartment = ProjectTypeDepartment::where('project_id',$project)->get()->random()->id;
    $advisorId = Advisor::all()->random()->id;
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'document_number' => Str::random(8),
        'mobile' => $faker->randomNumber(9, false),
        'project_id' => $project,
        'advisor_id' => $advisorId,
        'project_type_department_id' => $projectTypeDepartment,
        'message' => $faker->realText($maxNbChars = 15, $indexSize = 2),
        'created_at' => $faker->dateTimeThisYear($max = 'now', $timezone = null)
    ];
});
