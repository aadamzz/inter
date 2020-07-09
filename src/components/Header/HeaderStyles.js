import styled from 'styled-components';

export const Wrapper = styled.header`
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
        margin-right: 30px;
    }
`;

export const Logout = styled.button`
    padding: 10px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.25s;
    background-color: ${({ theme: { reversedBody } }) => reversedBody};
    color: ${({ theme: { reversedText } }) => reversedText};

    &:hover {
        padding: 12px;
    }
`;

export const ThemeSwitcher = styled.button`
  padding: 10px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.25s;
    background-color: ${({ theme: { reversedBody } }) => reversedBody};
    color: ${({ theme: { reversedText } }) => reversedText};

    &:hover {
        padding: 12px;
    }
`;