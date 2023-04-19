import ChangeServices from "../../Components/ChangeServices";
import NavBar from "../../Components/NavBar";
import RegisterVehicles from "../../Components/RegisterVehicles";
import { Button, Card, Container, Title } from "./style";
import { useState } from "react";

const Dashboard = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showTableVehicles, setShowTableVehicles] = useState(false);

  const handleClick = () => {
    setShowRegister(!showRegister);
  };
  const tableVhicles = () => {
    setShowTableVehicles(!showTableVehicles);
  };
  return (
    <>
      <NavBar />
      <Title>Gestão de Serviços</Title>
      <Container>
        <Card>
          <Button onClick={handleClick}>Cadastrar entrada de veículos</Button>
          <Button onClick={tableVhicles}>Alterar Status de Serviços</Button>
          {showRegister && !showTableVehicles && <RegisterVehicles />}
          {showTableVehicles && !showRegister && <ChangeServices/>}
        </Card>
      </Container>
    </>
  );
};

export default Dashboard;
