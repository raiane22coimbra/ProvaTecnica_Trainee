import styled from "styled-components";

export const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
  font-family: Arial, sans-serif;
  font-size: 14px;
  margin-top: 2rem;
  margin-bottom: 20px;

  th,
  td {
    text-align: left;
    padding: 12px;
  }

  th {
    background-color: #f2f2f2;
    color: #333;
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #ddd;
  }
`;

export const ButtonTable = styled.button`
 width: 10rem;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #0077b6;
  color: #fff;
  margin-top: 1rem;
  font-weight: bold;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    background-color: #023e8a;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`
