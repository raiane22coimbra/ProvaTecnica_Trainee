import { ButtonSaveSelect, CardModal, FormModal, SelectModal } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";
import ChangeServices from "../ChangeServices";

const Modal = ({
  idVeiculo,
  setShowModal,
  showModal,
  statusOptions,
  setVeiculos,
}) => {
  const [status, setStatus] = useState("");
  const [dataVeiculo, setDataVeiculo] = useState("");

  const handleSubmit = async () => {
    const statusUpdate = {
      status: status,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(statusUpdate)
    await axios.put(`http://localhost:5000/veiculos/${idVeiculo}`, statusUpdate, config)
      .then((response) => {
        console.log(response, "AAA");
        if (response.status === 204){
          showModal(!showModal) && <ChangeServices/>
        }
      })
      .catch((error) => console.log(error));
  };
  

  useEffect(() => {
    if (idVeiculo) {
      axios
        .get(`http://localhost:5000/veiculos/${idVeiculo}`, setDataVeiculo)
        .then((response) => {
          setDataVeiculo(response.data.status);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [idVeiculo]);

  return (
    <CardModal>
      <FormModal>
        <SelectModal
          name="status"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          {statusOptions.map((status) => (
            <option key={status.value} value={status.value}>
              {status.label}
            </option>
          ))}
        </SelectModal>
        <ButtonSaveSelect onClick={() => handleSubmit()}>
          Salvar
        </ButtonSaveSelect>
      </FormModal>
    </CardModal>
  );
};
export default Modal;
