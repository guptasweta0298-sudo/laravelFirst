<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;


Route::get('/', function () {
    return view('ragister');
});

Route::post('/register',[RegisterController::class,'registerStore'])->name('register');
