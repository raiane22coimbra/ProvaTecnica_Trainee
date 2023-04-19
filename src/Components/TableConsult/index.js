import { Tabela } from "./style";

const TableConsult = ({dadosVeiculos}) => {
  return (
    <Tabela>
      <thead>
        <tr>
          <th>Placa</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {dadosVeiculos.map((veiculo) => (
          <tr key={veiculo.id}>
            <td>{veiculo.placa}</td>
            <td>{veiculo.marca}</td>
            <td>{veiculo.modelo}</td>
            <td>{veiculo.status}</td>
          </tr>
        ))}
      </tbody>
    </Tabela>
  );
};
export default TableConsult;
