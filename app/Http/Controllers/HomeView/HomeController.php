<?php

namespace App\Http\Controllers\HomeView;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function HomeViewStudent() {
       return Inertia::render('HomeView/HomeViewStudent');
    }

    public function HomeViewTentor() {
       return Inertia::render('HomeView/HomeViewTentor');
    }  
}
