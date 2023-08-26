<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\TransactionsService;

class TransactionsController extends Controller {
    protected $transactionsService;

    public function __construct(TransactionsService $transactionsService) {
        $this->transactionsService = $transactionsService;
    }

    public function createTransaction(Request $request) {
        $dto = $request->only(['account_id', 'amount']);

        return $this->transactionsService->createTransaction($dto['account_id'], $dto['amount']);
    }

    public function getTransaction($transactionId) {
      return $this->transactionsService->getTransaction($transactionId);
    }
}
