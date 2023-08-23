import { AccountsService } from '../accounts.service';

describe('AccountsService', () => {
  let service: AccountsService;

  beforeEach(() => {
    service = new AccountsService();
  });

  it('should update account balance', () => {
    const accountId = '550e8400-e29b-41d4-a716-446655440000';
    service.updateAccountBalance(accountId, 100);
    expect(service.getAccountBalance(accountId)).toEqual(100);

    service.updateAccountBalance(accountId, 50);
    expect(service.getAccountBalance(accountId)).toEqual(150);
  });

  it('should return 0 for non-existent account', () => {
    expect(service.getAccountBalance('non-existent-id')).toEqual(0);
  });
});
