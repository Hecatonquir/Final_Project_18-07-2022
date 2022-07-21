import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import ContacUs from './Components/ContacUs';
import './App.css';
import Profile from './Components/Profile';
import AddEvent from './Components/AddEvent';
import Detail from './Components/Detail';
import Cart from './Components/Cart';


function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/contact' element={<ContacUs/>}/>
      <Route path='/createEvent' element={<AddEvent/>}/>
      <Route path='/details/id/:id' element={<Detail/>}/>
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
