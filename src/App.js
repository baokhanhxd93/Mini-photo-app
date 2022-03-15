import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.scss'
import NotFound from './components/NotFound'
import Header from './components/Header'

const Photo = React.lazy(() => import("./features/Photo"))

function App() {
	return (
		<div className="photo-app">
			<Suspense fallback={<div>Loading...</div>}>
				<BrowserRouter>
					<Header />

					<Routes>
						<Route path="/" element={<Navigate replace to="/photos" />} />

						<Route path="/photos/*" element={<Photo />} />
						<Route element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</Suspense>
		</div>
	);
}

export default App;
