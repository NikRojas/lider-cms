<?php

namespace App\Http\Controllers\Cms\Content;

use App\Http\Controllers\Controller;
use App\Http\Traits\CmsTrait;

class AboutController extends Controller
{
    public function index()
    {
        return view("pages.content.about");
    }
}