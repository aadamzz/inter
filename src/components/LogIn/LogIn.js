import React, { useState, useCallback, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import app from '../../base';
import { AuthContext } from '../../Auth';
import Loader from '../Loader';
import { Container, Title, Form, Inputs, Errors, EachError, linkStyles } from './LogInStyles';

function LogIn({ history }) {
	const [errors, setErrors] = useState([]);
	const [loader, setLoader] = useState(() => false);

	const { currentUser } = useContext(AuthContext);

	const handleLogin = useCallback(
		async event => {
			event.preventDefault();
			setLoader(true);
			const { email, password } = event.target.elements;

			try {
				await app
					.auth()
					.signInWithEmailAndPassword(email.value, password.value);
				history.push("/");

			} catch (error) {

				if (!email.value.length && !password.value.length) {
					setErrors([...errors, "Email and password are required."]);
					setLoader(false);
					return;
				}

				if (!email.value.length) {
					setErrors([...errors, "Email is required."]);
					setLoader(false);
					return;
				}

				if (!password.value.length) {
					setErrors([...errors, "Password required"]);
					setLoader(false);
					return
				};

				if (error.message === "The email address is badly formatted.") {
					setErrors([...errors, "Email doesn't include @."]);
					setLoader(false);
					return;
				}
				if (error.message === "There is no user record corresponding to this identifier. The user may have been deleted.") {
					setErrors([...errors, "Email is incorrect."]);
					setLoader(false);
					console.log(error)
					return;
				}

				if (error.message === "The password is invalid or the user does not have a password.") {
					setErrors([...errors, "Password is incorrect"])
					setLoader(false);
					return;
				}
				setLoader(true);
			}
			setErrors([]);
		}, [history, errors]);

	if (currentUser) {
		return <Redirect to='/' />
	}

	if (loader) return <Loader />

	return (
		<Container>
			<Title>
				Log in to your account
         </Title>
			<Errors>
				{
					errors.map((error, index) => (
						<EachError animate={{ fontSize: 24 }} key={index}>{error}</EachError>
					))
				}
			</Errors>
			<Form onSubmit={handleLogin} noValidate>

				<label>Email address</label>
				<Inputs name="email" type="email" placeholder="example@mail.com" />

				<label>Password</label>
				<Inputs name="password" type="password" placeholder="password" />

				<button type="submit">Log in</button>
				<strong>Don't have an account? <Link to="/register" style={linkStyles}>Create and account</Link></strong>

			</Form>
		</Container>
	);
};

export default LogIn;
