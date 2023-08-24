import { TransactionDiv } from "../styles";
import { Transaction } from "../types";

interface Props {
  transactions: Transaction[];
}

const TransactionList: React.FC<Props> = ({ transactions }) => {
  return (
    <div>
      <h2>
        {transactions.length === 0 ? "Please enter input" : "Transactions"}
      </h2>
      {transactions.map((transaction) => (
        <TransactionDiv
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
        </TransactionDiv>
      ))}
    </div>
  );
};

export default TransactionList;
