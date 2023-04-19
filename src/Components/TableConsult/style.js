import styled from "styled-components";

export const Tabela = styled.table`
  width: 50%;
  height: 5rem;
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