import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes/ColorModes';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from './Auth';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';

const Main = styled.main`
	min-height: 100vh;
	background-color: ${({ theme: { body } }) => body};
	color: ${({ theme: { text } }) => text};
	transition: 0.5s;
	position: relative;
	overflow: hidden;
`;


function App() {
	const { colorMode } = useContext(AuthContext)

	return (
		<Router>
			<ThemeProvider theme={colorMode === "dark" ? darkTheme : lightTheme}>
				<Main>
					<Switch>
						<PrivateRoute exact path='/' component={Home} />
						<Route exact path='/login' >
							<LogIn />
						</Route>
						<Route exact path='/register' component={Register} />
					</Switch>
				</Main>
			</ThemeProvider>
		</Router>
	);
}

export default App;
