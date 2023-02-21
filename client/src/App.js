/** @format */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import * as ROUTES from './constants/router';
import { Home, SectorsForm, SectorsList } from './components';
function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path={ROUTES.HOME} element={<Home />} />
					<Route path={ROUTES.SectorForm} element={<SectorsForm />} />
					<Route path={ROUTES.SavedSectors} element={<SectorsList />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
