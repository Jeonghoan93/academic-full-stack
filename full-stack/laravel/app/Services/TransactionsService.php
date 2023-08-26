<?php

namespace App\Services;

use App\Services\AccountsService;

use Illuminate\Support\Facades\Cache;

use InvalidArgumentException;

class TransactionsService {
    protected $accountsService;

    public function __construct(AccountsService $accountsService) {
        $this->accountsService = $accountsService;
    }

    public function createTransaction(string $accountId, float $amount) {
       if (!is_string($accountId) || !$accountId) {
            throw new InvalidArgumentException('Invalid account ID');
       }

       if (!is_numeric($amount)) {
            throw new InvalidArgumentException('Invalid amount');
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

       Cache::put("transaction_{$transactionId}", $transaction, now()->addHours(1));

       return $transaction;
    }

    public function getTransaction(string $transactionId) {
        return Cache::get("transaction_{$transactionId}");
    }
}
