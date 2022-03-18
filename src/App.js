import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import productApi from './api/productApi';
import './App.scss';
import Header from './components/Header';
import NotFound from './components/NotFound';
import SignIn from './features/Auth/pages/SignIn';

const Photo = React.lazy(() => import("./features/Photo"))

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};
firebase.initializeApp(config);

function App() {
	const [productList, setProductList] = useState([])
	useEffect(() => {
		const fetchProductList = async () => {
			try {
				const params = {
					_page: 1,
					_limit: 10,
				}
				const response = await productApi.getAll(params)
				setProductList(response.data)
			} catch (error) {
				console.log('Failed to fetch product list: ', error)
			}
		}

		fetchProductList()
	}, []);

	// Handle firebase auth

	useEffect(() => {
		const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
			if (!user) {
				console.log('User is not logged in')
				return
			}

			console.log("Logged in user: ", user.displayName)

			const token = await user.getIdToken()
			console.log("Logged in user token: ", token)
    	});
		return () => unregisterAuthObserver();
	// Make sure we un-register Firebase observers when the component unmounts.
	}, [])

	return (
		<div className="photo-app">
			<Suspense fallback={<div>Loading...</div>}>
				<BrowserRouter>
					<Header />

					<Routes>
						<Route path="/" element={<Navigate replace to="/photos" />} />

						<Route path="/photos/*" element={<Photo />} />
						<Route path="/sign-in" element={<SignIn />} />
						<Route element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</Suspense>
		</div>
	);
}

export default App;
