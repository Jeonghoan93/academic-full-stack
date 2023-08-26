<?php

namespace Tests\Feature;

use Illuminate\Support\Facades\Cache;
use Tests\TestCase;

use Ramsey\Uuid\Uuid;

class AccountsControllerTest extends TestCase {
    public function test_get_account_balance() {
        $accountId = Uuid::uuid4()->toString();

        Cache::put($accountId, 500);

        $response = $this->get("/accounts/{$accountId}");

        $response->assertStatus(200);
        $response->assertJson([
            'account_id' => $accountId,
            'balance' => 500,
        ]);
    }
}
