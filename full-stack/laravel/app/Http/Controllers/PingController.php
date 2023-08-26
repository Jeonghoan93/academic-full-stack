<?php

namespace App\Http\Controllers;

class PingController extends Controller {
    public function checkHealth() {
        return response('OK', 200);
    }
}
