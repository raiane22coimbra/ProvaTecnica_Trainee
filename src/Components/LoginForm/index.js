import {
  Button,
  Card,
  Container,
  Form,
  Input,
  InputWrapper,
  Label,
  Title,
} from "./style";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/dashboard');
  };
  return (
    <>
      <Container>
        <Card>
          <Form>
            <Title>Login</Title>
            
              <Label htmlFor="email">Email</Label>
              <Input type="email" name="email" id="email"></Input>
            
              <Label htmlFor="email">Password</Label>
              <Input type="password" name="password" id="password"></Input>
            <Button type="submit" onClick={handleClick}> Entrar </Button>
          </Form>
        </Card>
      </Container>
    </>
  );
};
export default FormLogin;
