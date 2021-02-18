<?php

namespace App\Http\Controllers\Cms\Configuration;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class GeneralController extends Controller
{

    public function index()
    {
        return view("pages.configuration.general");
    }
}
