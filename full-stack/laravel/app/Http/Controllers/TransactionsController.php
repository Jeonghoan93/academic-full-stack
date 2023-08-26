<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\TransactionsService;

use Ramsey\Uuid\Uuid;

class TransactionsController extends Controller {
    protected $transactionsService;

    public function __construct(TransactionsService $transactionsService) {
        $this->transactionsService = $transactionsService;
    }

    public function createTransaction(Request $request) {
        $validatedData = $request->validate([
            'account_id' => ['required', 'string', function ($attribute, $value, $fail) {
                if (!Uuid::isValid($value)) {
                    $fail('Invalid account ID');
                }
            }],
            'amount' => 'required|numeric',
        ]);

        $accountId = $validatedData['account_id'];
        $amount = $validatedData['amount'];

        $transaction = $this->transactionsService->createTransaction($accountId, $amount);

        return response()->json($transaction, 201);
    }

    public function getTransaction(string $transactionId) {
      $transaction = $this->transactionsService->getTransaction($transactionId);

      if (!$transaction) {
         return response()->json(['error' => "Transaction with ID {$transactionId} not found"], 404);
      }

      return response()->json($transaction, 200);
    }
}
