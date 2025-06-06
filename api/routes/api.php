<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\PurchaseHistoryController;
use App\Http\Controllers\AuthController;


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Por definir si esta ruta se queda o no
Route::controller(ProductController::class)->group(function(){
    Route::get('/products', 'index');
    Route::get('/products/{id}', 'show')->where('id', '[0-9]+');
});

// Rutas protegidas
Route::middleware('auth:sanctum')->group(function(){

    Route::controller(ProductController::class)->group(function(){
        Route::post('products', 'store');
        Route::put('/products/{id}', 'update');
        Route::delete('/products/{id}', 'destroy');
    });

    Route::controller(CartController::class)->group(function(){
        Route::get('/cart', 'index');
        Route::post('/cart/add', 'add');
        Route::put('/cart/{id}', 'update');
        Route::delete('/cart/{id}', 'remove');
        Route::post('/cart/checkout', 'checkout');
    });

    Route::controller(PurchaseHistoryController::class)->group(function (){
        Route::get('/purchases', 'index');
        Route::get('/purchases/{id}', 'show');
    });

});

Route::middleware(['auth:sanctum', 'admin'])->group(function (){
    Route::get('/admin/users', [AuthController::class, 'listUsers']);
});