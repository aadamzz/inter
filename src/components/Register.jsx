import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import app from '../base';
import Loader from './Loader';

const Container = styled.section`
    max-width: 500px;
    height: 600px;
    margin: 0 auto;
    margin-top: 75px;
    display: grid;
    grid-template-columns: 30px 220px 220px 30px;
    grid-template-rows: 75px 400px 125px;
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
        margin-bottom: 15px;
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
    grid-column: 2 / 4;
    grid-row: 3 / 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 22px;
    padding-top: 20px;
    text-align: center;

    li {
        line-height: 30px;
    }
`;

const linkStyles = {
    textDecoration: "none",
    color: "#c44ed8"
}

function Register({ history }) {
    const [errors, setErrors] = useState([]);
    const [loader, setLoader] = useState(false);

    const handleRegister = useCallback(async event => {
        event.preventDefault();
        setLoader(true);
        const { email, password, passwordConfirm } = event.target.elements;

        if (password.value !== passwordConfirm.value) {
            setErrors([...errors, "The passwords are not the same"]);
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
    }, [history]);

    if(loader) return <Loader />

    return (
        <Container>
            <Title>
                Create new account
            </Title>
            <Errors>
                {
                    errors.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))
                }
            </Errors>
            <Form onSubmit={handleRegister} noValidate>

                <label>Email address</label>
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
