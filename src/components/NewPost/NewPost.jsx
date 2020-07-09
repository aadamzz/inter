import React, { useState, useContext, createContext } from 'react';
import { AuthContext } from '../../Auth';
import WebcamTest from '../Webcam/Webcam';
import Gif from '../Gif/Gif';
import {
	Form,
	TextArea,
	ButtonsContainer,
	CurrentPhotoContainer,
	ImgContainer, CurrentPhoto,
	Figcaption,
	Picture,
	GifButton,
	PostBtn,
	ProfileImageButton
} from './NewPostStyles';

export const WebcamContext = createContext();

function NewPost() {
	const [postValue, setPostValue] = useState({
		"contents": ""
	});
	const [showCamera, setShowCamera] = useState(false);
	const { userEmail, imgSrc, setImgSrc, colorMode } = useContext(AuthContext);
	const [gif, setGif] = useState(false);

	const toggleCamera = () => {
		setShowCamera(!showCamera);
	}

	const handleNewPost = event => {
		event.preventDefault();
	}
	const sendNewPost = async () => {
		if (!postValue.contents) return;
		const config = {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				type: "posts",
				value: postValue,
				date: Date.now(),
				userEmail: userEmail,
				photo: imgSrc
			})
		}
		try {
			const request = await fetch('http://localhost:5000/post', config);
			const data = await request.json();
			console.log(data);
			setPostValue({ "contents": "" })
		} catch (error) {
			console.log(error)
		}
	}

	const profileTest = async () => {
		const config = {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				user: userEmail,
				photo: imgSrc,
				type: "profile_picture"
			})
		}
		try {
			const request = await fetch('http://localhost:5000/profile_picture', config)
			const data = await request.json()
			console.log(data)
		} catch (error) {
			error && console.log(error)
		}
	}

	return (
		<>
			<Form onClick={handleNewPost}>
				<TextArea placeholder="What's up?" name="contents" value={postValue.contents} onChange={event => setPostValue({ [event.currentTarget.name]: event.currentTarget.value })} />
			</Form>

			<ButtonsContainer>

				{
					imgSrc && (
						<CurrentPhotoContainer onClick={() => setImgSrc(null)}>
							<ImgContainer>
								<CurrentPhoto src={imgSrc} />
							</ImgContainer>
							<Figcaption>Current Photo</Figcaption>
							<ProfileImageButton onClick={profileTest}>set as profile photo</ProfileImageButton>
						</CurrentPhotoContainer>
					)
				}
				<Picture onClick={toggleCamera}>
					{
						colorMode === "dark" ? (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-camera" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#363537" fill="none" strokeLinecap="round" strokLinejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" />
							<path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
							<circle cx="12" cy="13" r="3" />
						</svg>) : (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-camera" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokLinejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" />
							<path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
							<circle cx="12" cy="13" r="3" />
						</svg>)
					}
				</Picture>
				<GifButton onClick={() => setGif(!gif)} >GIF</GifButton>

				{
					gif && <Gif />
				}

				<PostBtn type="submit" onClick={sendNewPost}>Post</PostBtn>
			</ButtonsContainer>

			{showCamera && (
				<WebcamContext.Provider value={{ showCamera }}>
					<WebcamTest />
				</WebcamContext.Provider>
			)
			}
		</>
	);
};

export default NewPost;
