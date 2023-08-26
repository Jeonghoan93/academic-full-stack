<?php

namespace Tests\Feature;

use Tests\TestCase;

class PingControllerTest extends TestCase {

    public function test_check_health() {
        $response = $this->get('/ping');

        $response->assertStatus(200);
        $response->assertSee('OK');
    }
}
