import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components//Home';
import Estados from './components//Estados';
import Fibonacci from './components//Fibonacci';
import Faturamento from './components//Faturamento';
import Inverter from './components//Inverter';
import Soma from './components//Soma';

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/estados' element={<Estados/>}/>
                <Route path='/fibonacci' element={<Fibonacci/>}/>
                <Route path='/faturamento' element={<Faturamento/>}/>
                <Route path='/inverter' element={<Inverter/>}/>
                <Route path='/soma' element={<Soma/>}/>
            </Routes>
        </BrowserRouter>
    )
}