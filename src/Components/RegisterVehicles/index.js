import { RegisterSchema } from "../../Schemas/Schemas";
import axios from "axios";
import { useFormik } from "formik";
import {
  Card,
  SelectForm,
  ButtonSave,
  ButtonCancel,
  StyledForm,
  Input,
  AlignButton,
} from "./style";
const RegisterVehicles = () => {
  const Validation = useFormik({
    initialValues: {
      marca: "",
      modelo: "",
      placa: "",
      nome: "",
      contato: "",
      status: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      console.log(values);

      try {
        const response = await axios.post(
          "http://localhost:5000/veiculos/",
          values
        );
        if (response.status === 201) {
          alert("Veiculo Cadastrado com Sucesso!!");
        }
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  });

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

  return (
    <Card>
      <>
        <StyledForm onSubmit={Validation.handleSubmit}>
          <SelectForm
            name="marca"
            onChange={Validation.handleChange}
            value={Validation.values.marca}
          >
            <option name="choose">Informe a marca do veículo</option>
            <option name="marca"> Fiat </option>
            <option name="marca"> Citroen </option>
            <option name="marca">Peugeot</option>
            <option name="marca">Chevrolet</option>
          </SelectForm>
          <SelectForm
            name="modelo"
            onChange={Validation.handleChange}
            value={Validation.values.modelo}
          >
            <option name="choose">Informe o modelo do veículo</option>
            <option name="modelo"> Fiat </option>
            <option name="modelo"> Citroen </option>
            <option name="modelo">Peugeot</option>
            <option name="modelo">Chevrolet</option>
          </SelectForm>
          <Input
            name="placa"
            type="text"
            placeholder="Placa"
            onChange={Validation.handleChange}
            value={Validation.values.placa}
          ></Input>
          <Input
            name="nome"
            type="text"
            placeholder="Proprietário"
            onChange={Validation.handleChange}
            value={Validation.values.nome}
          ></Input>
          <Input
            name="contato"
            type="text"
            placeholder="WhatsApp"
            onChange={Validation.handleChange}
            value={Validation.values.contato}
          ></Input>
          <SelectForm
            name="status"
            onChange={Validation.handleChange}
            value={Validation.values.status}
          >
            {statusOptions.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </SelectForm>
          <AlignButton>
            <ButtonSave type="submit">Salvar</ButtonSave>
            <ButtonCancel type="submit">Cancelar</ButtonCancel>
          </AlignButton>
        </StyledForm>
      </>
    </Card>
  );
};

export default RegisterVehicles;
