<?php
namespace App\Http\Controllers\ClassRoom;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class MakeClassController extends Controller
{
    public function RuleClass() {
        return Inertia::render('ClassRoom/RuleClass');
    }

    public function GroupClass() {
        return Inertia::render('ClassRoom/GroupClass');
    }

    public function PrivateClass() {
        return Inertia::render('ClassRoom/PrivateClass');
    }

    public function WorkshopClass() {
        return Inertia::render('ClassRoom/WorkshopClass');
    }
}
