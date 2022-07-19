import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home';


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
