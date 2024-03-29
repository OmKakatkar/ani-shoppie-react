import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { AuthProvider } from './context/auth-context';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './context/product-context';

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<ProductProvider>
					<App />
				</ProductProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
