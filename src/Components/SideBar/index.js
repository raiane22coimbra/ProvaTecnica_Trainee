import { Container, Texto } from "./style";
import {  NavLink } from "react-router-dom";


const SideBar = () => {
  return (
    <Container>
        {/* <NavLink  activeClassName="is-active" to="/login">Login</NavLink>
        <NavLink  activeClassName="is-active" to="/sigup">Sig Up</NavLink> */}
        <Texto>Ola mundo</Texto>
    </Container>
  );
};
export default SideBar;