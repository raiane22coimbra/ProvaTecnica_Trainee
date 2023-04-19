import TableConsult from "../TableConsult";
import {
  ButtonConsult,
  Card,
  CardForm,
  Container,
  FirstCard,
  FormConsult,
  Input,
 
} from "./style";
import { useState, useEffect } from "react";
import axios from "axios";

const ConsultStatus = () => {
  const [placa, setPlaca] = useState("");
  const [dadosVeiculo, setDadosVeiculo] = useState(null);
  const [idVeiculo, setIdVeiculo] = useState("");

  const buscarVeiculo = async (event) => {
    event.preventDefault(); // previne o comportamento padrão do formulário
    console.log("aaa")
    try {
      const response = await axios.get(
        `http://localhost:5000/veiculos?placa=${placa}`
      );setIdVeiculo(response.data[1].id);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const buscarVeiculoPorId = async () => {
      if (idVeiculo) {
        try {
          const response = await axios.get(
            `http://localhost:5000/veiculos/${idVeiculo}`
          );
          setDadosVeiculo([response.data]);
        } catch (error) {
          console.error(error);
        }
      }
    };

    buscarVeiculoPorId();
  }, [idVeiculo]);

  return (
    <Container>
      <CardForm>
      <FormConsult onSubmit={buscarVeiculo}>
        <Input type="text" name="placa" placeholder="Placa" value={placa}
          onChange={(event) => setPlaca(event.target.value)}></Input>
        <ButtonConsult type="submit"> Consultar</ButtonConsult>
      </FormConsult>
      {dadosVeiculo && <TableConsult dadosVeiculos={dadosVeiculo} />}
      </CardForm>
    </Container>
  );
};
export default ConsultStatus;
