import { TransactionsService } from '../transactions.service';
import { AccountsService } from '../../accounts/accounts.service';

describe('TransactionsService', () => {
  let service: TransactionsService;
  let accountsService: AccountsService;

  beforeEach(() => {
    accountsService = new AccountsService();
    service = new TransactionsService(accountsService);
  });

  it('should create a new transaction', () => {
    const accountId = '550e8400-e29b-41d4-a716-446655440000';
    const transaction = service.createTransaction(accountId, 100);

    expect(transaction.account_id).toEqual(accountId);
    expect(transaction.amount).toEqual(100);
    expect(transaction.balance).toEqual(100);
    expect(typeof transaction.transaction_id).toBe('string');
  });

  it('should throw an error for invalid account ID', () => {
    expect(() => {
      service.createTransaction(null, 100);
    }).toThrow('Invalid account ID');
  });

  it('should throw an error for invalid amount', () => {
    const accountId = '550e8400-e29b-41d4-a716-446655440000';
    expect(() => {
      service.createTransaction(accountId, NaN);
    }).toThrow('Invalid amount');
  });

  it('should retrieve an existing transaction', () => {
    const accountId = '550e8400-e29b-41d4-a716-446655440000';
    const createdTransaction = service.createTransaction(accountId, 100);
    const retrievedTransaction = service.getTransaction(
      createdTransaction.transaction_id,
    );

    expect(retrievedTransaction).toEqual(createdTransaction);
  });

  it('should return null for non-existent transaction', () => {
    expect(service.getTransaction('non-existent-id')).toBeNull();
  });
});
