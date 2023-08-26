<?php

namespace Tests\Feature;

use Illuminate\Support\Facades\Cache;
use Tests\TestCase;

use Ramsey\Uuid\Uuid;

class TransactionsControllerTest extends TestCase {

    public function test_create_transaction_with_valid_data() {
        $accountId = Uuid::uuid4()->toString();

        $data = [
            'account_id' => $accountId,
            'amount' => 100,
        ];

        $response = $this->postJson('/transactions', $data);

        $response->assertStatus(201);
        $response->assertJsonStructure([
            'transaction_id', 'account_id', 'amount', 'balance'
        ]);
    }

    public function test_create_transaction_with_invalid_data() {
        $data = [
            'account_id' => '',
            'amount' => 'invalid',
        ];

        $response = $this->postJson('/transactions', $data);

        $response->assertStatus(422); // Unprocessable Entity
    }

    public function test_get_transaction_exists() {
        $transactionId = Uuid::uuid4()->toString();

        Cache::put('transaction_' . $transactionId, ['transaction_id' => $transactionId], now()->addHours(1));

        $response = $this->get("/transactions/{$transactionId}");

        $response->assertStatus(200);
    }

    public function test_get_transaction_not_exists() {
        $response = $this->get('/transactions/invalid');

        $response->assertStatus(404);
    }
}
