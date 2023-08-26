<?php

namespace App\Services;

use App\Services\AccountsService;
use Illuminate\Support\Facades\Validator;

class TransactionsService {
    protected $accountsService;
    protected $transactions = [];

    public function __construct(AccountsService $accountsService) {
        $this->accountsService = $accountsService;
    }

    public function createTransaction($accountId, $amount) {
       if (!$accountId || !is_string($accountId)) {
           throw new \Exception('Invalid account id');
       }

       if (!$amount || !is_numeric($amount)) {
           throw new \Exception('Invalid amount');
       }

       $transactionId = "{$accountId}-" . now()->timestamp;

       $this->accountsService->updateAccountBalance($accountId, $amount);
       $balance = $this->accountsService->getAccountBalance($accountId);

       $transaction = [
        'transaction_id' => $transactionId,
        'account_id' => $accountId,
        'amount' => $amount,
        'balance' => $balance,
       ];

       $this->transactions[$transactionId] = $transaction;

       return $transaction;
    }

    public function getTransactions($transactionId) {
        return $this->transactions[$transactionId] ?? null;
    }
}
