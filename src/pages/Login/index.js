import FormLogin from "../../Components/LoginForm";
import NavBar from "../../Components/NavBar";
import SideBar from "../../Components/SideBar";
import { Button } from "./style";
import { useNavigate } from "react-router-dom";


const Login = () => {
 
  return (
    <>
      <NavBar>
      </NavBar>
      <FormLogin />
      <SideBar />
    </>
  );
};
export default Login;
