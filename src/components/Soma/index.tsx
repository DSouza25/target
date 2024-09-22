import "./soma.css";
import { useState } from "react";
import Retorno from "../Retorno";

export default function Soma() {
  const [resultado, setResultado] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  function imprimir() {
    let indice: number = 13;
    let k: number = 0;
    let soma: number = 0;
    while (k < indice) {
      k++;
      soma += k;
    }
    setResultado(soma);
    setLoading(false);
  }

  return (
    <div className="contentQ1">
      <div className="questao1">
        <p>Observe o trecho de código abaixo:</p>
        <code>
          {"int indice = 13, soma = 0, k = 0;"} <br />
          {"Enquanto k < indice faça{k = k + 1; soma = soma + k;}"}
          <br />
          {"Imprimir(soma)"}
        </code>
        <p>Ao final do processamento, qual será o valor da variável SOMA?</p>
      </div>
      <button className="btnResult" onClick={imprimir}>
        Ver resultado
      </button>
      <h2>{loading ? "" : resultado}</h2>
      <Retorno />
    </div>
  );
}
