import { useState } from "react";
import Retorno from "../Retorno";
import "./fibonacci.css";

export default function Fibonacci() {
  const [num, setNum] = useState<any>();
  const [fibo, setFibo] = useState<Array<number>>([]);
  const [tem, setTem] = useState<boolean>(false);
  const [mostrarResultado, setMostrarResultado] = useState<boolean>();

  function verificarExistencia() {
    let inicial: number = 0;
    let incremento: number = 1;
    let atual: number = 0;
    let listaFibo: Array<number> = [0, 1];
    setTem(false);
    while (atual < num) {
      atual = inicial + incremento;
      listaFibo.push(atual);
      inicial = incremento;
      incremento = atual;
      setFibo(listaFibo);
    }
    fibo.forEach((element) => {
      if (element == num) {
        setTem(true);
      }
    });
    setMostrarResultado(true);
  }

  return (
    <div className="containerFibonacci">
      <div className="questao1">
        <p>
          Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo
          valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1,
          2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que
          desejar onde, informado um número, ele calcule a sequência de
          Fibonacci e retorne uma mensagem avisando se o número informado
          pertence ou não a sequência.
        </p>
      </div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="Digite um número"
        min={0}
      />
      <button className="verificar" onClick={verificarExistencia}>Verificar</button>
      <div className="sequencia">
        {fibo?.map((num) => {
          return <span>{num} </span>;
        })}
      </div>
      {mostrarResultado ? (
        <p className="resultado">{tem ? "Pertence à sequência" : "Não pertence à sequência"}</p>
      ) : (
        ""
      )}
      <Retorno />
    </div>
  );
}
