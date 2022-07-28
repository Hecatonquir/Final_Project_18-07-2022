import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';
import Profile from './Components/Profile';
import AddEvent from './Components/AddEvent';
import Detail from './Components/Detail';
import Cart from './Components/Cart';

import LogIn from './Components/logIn';
import Register from './Components/Register';
import About from './Components/AboutUs';
import Prepanel from './Components/verifyAdmin';
import PageNotFound from './Components/Page404';
import AdminPanel from './Components/AdminPanel';
import FormPartner from './Components/FormPartner';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/createEvent' element={<AddEvent />} />
				<Route path='/details/id/:id' element={<Detail />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/login' element={<LogIn />} />
				<Route path='/register' element={<Register />} />
				<Route path='/aboutUs' element={<About />} />
				<Route path='/controlPanel' element={<Prepanel />} />
				<Route path='*' element={<PageNotFound />} />
				<Route path='/welcomeA' element={<AdminPanel />} />
				<Route path='/reqPartner' element={<FormPartner />} />
			</Routes>
		</div>
	);
}

export default App;
