import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import app from '../../base';
import Loader from '../Loader';
import { Container, Title, Form, Inputs, Errors, EachError, linkStyles } from './RegisterStyles';

function Register({ history }) {
    const [errors, setErrors] = useState([]);
    const [loader, setLoader] = useState(false);

    const handleRegister = useCallback(async event => {
        event.preventDefault();
        setLoader(true);
        const { email, password, passwordConfirm } = event.target.elements;
        if (password.value !== passwordConfirm.value) {
            setErrors([...errors, "The passwords are not the same"]);
            setLoader(false);
            return;
        }
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
            event.target.reset();
        } catch (error) {
            if (!email.value.length) {
                setErrors([...errors, "Email is required."]);
                setLoader(false);
                return;
            }

            if (error.message === "The email address is badly formatted.") {
                setErrors([...errors, "Email doesn't include @."]);
                setLoader(false);
                return;
            }

            if (!password.value.length) {
                setErrors([...errors, "Password required"]);
                setLoader(false);
                return;
            }

            if (password.value.length < 6) {
                setErrors([...errors, "Password length must be greater than 6"]);
                setLoader(false);
                return;
            }

            if (error.message === "The email address is already in use by another account.") {
                setErrors([...errors, "This email address is already in use by another account."]);
                setLoader(false);
                return;
            }
            setLoader(true);
        }
        setErrors([])
    }, [history, errors]);

    if (loader) return <Loader />
    return (
        <Container>
            <Title>
                Create new account
            </Title>
            <Errors>
                {
                    errors.map((error, index) => (
                        <EachError animate={{ fontSize: 24 }} key={index}>{error}</EachError>
                    ))
                }
            </Errors>
            <Form onSubmit={handleRegister} noValidate>

                <label>Email address <br /> (Will be used as your username) </label>
                <Inputs name="email" type="email" placeholder="example@mail.com" />

                <label>Password</label>
                <Inputs name="password" type="password" placeholder="password" />

                <label>Repeat password</label>
                <Inputs name="passwordConfirm" type="password" placeholder="password" />

                <button type="submit">Sign in</button>
                <strong>Have account yet? <Link to="/login" style={linkStyles}>Log in</Link></strong>
            </Form>
        </Container>
    );
};

export default Register;
