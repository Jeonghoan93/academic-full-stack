import styled from "styled-components";

export const AppWrapper = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorDiv = styled.div`
  color: red;
  padding: 10px;
  border-color: #f5c6cb;
  margin-bottom: 20px;
  border-radius: 5px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  margin: 10px 0;
  width: 100%;
`;

export const TransactionDiv = styled.div`
  padding: 15px;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  margin-top: 10px;
`;
