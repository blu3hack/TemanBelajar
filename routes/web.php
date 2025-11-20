<?php

use App\Http\Controllers\HomeView\HomeController;
use App\Http\Controllers\Notification\FonnteCOntroller;
use App\Http\Controllers\Payment\CoursePaymentController;
use App\Http\Controllers\Payment\PaymentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Register\CreateMentorController;
use App\Http\Controllers\Register\CreateStudentController;
use App\Http\Controllers\Register\RegisterController;
use App\Http\Controllers\Register\WhatsappVerificationCOntroller;
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
Route::post('/create-student', [CreateStudentController::class, 'store'])->name('create.student');
Route::get('/whatsapp-verification', [WhatsappVerificationCOntroller::class, 'SendWAVerification'])->name('send-wa');
Route::post('/whatsapp-verification', [WhatsappVerificationCOntroller::class, 'verifyOtp'])->name('verify-wa');


Route::post('/payment', [PaymentController::class, 'create'])->name('create-payment');
Route::post('/payment/callback', [PaymentController::class, 'callback'])->name('callback-payment');
Route::get('/course-payment', [CoursePaymentController::class, 'Payment'])->name('course-payment');

require __DIR__.'/auth.php';
