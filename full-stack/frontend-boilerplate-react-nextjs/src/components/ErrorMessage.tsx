export const ErrorMessage = ({ message }: { message: string }) => {
  return message ? <div className="error">{message}</div> : null;
};
