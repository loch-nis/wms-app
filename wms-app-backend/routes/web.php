<?php

use App\Http\Controllers\HikeController;
use App\Http\Controllers\WareStatsController;
use Illuminate\Auth\Middleware\RedirectIfAuthenticated;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WareController;
use App\Http\Controllers\AuthController;

Route::get('/', function () {
    return response()->noContent();
});

Route::prefix('api')->middleware('api')->group(function() {

    Route::prefix('wares')->name('wares.')
        ->middleware('jwt.auth')
        ->group(function() {
        
        Route::get('/', [WareController::class, 'getAll'])->name('getAll');
        
        Route::get('/{barcode}', [WareController::class, 'getByBarcode'])->name('getByBarcode');
        
        Route::post('/', [WareController::class, 'store'])->name('store');
        
        Route::patch('/{barcode}', [WareController::class, 'updateQuantity'])
            ->name('updateQuantity');
        
        Route::delete('/{barcode}',[WareController::class, 'delete'])->name('destroy');
            
    });

    Route::prefix('stats')
        ->middleware('jwt.auth')
        ->group(function() {
            Route::get('/', [WareStatsController::class, 'index']);
        });

    Route::prefix('hikes')
        /* ->middleware('jwt.auth') */ // todo reinstate auth
        ->group(function() {
            Route::get('/', [HikeController::class, 'index']);
            Route::post('/', [HikeController::class, 'store']);
            Route::get('/{id}', [HikeController::class, 'show']);
        });

    Route::prefix('auth')
        ->middleware('api')
        ->group(function() {
        
        Route::middleware('guest.api')->group(function() {
            Route::post('login',[AuthController::class, 'login']);
            Route::post('register',[AuthController::class, 'register']);
        });

        Route::middleware('jwt.auth')->group(function() {
            Route::post('logout',[AuthController::class, 'logout']);
            Route::post('refresh',[AuthController::class, 'refresh']);
            Route::get('me',[AuthController::class, 'me']);
        });
    });

});