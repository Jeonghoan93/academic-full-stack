import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountsService {
  private accounts = new Map<string, number>();

  updateAccountBalance(accountId: string, amount: number) {
    const currentBalance = this.accounts.get(accountId) || 0;
    this.accounts.set(accountId, currentBalance + amount);
  }

  getAccountBalance(accountId: string): number {
    return this.accounts.get(accountId) || 0;
  }
}
