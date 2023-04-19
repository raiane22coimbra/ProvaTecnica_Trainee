import styled from "styled-components";

export const CardModal = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  transition: all 0.3s ease-in-out;
`;

export const FormModal = styled.form`
  width: 100%;
  display: flex;
`;
export const SelectModal = styled.select`
  width: 100%;
  padding: 10px;
  margin-top: 1rem;
  margin-left: 1rem;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
export const ButtonSaveSelect = styled.button`
  width: 50%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #5178f5;
  color: #fff;
  margin-top: 1rem;
  margin-left: 1rem;
  font-weight: bold;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;
