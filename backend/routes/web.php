<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;

Route::get('/', function() {
    return 'Welcome to TheDailyDrive backend!';
});

Route::get('/testEmail', function () {
    Mail::raw('This is a test email from The Daily Drive!', function ($message) {
        $message->to('a.m.salinas1901@gmail.com')
                ->subject('Test Email');
    });
    return 'Test email sent successfully!';
});

Route::get('/reset-password/{token}', function ($token) {
    return view('app');
})->name('password.reset');

