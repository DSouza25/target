import './faturamento.css';
import data from '../../services/dados.json';
import Retorno from '../Retorno';
import { useEffect, useState } from 'react';


export default function Faturamento(){
    const[maior, setMaior] = useState<number>();
    const[menor, setMenor] = useState<number>();
    const[quantDias, setQuantDias] = useState<number>();

    useEffect(()=>{
        processamento();
    })

    function processamento(){
        let maiorNum: number = 0;
        let menorNum: number = 0;
        let quant: number = 0;
        let media: number;
        let diasUteis: number = 0;
        let faturamentoTotal: number = 0;

        for (let index = 0; index < data.length; index++){
            if(data[index].valor != 0){
                diasUteis++;
                faturamentoTotal += data[index].valor;
            }
        }
        media = faturamentoTotal/diasUteis;

        for (let index = 0; index < data.length; index++) {
            if(index == 0){
                maiorNum = data[index].valor;
                menorNum = data[index].valor;
            }else{
                if(data[index].valor != 0){
                    if(data[index].valor >= maiorNum){ maiorNum = data[index].valor}
                    if(data[index].valor <= menorNum){ menorNum = data[index].valor}
                    if(data[index].valor >= media){
                        quant++;
                    }
                }
            }
            
        }
        setMaior(maiorNum);
        setMenor(menorNum);
        setQuantDias(quant);
    }

    return(
        <div className='contentQ3'>
            <div className='questao1'>
                <p>Dado o vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, nalinguagem que desejar, que calcule e retorne:</p>
                <ul>
                    <li>O menor valor de faturamento ocorrido em um dia do mês;</li>
                    <li>O maior valor de faturamento ocorrido em um dia do mês;</li>
                    <li>O número de dias no mês em que o valor de faturamento diário foi superior à média mensal.</li>
                </ul>
                <p>IMPORTANTE:</p>
                <ul className='warning'>
                    <li> Usar o json ou xml disponível como fonte dos dados do faturamento mensal;</li>
                    <li>Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;</li>
                </ul>
            </div>
            <div className='faturamento'>
                <div className='parametro'>
                    <p>Dia</p>
                    <p>Valor</p>
                </div>
                <div className='dias'>
                    {data.map(e=>{
                        return(
                            <div className='dia'>
                                <p>{e.dia}</p>
                                <p>{e.valor}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="containerResultados">
                <div className='result' title='O menor valor de faturamento ocorrido em um dia do mês'>
                    <p>Menor faturamento ($)</p>
                    <p className="valor">{menor?.toFixed(2)}</p>
                </div>
                <div className='result' title='O maior valor de faturamento ocorrido em um dia do mês'>
                    <p>Maior faturamento ($)</p>
                    <p className="valor">{maior?.toFixed(2)}</p>
                </div>
                <div className='result' title='O número de dias no mês em que o valor de faturamento diário foi superior à média mensal.'>
                    <p>Dias acima da média</p>
                    <p className="valor">{quantDias}</p>
                </div>
            </div>
            <Retorno/>
        </div>
    )
}