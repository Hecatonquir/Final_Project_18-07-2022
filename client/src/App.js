import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import ContacUs from './Components/ContacUs';

import logo from './logo.svg';
import './App.css';
import Profile from './Components/Profile';


function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
<<<<<<< HEAD
<<<<<<< HEAD
     
=======
      <Route path='/contact' element={<ContacUs/>}/>
       <Route path='/profile' element={<Profile/>}/>
>>>>>>> Development
=======
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/contact' element={<ContacUs/>}/>
>>>>>>> Development
      </Routes>
    </div>
  );
}

export default App;
