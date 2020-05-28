import React, { useState, useCallback, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import app from '../base';
import { AuthContext } from '../Auth';
import useValidation from './customHooks/useValidation';
import Loader from './Loader';

const Container = styled.section`
    max-width: 500px;
    height: 600px;
    margin: 0 auto;
    margin-top: 75px;
    display: grid;
    grid-template-columns: 30px 220px 220px 30px;
    grid-template-rows: 75px 350px 175px;
`;

const Title = styled.h2`
    grid-column: 2 / 4;
    grid-row: 1 / 2;
    display: flex;
    align-items: center;
    font-size: 26px;
    justify-content: center;
`;

const Form = styled.form`
    grid-column: 2 / 4;
    grid-row: 2 / 3;
    /* border: 1px solid white; */
    display: flex;
    /* align-items: flex-start; */
    align-items: center;
    flex-direction: column;

    label {
        margin-bottom: 10px;
        font-size: 18px;
    }

    button {
        margin-bottom: 20px;
        padding: 10px;
        width: 195px;
        font-size: 18px;
        color: ${({ theme: { text } }) => text};
        background-color: ${({ theme: { body } }) => body};
        border: 1px solid ${({ theme: { border } }) => border};
        border-radius: 5px;
        cursor: pointer;
    }
`;

const Inputs = styled.input`

    ::placeholder {
        color: ${({ theme: { text } }) => text};
        font-size: 16px;
    }

    width: 195px;
    margin-bottom: 40px;
    border: none;
    border: 1px solid ${({ theme: { border } }) => border};
    background-color: ${({ theme: { body } }) => body};
    border-radius: 5px;
    padding: 10px;
    cursor: inherit;
    color: ${({ theme: { text } }) => text};
    font-size: 16px;
`;

const Errors = styled.ul`
    margin-top: -30px;
    grid-column: 2 / 4;
    grid-row: 3 / 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 22px;

    li {
        line-height: 40px;
    }
`;

const linkStyles = {
	textDecoration: "none",
	color: "#c44ed8"
}

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

				if(!email.value.length && !password.value.length) {
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
				// email.value = "";
				// password.value = "";
			}
			setErrors([]);
		}, [history]);

	if (currentUser) {
		return <Redirect to='/' />
	}

	if(loader) return <Loader />

	return (
		<Container>
			<Title>
				Log in to your account
         </Title>
			<Errors>
				{
					errors.map((error, index) => (
						<li key={index}>{error}</li>
					))
				}
			</Errors>
			<Form onSubmit={handleLogin} noValidate>

				<label>Email address</label>
				<Inputs name="email" type="email" placeholder="example@mail.com" />

				<label>Password</label>
				<Inputs name="password" type="password" placeholder="password" />

				<button type="submit">Log in</button>
				{/* login with google */}
				<strong>Don't have an account? <Link to="/register" style={linkStyles}>Create and account</Link></strong>

			</Form>
		</Container>
	);
};

export default LogIn;
