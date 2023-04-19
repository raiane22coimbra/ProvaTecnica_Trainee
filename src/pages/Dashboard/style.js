import styled from "styled-components";

export const Title = styled.h1`
  font-size: 38px;
  text-align: center;
  font-weight: bold;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Card = styled.div`
  width: 50%;
  /* height: 500px; */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

export const Button = styled.button`
  width: 20rem;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #0077b6;
  color: #fff;
  margin-top: 1rem;
  margin-left: 1rem;
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
`;
