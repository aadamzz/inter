import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.section`
    max-width: 500px;
    height: 600px;
    margin: 75px auto;
    display: grid;
    grid-template-columns: 30px 220px 220px 30px;
    grid-template-rows: 75px 350px 175px;
	justify-content: center;
`;

export const Title = styled.h1`
    grid-column: 2 / 4;
    grid-row: 1 / 2;
    display: flex;
    align-items: center;
    font-size: 26px;
    justify-content: center;
`;

export const Form = styled.form`
    grid-column: 2 / 4;
    grid-row: 2 / 3;
    display: flex;
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

export const Inputs = styled.input`

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

export const Errors = styled.ul`
    margin-top: -30px;
    grid-column: 2 / 4;
    grid-row: 3 / 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 22px;
`;

export const EachError = styled(motion.li)`
 	line-height: 40px;
`;

export const linkStyles = {
    textDecoration: "none",
    color: "#c44ed8"
}