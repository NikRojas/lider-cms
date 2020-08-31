<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\ComplaintBook;
use Faker\Generator as Faker;
use App\MasterDocumentType;
use App\Ubigeo;
use App\MasterClaimType;
use App\MasterGoodContractedType;
use Illuminate\Support\Str;

$factory->define(ComplaintBook::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'lastname' => $faker->lastname,
        'email' => $faker->unique()->safeEmail,
        'document_number' => Str::random(8),
        'address' => $faker->address,
        'mobile' => $faker->randomNumber(9, false),
        'good_contracted_amount' => $faker->randomNumber(4, false),
        'good_contracted_description' => $faker->realText($maxNbChars = 15, $indexSize = 2),
        'claim_detail' => $faker->realText($maxNbChars = 15, $indexSize = 2),
        'claim_order' => $faker->realText($maxNbChars = 15, $indexSize = 2),
        'document_type_id' => $faker->randomElement(MasterDocumentType::pluck('id')->toArray()),
        'claim_type_id' => $faker->randomElement(MasterClaimType::pluck('id')->toArray()),
        'good_contracted_id' => $faker->randomElement(MasterGoodContractedType::pluck('id')->toArray()),
        'code_ubigeo' => $faker->randomElement(Ubigeo::pluck('code_ubigeo')->toArray()),
        'code' => $faker->randomNumber(9, false).date('Y')
    ];

            /*$table->string('code');
            $table->string('name');
            $table->string('lastname');
            $table->string('mobile');
            $table->string('email');
            $table->string('address');
            $table->string('document_number');
            $table->bigInteger('document_type_id')->unsigned();
            $table->foreign('document_type_id')->references('id')->on('master_documents_type');
            $table->string('code_ubigeo');
            $table->foreign('code_ubigeo')->references('code_ubigeo')->on('master_ubigeo');
            $table->string('good_contracted_amount');
            $table->text('good_contracted_description');

            $table->text('claim_detail');
            $table->text('claim_order');

            $table->text('provider_detail');

            $table->bigInteger('claim_type_id')->unsigned();
            $table->foreign('claim_type_id')->references('id')->on('master_documents_type');
            $table->bigInteger('good_contracted_id')->unsigned();
            $table->foreign('good_contracted_id')->references('id')->on('master_good_contracted_type');*/
});
