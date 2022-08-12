import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import App from './App';

<<<<<<< HEAD
// this is conflict
=======
// this will be conflict
>>>>>>> 673a0488720da9ca2148972103d5d4d25134bf7f

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
