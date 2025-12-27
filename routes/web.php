<?php

use App\Http\Controllers\Admin\BestAdmin;
use App\Http\Controllers\ClassRoom\MakeClassController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Explore\ClassroomExploreController;
use App\Http\Controllers\HomeView\HomeController;
use App\Http\Controllers\Notification\FonnteCOntroller;
use App\Http\Controllers\Payment\CoursePaymentController;
use App\Http\Controllers\Payment\PaymentController;
use App\Http\Controllers\Profile\ProfileMentorController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Register\CreateMentorController;
use App\Http\Controllers\Register\CreateStudentController;
use App\Http\Controllers\Register\GoogleController;
use App\Http\Controllers\Register\RegisterController;
use App\Http\Controllers\Register\WaitVerificationController;
use App\Http\Controllers\Register\WhatsappVerificationCOntroller;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// ====== main Routings ======
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// ===== dashboard Routings ======
Route::get('/dashboard', [DashboardController::class, 'schedule_class'])
    ->middleware(['auth'])
    ->name('dashboard');

// ===== auth Routings ======

Route::get('/login/google', [GoogleController::class, 'redirectToGoogle'])->name('login.google');
Route::get('auth/google/callback', [GoogleController::class, 'handleGoogleCallback']);


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/home-student', [HomeController::class, 'HomeViewStudent'])->name('home.student');
    Route::get('/home-tentor', [HomeController::class, 'HomeViewTentor'])->name('home.tentor');
});

// ===== register Routings ======

Route::get('/student-register', [RegisterController::class, 'StudentRegister'])->name('student.register');
Route::get('/mentor-register', [RegisterController::class, 'MentorRegister'])->name('mentor.register');
Route::get('/send-wa', [FonnteCOntroller::class, 'send'])->name('send.wsa');

Route::post('/create-mentor', [CreateMentorController::class, 'store'])->name('create.mentor');
Route::post('/create-student', [CreateStudentController::class, 'store'])->name('create.student');
Route::get('/whatsapp-verification', [WhatsappVerificationCOntroller::class, 'SendWAVerification'])->name('send-wa');
Route::post('/whatsapp-verification', [WhatsappVerificationCOntroller::class, 'verifyOtp'])->name('verify-wa');
Route::get('/wait-verification', [WaitVerificationController::class, 'WaitVerification'])->name('wait-verification');

Route::post('/payment', [PaymentController::class, 'create'])->name('create-payment');
// Callback POST dari Midtrans (notification)
Route::post('/payment/callback', [PaymentController::class, 'callback'])->name('midtrans.callback');

Route::post('/checkout', [CoursePaymentController::class, 'store'])->name('checkout.store');
Route::get('/course-payment/{classroom_id}', [CoursePaymentController::class, 'Payment'])->name('course-payment');

// make classroom
Route::get('/group-classroom', [MakeClassController::class, 'GroupClass'])->name('group-class');
Route::get('/private-classroom', [MakeClassController::class, 'PrivateClass'])->name('private-class');
Route::get('/workshop-classroom', [MakeClassController::class, 'WorkshopClass'])->name('Workshop-class');
Route::get('/rule-classroom', [MakeClassController::class, 'RuleClass'])->name('rule-class');

// Explore Room
Route::get('/explore', [ClassroomExploreController::class, 'Explore'])->name('explore-class');
Route::post('/create-explore', [ClassroomExploreController::class, 'CreateExploreCLass'])->name('create-explore-class');

// Profile Mentor View
Route::get('/profile-mentor', [ProfileMentorController::class, 'ProfileMentorView'])->name('profile.mentor');
Route::put('/update-profile-mentor', [ProfileMentorController::class, 'UpdateProfile'])->name('update.profile.mentor');

// Route for admin
Route::get('/BestAdmin', [BestAdmin::class, 'BestAdmin']);
Route::put('update-status-mentor/{id}', [BestAdmin::class, 'UpdateMentorStatus'])->name('update.status.mentor');
Route::put('update-image-class/{classID}', [BestAdmin::class, 'UpdateImageClass'])->name('update.image.class');

require __DIR__.'/auth.php';

