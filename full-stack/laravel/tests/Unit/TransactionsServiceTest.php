<?php

namespace Tests\Unit;

use App\Services\TransactionsService;
use App\Services\AccountsService;
use Illuminate\Support\Facades\Cache;
use Tests\TestCase;

use Ramsey\Uuid\Uuid;

class TransactionsServiceTest extends TestCase {

    public function test_create_transaction_valid_data() {
        $accountId = Uuid::uuid4()->toString();

        $accountsService = new AccountsService();
        $service = new TransactionsService($accountsService);

        $transaction = $service->createTransaction($accountId, 100);

        $this->assertEquals(100, $transaction['amount']);
        $this->assertEquals(100, $transaction['balance']);
    }

    public function test_get_transaction_valid() {
        $transactionId = Uuid::uuid4()->toString();

        Cache::put('transaction_' . $transactionId, ['transaction_id' => $transactionId], now()->addHours(1));
        $accountsService = new AccountsService();
        $service = new TransactionsService($accountsService);

        $transaction = $service->getTransaction($transactionId);

        $this->assertIsArray($transaction);
        $this->assertEquals($transactionId, $transaction['transaction_id']);
    }
}
