/* eslint-disable react/react-in-jsx-scope */

// import './App.css'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'

import Landing from './Landing.tsx';
import AgendaEdit from './AgendaEdit.tsx';
import Agendas from './Agendas.tsx';


const App = (): JSX.Element => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path='/agendas' element={<Agendas/>} />
        <Route path='/agenda/:Nombre' element={<AgendaEdit/>} />
    </Routes>
    </BrowserRouter>
  );
  
}

export default App;
