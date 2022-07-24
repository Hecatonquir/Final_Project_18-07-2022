import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter} from "react-router-dom"
import store from '../src/Redux/Store/store';
import {Provider} from "react-redux"
import Auth0ProviderWithHistory from './Auth/auth0-provider-with-history';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
	<BrowserRouter>
	<Auth0ProviderWithHistory>
		<App />
		</Auth0ProviderWithHistory>
	</BrowserRouter>
	
	
	</Provider>
);

