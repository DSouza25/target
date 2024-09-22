import './retorno.css';
import { useNavigate } from 'react-router-dom';

export default function Retorno(){
    const retorno = useNavigate();

    function retornar(){
        retorno('/');
    }

    return(
        <button className='btnRetorno' onClick={retornar}>Voltar à página inicial</button>
    )
}