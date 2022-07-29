import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from '../src/Redux/Store/store';
import { Provider } from 'react-redux';
import Auth0ProviderWithHistory from './Auth/auth0-provider-with-history';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';

/* ------------ Configurations for Deploy ----------- */
import axios from 'axios';
/* import dotenv from 'dotenv';
dotenv.config(); */
axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001';
/* ------------ End of Deploy config ---------------- */

/* Intentando arreglar el logg in 2 (agregué REACT_APP_API) */

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<Auth0ProviderWithHistory>
				<ChakraProvider>
					<App />
				</ChakraProvider>
			</Auth0ProviderWithHistory>
		</BrowserRouter>
	</Provider>
);
