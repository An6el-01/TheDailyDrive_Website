<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


Route::post('/register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api');
Route::get('/me', [AuthController::class, 'me'])->middleware('auth:api');

Route::get('/test', function () {
    return response()->json(['message' => 'API is working']);
});
