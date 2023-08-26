<?php

namespace App\Http\Controllers;

use App\Services\AccountsService;

class AccountsController extends Controller {
    protected $accountsService;

    public function __construct(AccountsService $accountsService) {
        $this->accountsService = $accountsService;
    }

    public function getAccountBalance(string $accountId) {
        $balance = $this->accountsService->getAccountBalance($accountId);

        return response()->json([
            'account_id' => $accountId,
            'balance' => $balance,
        ], 200);
    }
}
