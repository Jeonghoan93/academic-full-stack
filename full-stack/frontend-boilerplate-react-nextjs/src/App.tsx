import { useState } from "react";

import { isValidUUID, submitTransaction } from "./utils";
import { Transaction } from "./types";
import { ErrorMessage } from "./components/ErrorMessage";
import { Input } from "./components/Input";
import { TransactionList } from "./components/TransactionList";

function App() {
  const [accountId, setAccountId] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async () => {
    if (!isValidUUID(accountId)) {
      setErrorMessage("Invalid account ID");
      return;
    }
    const newAmount = Number(amount);
    if (isNaN(newAmount)) {
      setErrorMessage("Invalid amount");
      return;
    }

    try {
      const response = await submitTransaction(accountId, newAmount);
      if (response.data.error) {
        setErrorMessage(response.data.error);
      } else {
        const newTransaction: Transaction = response.data;
        setTransactions([...transactions, newTransaction]);
        setErrorMessage("");
        setAccountId("");
        setAmount("");
      }
    } catch (error) {
      setErrorMessage("An error occurred.");
      console.error("Error submitting transaction:", error);
    }
  };

  return (
    <>
      <ErrorMessage message={errorMessage} />
      <div className="App">
        <div>
          <Input
            value={accountId}
            placeholder="Account ID"
            dataType="account-id"
            onChange={setAccountId}
          />
          <Input
            value={amount}
            placeholder="Amount"
            dataType="amount"
            onChange={setAmount}
          />
          <button
            data-type="transaction-submit"
            onClick={handleSubmit}
            type="button"
          >
            Submit Transaction
          </button>
        </div>
        <TransactionList transactions={transactions} />
      </div>
    </>
  );
}

export default App;
