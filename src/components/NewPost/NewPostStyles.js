import styled from 'styled-components';

export const Form = styled.form`
    width: 700px;
    margin: 40px auto;


	@media (max-width: 720px) {
		width: 500px;
	}

	@media (max-width: 520px) {
		width: 300px;
	}
`;

export const TextArea = styled.textarea`
    padding: 20px;
    color: black;
    box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.77);
    grid-column: 1 / 9;
    grid-row: 1 / 2;

    min-width: 100%;
    max-width: 100%;
    min-height: 230px;
    max-height: 230px;
    
    
    font-size: 20px;
    font-family: 'Arimo', sans-serif;
    border: none;
    border-radius: 10px;

    
    ::placeholder {
        font-size: 20px;
        color: black;
        font-family: 'Arimo', sans-serif;
    }
`;

export const ButtonsContainer = styled.div`
	width: 700px;
    margin: 50px auto;
    display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-row: repeat(3, 1fr);
    align-items: center;

	@media (max-width: 720px) {
		width: 500px;
	}

	@media (max-width: 520px) {
		width: 360px;
		margin: 30px auto;
	}
`;

export const CurrentPhotoContainer = styled.div`
	width: 230px;
	min-height: 173px;
	cursor: pointer;
	grid-column: 2 / 3;
	border-radius: 5px;
	margin-bottom: 30px;
`;

export const ImgContainer = styled.div`
	width: 230px;
	position: relative;

	&::before {
		content: "";
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 1;
		transition: 0.5s
	 }

	&:hover::before {
		content: "delete";
		display: block;
		position: absolute;
		text-align: center;
		width: 100%;
		height: 99%;
		background-color: black;
		z-index: 1;
		opacity: 0.5;
		font-size: 24px;
		border-radius: 5px;
	}
`;

export const CurrentPhoto = styled.img`
	width: 100%;
	height: auto;
	border-radius: 5px;
`;

export const Figcaption = styled.figcaption`
	font-size: 20px;
   margin-left: 10px;
   text-align: center;
   margin-top: 5px;
`;

export const Picture = styled.button`
	grid-column: 1 / 2;
    width: 100px;
    height: 50px;
    margin: 0 auto;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    font-size: 16px;
    font-family: 'Arimo', sans-serif;
    padding: 10px;
    background-color: ${({ theme: { reversedBody } }) => reversedBody};
    color: ${({ theme: { reversedText } }) => reversedText};
	display: flex;
	align-items: center;
	justify-content: center; 

	@media (max-width: 520px) {
		width: 70px;
	}
`;

export const GifButton = styled(Picture)`
	grid-column: 2 / 3;
`;

export const PostBtn = styled(Picture)`
    grid-column: 3 / 4;
`;

export const ProfileImageButton = styled.button`
	width: 150px;
    height: 50px;
    margin: 10px auto;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    font-size: 16px;
    font-family: 'Arimo', sans-serif;
    padding: 10px;
    background-color: ${({ theme: { reversedBody } }) => reversedBody};
    color: ${({ theme: { reversedText } }) => reversedText};
	display: flex;
	align-items: center;
	justify-content: center;
`;
