import styled from "styled-components";
import { FaFacebook } from 'react-icons/fa';
import { NavLink, Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: #64d0e3;
  height: 5rem;
`;
export const StyledLink = styled(Link)`
  width: 6rem;
  height: 2,5rem;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
  border-radius: 10px;
  font-size: 18px;
  margin-right: 2rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    /* background-color: #7AFAD4; */
  }
  font-size: 16px;

  /* &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed; */
`;
export const FacebookIcon = styled(FaFacebook)`
  font-size: 20px;
  color: #3b5998;
`;
