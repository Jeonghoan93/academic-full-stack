import { BadRequestException, Injectable } from '@nestjs/common';
import { AccountsService } from '../accounts/accounts.service';

@Injectable()
export class TransactionsService {
  private transactions = new Map<string, any>();

  constructor(private accountsService: AccountsService) {}

  createTransaction(accountId: string, amount: number) {
    if (!accountId || typeof accountId !== 'string') {
      throw new BadRequestException('Invalid account ID');
    }

    if (isNaN(amount)) {
      throw new BadRequestException('Invalid amount');
    }

    const transactionId = `${accountId}-${Date.now()}`;

    this.accountsService.updateAccountBalance(accountId, amount);
    const balance = this.accountsService.getAccountBalance(accountId);

    const transaction = {
      transaction_id: transactionId,
      account_id: accountId,
      amount: amount,
      balance: balance,
    };

    this.transactions.set(transactionId, transaction);

    return transaction;
  }

  getTransaction(transactionId: string) {
    return this.transactions.get(transactionId) || null;
  }
}
