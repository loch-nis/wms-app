<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WareController;

Route::get('/', function () {
    return response()->noContent();
});

Route::prefix('api/wares')->name('wares.')
    //->middleware('auth') // todo middleware and login!
    ->group(function() {

    
    Route::get('/', [WareController::class, 'getAll'])->name('getAll');
    
    Route::get('/{barcode}', [WareController::class, 'getByBarcode'])->name('getByBarcode');
    
    Route::post('/', [WareController::class, 'store'])->name('store');
    
    Route::patch('/{barcode}', [WareController::class, 'updateQuantity'])
        ->name('updateQuantity');
    
    Route::delete('/{barcode}',[WareController::class, 'delete'])->name('destroy');

});
