<?php

namespace App\Http\Controllers\Cms\Projects;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

use App\Http\Traits\CmsTrait;
//use App\Http\Requests\Cms\Content\SeoRequest;
//use App\MasterPage;

class ProjectsController extends Controller
{
    use CmsTrait;

    public function index(){
        return view("pages.projects.index");
    }
}