<?php
namespace App\Http\Controllers\ClassRoom;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MakeClassController extends Controller
{
    public function RuleClass() {
        return Inertia::render('ClassRoom/RuleClass');
    }

    public function GroupClass() {
        return Inertia::render('ClassRoom/GroupClass');
    }
}
