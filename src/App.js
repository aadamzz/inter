import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes/ColorModes';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from './Auth';
import LogIn from './components/LogIn';
import Register from './components/Register';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';

const Main = styled.main`
	width: 100vw;
	height: 100vh;
	background-color: ${({ theme: { body } }) => body};
	color: ${({ theme: { text } }) => text};
	transition: 0.5s;

	h1 {
		font-size: 50px;
		margin-bottom: 20px;
	}
`;

const Header = styled.header`
	width: 100vw;
	height: 75px;
	border-bottom: 1px solid ${({ theme: { border } }) => border};

	button { 
		padding: 10px;
		background-color: ${({ theme: { body } }) => body};
		color: ${({ theme: { text } }) => text};
		border: 2px solid ${({ theme: { reversedBorder } }) => reversedBorder};
		border-radius: 5px;
	}
`;

function App() {
	const [colorMode, setColorMode] = useState("dark");

	const toggleTheme = () => {
		colorMode === "dark" ? (setColorMode("light")) : (setColorMode("dark"))
	};

	return (
		<AuthProvider>
			<Router>
				<ThemeProvider theme={colorMode === "dark" ? darkTheme : lightTheme}>
					<Main>
						<Header>
							<button onClick={toggleTheme}>{toggleTheme === "dark" ? "Set Light Mode" : "Set Dark Mode"}</button>
						</Header>
						<Switch>
							{/* <Route exact path='/' component={Private} /> */}
							<PrivateRoute exact path='/' component={Home} />
							<Route exact path='/login' component={LogIn} />
							<Route exact path='/register' component={Register} />
						</Switch>
					</Main>
				</ThemeProvider>
			</Router>
		</AuthProvider>
	);
}

export default App;
