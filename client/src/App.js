import {BrowserRouter, Route} from 'react-router-dom'
import Home from './Components/Home';


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Route path='/home' component={Home}/>
    </div>
  );
}

export default App;
