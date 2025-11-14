<?php

use App\Http\Controllers\HomeView\HomeController;
use App\Http\Controllers\Notification\FonnteCOntroller;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Register\CreateMentorController;
use App\Http\Controllers\Register\RegisterController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/home-student', [HomeController::class, 'HomeViewStudent'])->name('home.student');
    Route::get('/home-tentor', [HomeController::class, 'HomeViewTentor'])->name('home.tentor');
});

Route::get('/student-register', [RegisterController::class, 'StudentRegister'])->name('student.register');
Route::get('/mentor-register', [RegisterController::class, 'MentorRegister'])->name('mentor.register');
Route::get('/send-wa', [FonnteCOntroller::class, 'send'])->name('send.wsa');

Route::post('/create-mentor', [CreateMentorController::class, 'store'])->name('create.mentor');

require __DIR__.'/auth.php';
