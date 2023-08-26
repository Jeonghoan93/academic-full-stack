<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\PingController;
use App\Http\Controllers\AccountsController;
use App\Http\Controllers\TransactionsController;

Route::get('/ping', [PingController::class, 'checkHealth']);
Route::get('/transactions/{transactionId}', [TransactionsController::class, 'getTransaction']);
Route::post('/transactions', [TransactionsController::class, 'createTransaction']);
Route::get('/accounts/{accountId}', [AccountsController::class, 'getAccountBalance']);
