import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import ContacUs from './Components/ContacUs';

import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<ContacUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
