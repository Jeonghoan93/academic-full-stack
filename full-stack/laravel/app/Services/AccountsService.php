<?php

namespace App\Services;

class AccountsService {
    protected $accounts = [];

    public function updateAccountBalance($accountId, $amount) {
       if (!isset($this->accounts[$accountId])) {
        $this->accounts[$accountId] = 0;

        $this->accounts[$accountId] += $amount;
       }
    }

    public function getAccountBalance($accountId) {
        return $this->accounts[$accountId] ?? 0;
    }
}
