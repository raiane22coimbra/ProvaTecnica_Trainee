import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 15rem;
  flex-direction: row;
  justify-content: center;
  max-height: 100vh;
  margin-top: 2rem;
  margin-bottom: 5rem;
`;
export const CardForm = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
flex-direction: column;
`

export const FormConsult = styled.form`
display: flex;
width: 50%;
`
export const Input = styled.input`
  width: 75%;
  height: 1.5rem;
  padding: 10px;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-left: 1rem;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
`
export const ButtonConsult = styled.button`
  width: 25%;
  height: 2.8rem;
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
`