import { useState } from "react";
import Retorno from "../Retorno";
import './inverter.css';

export default function Inverter(){
    const[stringIn, setStringIn] = useState<string>('');
    const[stringInvertida, setStringInvertida] = useState<Array<string>>();

    function inverterString(){
        let entrada: Array<string> = [];
        for (let index = 0; index <= stringIn.length; index++) {
           entrada.push(stringIn[stringIn.length - index]);
        }
        setStringInvertida(entrada);
        
    }

    return(
        <div className="contentQ5">
            <div className="questao1">
                <p>Escreva um programa que inverta os caracteres de um string.</p>
                <p>IMPORTANTE:</p>
                <ul className="warning">
                    <li>Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código</li>
                    <li>Evite usar funções prontas, como, por exemplo, reverse;</li>
                </ul>
            </div>
            <input className="inptEntrada" value={stringIn} onChange={e=>setStringIn(e.target.value)} type="text" placeholder="Digite sua string aqui" />
            <button className="btnVerificador" onClick={inverterString}>Clique aqui para inverter</button>
            <p className="stringInvertida">{stringInvertida?.map(e=>{
                return(
                    <span>{e}</span>
                )
            })}</p>
            <Retorno/>
        </div>
    )
}