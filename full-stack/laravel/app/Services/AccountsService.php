<?php

namespace App\Services;

use Illuminate\Support\Facades\Cache;


class AccountsService {

    public function updateAccountBalance(string $accountId, float $amount): void {
        $currentBalance = $this->getAccountBalance($accountId);
        Cache::put($accountId, $currentBalance + $amount);
    }

    public function getAccountBalance(string $accountId): float {
        return Cache::get($accountId, 0);
    }
}
