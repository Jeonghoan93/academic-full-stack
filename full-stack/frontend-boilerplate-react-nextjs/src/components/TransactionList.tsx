import { Transaction } from "../types";

export const TransactionList = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  return (
    <div>
      <h2>Transactions</h2>
      {transactions.map((transaction) => (
        <div
          key={transaction.transaction_id}
          data-type="transaction"
          data-account-id={transaction.account_id}
          data-amount={transaction.amount}
          data-balance={transaction.balance}
        >
          <p>Transaction ID: {transaction.transaction_id}</p>
          <p>Account ID: {transaction.account_id}</p>
          <p>Amount: {transaction.amount}</p>
          <p>Balance: {transaction.balance}</p>
        </div>
      ))}
    </div>
  );
};
