<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Project;
use App\ProjectQuotation;
use App\ProjectTypeDepartment;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(ProjectQuotation::class, function (Faker $faker) {
    $project = NULL;
    $project = Project::all()->random()->id;
    $projectTypeDepartment = ProjectTypeDepartment::where('project_id',$project)->get()->random()->id;
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'document_number' => Str::random(8),
        'mobile' => $faker->randomNumber(9, false),
        'project_id' => $project,
        'project_type_department_id' => $projectTypeDepartment,
        'message' => $faker->realText($maxNbChars = 15, $indexSize = 2)
    ];
});
