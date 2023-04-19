import ConsultStatus from "../../Components/ConsultStatus";
import NavBar from "../../Components/NavBar";
import SideBar from "../../Components/SideBar";
import { Title, Texto, Subtitle, Container, ColLeft, ColRight } from "./style";

const Home = () => {
  return (
    <>
      <NavBar />
      <Title>Bem-vindo ao Garagem Online</Title>
      <Texto>
        A GaragemOnline a maior plataforma de serviços mecânicos do Brasil.<br></br>
        Aqui você encontra os melhores serviços.
      </Texto>
      <Subtitle>Tipos de Serviços</Subtitle>
      <ConsultStatus/>
      <SideBar/>
    </>
  );
};

export default Home;
