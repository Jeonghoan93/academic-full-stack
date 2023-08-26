<?php

namespace Tests\Unit;

use App\Services\AccountsService;
use Illuminate\Support\Facades\Cache;
use Tests\TestCase;

use Ramsey\Uuid\Uuid;

class AccountsServiceTest extends TestCase {
    public function test_get_account_balance() {
        $accountId = Uuid::uuid4()->toString();

        Cache::put($accountId, 500);

        $service = new AccountsService();

        $balance = $service->getAccountBalance($accountId);

        $this->assertEquals(500, $balance);
    }

    public function test_update_account_balance() {
        $accountId = Uuid::uuid4()->toString();

        Cache::put($accountId, 500);
        $service = new AccountsService();

        $service->updateAccountBalance($accountId, 100);

        $balance = Cache::get($accountId);
        $this->assertEquals(600, $balance);
    }
}
