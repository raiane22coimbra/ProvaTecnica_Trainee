import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  width: 35rem;
  height: 25rem;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  background-color: #E1FAF7;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
  margin-top: 5rem;
  font-size: 38px;
  text-align: center;
`;
export const Input = styled.input`
  width: 20rem;
  padding: 10px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 10rem;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #0077b6;
  color: #fff;
  margin-top: 1rem;
  font-weight: bold;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
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
export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  
`;
