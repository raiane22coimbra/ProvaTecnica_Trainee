import styled from "styled-components";

export const Card = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;
export const StyledForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
`;

export const SelectForm = styled.select`
  width: 80%;
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

export const Input = styled.input`
  width: 75%;
  padding: 10px;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-left: 1rem;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
`;
export const AlignButton = styled.div`
display: flex;
flex-direction: row;
width: 100%;
padding: 10px;
`
export const ButtonSave = styled.button`
  width: 50%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #5178F5;
  color: #fff;
  margin-top: 1rem;
  margin-left: 1rem;
  font-weight: bold;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;
export const ButtonCancel = styled.button`
  width: 50%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #FF3532;
  color: #fff;
  margin-top: 1rem;
  margin-left: 1rem;
  font-weight: bold;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;
