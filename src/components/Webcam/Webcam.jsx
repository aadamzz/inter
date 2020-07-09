import React, { useRef, useCallback, useContext } from 'react'
import Webcam from 'react-webcam'
import { AuthContext } from "../../Auth";
import { WebcamContext } from '../NewPost/NewPost';
import { videoConstraints, WebcamContainer, WebcamContainerVariant } from './WebcamStyles'

function WebcamTest() {
	const webcamRef = useRef(null);
	const { setImgSrc } = useContext(AuthContext);
	const { showCamera } = useContext(WebcamContext);

	const capture = useCallback(() => {
		const imageSrc = webcamRef.current.getScreenshot();
		setImgSrc(imageSrc);
	}, [webcamRef, setImgSrc]);

	return (
		<WebcamContainer
			variants={WebcamContainerVariant}
			initial="hidden"
			animate="visible"
			style={!showCamera ? { display: "none" } : { display: "block", marginBottom: "50px" }}
		>
			<Webcam
				audio={false}
				ref={webcamRef}
				screenshotFormat="image/jpeg"
				videoConstraints={videoConstraints}
				style={{ width: "100%", height: "auto", borderRadius: "20px", cursor: "pointer" }}
				onClick={capture}
			/>
		</WebcamContainer>
	);
};

export default WebcamTest
