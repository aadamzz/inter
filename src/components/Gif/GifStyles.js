import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    z-index: 2;
    grid-column: 1 / 4;
    grid-row: 3 / 4;
    margin-top: 30px;
`;

export const GifForm = styled.form`
   margin-top: 20px;
`;

export const GifContainer = styled.div`
    width: 300px;
    margin-top: 20px;
`;

export const GifImg = styled.img`
    width: 100%;
    max-height: 100%;
    border-radius: 5px;
    cursor: pointer;
`;

export const InputText = styled.input`
 ::placeholder {
        color: ${({ theme: { text } }) => text};
        font-size: 16px;
    }

    width: 230px;
    height: 40px;
    border: none;
    border: 1px solid ${({ theme: { border } }) => border};
    background-color: ${({ theme: { body } }) => body};
    border-radius: 5px;
    padding: 10px;
    cursor: inherit;
    color: ${({ theme: { text } }) => text};
    font-size: 16px;

    @media (max-width: 520px) {
		width: 170px;
	}
`;

export const Button = styled.button`
    width: 100px;
    height: 40px;
    font-size: 18px;
    color: ${({ theme: { text } }) => text};
    background-color: ${({ theme: { body } }) => body};
    border: 1px solid ${({ theme: { border } }) => border};
    border-radius: 5px;
    cursor: pointer;
    margin-left: 20px;
    
    @media (max-width: 520px) {
		width: 75px;
	}
`;