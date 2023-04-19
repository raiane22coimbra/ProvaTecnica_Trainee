import { Container, StyledLink, Image, Button, FacebookIcon } from "./style";
import { useNavigate, Link } from "react-router-dom";

import Login from "../../pages/Login";

const NavBar = () => {
  // const handleClick = () => {
  //   window.location.replace("/login", <Login/>)
  // };
  return (
    <Container>
      <StyledLink to ="/">Home</StyledLink>
      <StyledLink to ="/login">Login</StyledLink>
    </Container>
  );
};
export default NavBar;
