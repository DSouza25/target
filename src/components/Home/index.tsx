import './home.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/target-logo.png';




export default function Home(){

    const navigate = useNavigate();

    function goTo(option: number){
        switch (option) {
            case 1:
                navigate('/soma');
                break;
            case 2:
                navigate('/fibonacci');
                break;
            case 3:
                navigate('/faturamento');
                break;
            case 4:
                navigate('/estados');
                break;
            case 5:
                navigate('/inverter');
                break;
        }
    }

    return(
        <div className="homeContainer">
            <img src={logo} alt="logo target" />
            <h1>Avaliação técnica</h1>
            <div className='containerExercises'>
                <div className='exercise' onClick={()=>goTo(1)}>
                    <h2>Questão 1</h2>
                    <p>{"Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0; Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }Imprimir(SOMA); Ao final do processamento, qual será o valor da variável SOMA?"}</p>
                </div>
                <div className='exercise' onClick={()=>goTo(2)}>
                    <h2>Questão 2</h2>
                    <p>Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.</p>
                </div>
                <div className='exercise' onClick={()=>goTo(3)}>
                    <h2>Questão 3</h2>
                    <p>Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa que calcule e retorne:
                        <br/>• O menor valor de faturamento ocorrido em um dia do mês;
                        <br/>• O maior valor de faturamento ocorrido em um dia do mês;
                        <br/>• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
                    </p>
                </div>
                <div className='exercise' onClick={()=>goTo(4)}>
                    <h2>Questão 4</h2>
                    <p>Dado o valor de faturamento mensal de uma distribuidora, escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. </p>
                </div>
                <div className='exercise' onClick={()=>goTo(5)}>
                    <h2>Questão 5</h2>
                    <p>Escreva um programa que inverta os caracteres de um string.</p>
                </div>
            </div>
        </div>
    )
}