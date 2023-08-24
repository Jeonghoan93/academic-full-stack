import { ErrorDiv } from "../styles";

export const ErrorMessage = ({ message }: { message: string }) => {
  return message ? <ErrorDiv className="error">{message}</ErrorDiv> : null;
};
