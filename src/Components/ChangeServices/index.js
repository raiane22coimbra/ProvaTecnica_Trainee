import axios from "axios";
import React, { useState, useEffect } from "react";
import { ButtonTable, Tabela } from "./style";
import Modal from "../Modal";

const ChangeServices = () => {
  const [veiculos, setVeiculos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [veiculoId, setVeiculoId] = useState("");
  const [statusInfo, setStatusInfo] = useState("")

  const handleClick = (veiculoid, statusInfo) => {
    setVeiculoId(veiculoid);
    setStatusInfo(statusInfo)
    setShowModal(!showModal);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/veiculos/")
      .then((response) => {
        setVeiculos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const statusOptions = [
    {
      value: "recebido",
      label: "Veiculo Recebido",
    },
    {
      value: "iniciado",
      label: "Serviço Iniciado",
    },
    {
      value: "aguardando",
      label: "Aguardando peça",
    },
    {
      value: "finalizado",
      label: "Serviço Finalizado",
    },
  ];

  const linhasTabela = veiculos.map((veiculo) => {
    const statusOption = statusOptions.find(option => option.value === veiculo.status);
    const statusLabel = statusOption ? statusOption.label : "N/A";
    
    return (
      <tr key={veiculo.id}>
        <td>{veiculo.placa}</td>
        <td>{veiculo.marca}</td>
        <td>{veiculo.modelo}</td>
        <td>{statusLabel}</td>
  
        <td>
          <ButtonTable type="submit" onClick={() => handleClick(veiculo.id, "statusInfo")}>
            Alterar Status
          </ButtonTable>
        </td>
      </tr>
    );
  });
  
  return (
    <>
      <Tabela>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{linhasTabela}</tbody>
      </Tabela>
      {showModal && (
        <Modal
          idVeiculo={veiculoId}
          setShowModal={setShowModal}
          showModal={showModal}
          statusOptions={statusOptions}
          setVeiculos={setVeiculos}
          infoStatus={statusInfo}
        />
      )}
    </>
  );
};
export default ChangeServices;
