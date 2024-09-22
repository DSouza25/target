import "./estados.css";
import { useEffect, useState } from "react";
import Retorno from "../Retorno/index";
type Faturamento = {
  estado: string;
  faturamento: number;
};
export default function Estados() {
  const [valorSelect, setValorSelect] = useState<number>(0);
  const [estadoSelecionado, setEstadoSelecionado] = useState<Faturamento>();
  const [faturamentoGeral, setFaturamentoGeral] = useState<number>(0);
  const [percentual, setPercentual] = useState<number>(0);

  useEffect(() => {
    calcularPercentual();
  });

  function calcularPercentual() {
    const dados: Array<Faturamento> = [
      { estado: "São Paulo", faturamento: 67836.43 },
      { estado: "Rio de Janeiro", faturamento: 36876.66 },
      { estado: "Minas Gerais", faturamento: 29229.88 },
      { estado: "Espírito Santo", faturamento: 27165.48 },
      { estado: "Outros", faturamento: 19849.53 },
    ];
    let resultado: number;
    let faturamentoTotal: number = 0;
    dados.forEach(element => {
        faturamentoTotal += element.faturamento;
    });
    setFaturamentoGeral(faturamentoTotal);
    resultado = 100*dados[valorSelect].faturamento/faturamentoTotal;
    setPercentual(resultado);
    setEstadoSelecionado(dados[valorSelect]);
  }

  return (
    <div className="contentQ4">
      <div className="questao1">
        <p>
          Dado o valor de faturamento mensal de uma distribuidora, detalhado por
          estado:
        </p>
        <ul>
          <li>SP ------ R$ 67.836,43</li>
          <li>RJ ------ R$ 36.678,66</li>
          <li>MG ----- R$ 29.229,88</li>
          <li>ES ------ R$ 27.165,48</li>
          <li>Outros -- R$ 19.849,53</li>
        </ul>
        <p>
          Escreva um programa na linguagem que desejar onde calcule o percentual
          de representação que cada estado teve dentro do valor total mensal da
          distribuidora.
        </p>
      </div>
      <select
        name="estados"
        id="estados"
        onChange={(e) => {
          setValorSelect(parseInt(e.target.value));
          calcularPercentual();
        }}
      >
        <option value={0}>São Paulo</option>
        <option value={1}>Rio de Janeiro</option>
        <option value={2}>Minas Gerais</option>
        <option value={3}>Espírito Santo</option>
        <option value={4}>Outros estados</option>
      </select>
      <div className="resultadosFaturamento">
          <p className="faturamentoGeral">Faturamento total: R$ {faturamentoGeral}</p>
          <p className="faturamentoParcial">{estadoSelecionado?.estado}: R${estadoSelecionado?.faturamento} ({percentual.toFixed(2)}%)<span style={{width: `${percentual}%`}} className="demonstrativoGrafico"></span></p>
      </div>
      <Retorno />
    </div>
  );
}
