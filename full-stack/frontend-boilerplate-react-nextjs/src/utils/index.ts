import axios from "axios";
const apiUrl = "http://localhost:3000";

export const isValidUUID = (uuid: string) => {
  const uuidPattern =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return uuidPattern.test(uuid);
};

export const submitTransaction = async (accountId: string, amount: number) => {
  return await axios.post(`${apiUrl}/transactions`, {
    account_id: accountId,
    amount,
  });
};
