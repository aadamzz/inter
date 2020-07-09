import React, { useState, useEffect } from 'react';
import Loader from '../PostsLoader';
import {
	PostsContainer,
	PostContainer,
	ImageWrapper,
	PostContentContainer,
	Username,
	Post,
	PostDate,
	PostImageContainer,
	PostImage
} from './PostsStyles'

const cutUsername = (email) => {
	const nameArray = [...email]
	const foundIndex = nameArray.findIndex(index => index === "@")
	return nameArray.slice(0, foundIndex)
}

function Posts() {
	const [postsLoader, setPostsLoader] = useState(true);
	const [postData, setPostData] = useState({ posts: [], profileImages: [] });

	const getPosts = async () => {
		try {
			const response = await fetch('http://localhost:5000/get');
			const data = await response.json();
			return data;
		} catch (error) {
			error && console.log(error)
		}
	}

	const testGetProfilePicture = async () => {
		try {
			const request = await fetch("http://localhost:5000/get_profile_picture")
			const data = await request.json()
			return data;
		} catch (error) {
			error && console.log(error)
		}
	}

	useEffect(() => {
		Promise.all([getPosts(), testGetProfilePicture()])
			.then(response => {
				const [posts, profileImages] = response
				setPostData({ posts: posts, profileImages: profileImages })
			})
			.then(setPostsLoader(false))
			.catch(error => console.log(error))
		return () => {
			setPostsLoader(true)
		}
	}, [])

	if (postsLoader) return <Loader />
	return (
		<PostsContainer>
			{
				postData.posts.map(({ value: { contents }, _id, date, userEmail, photo }) => (
					<PostContainer key={_id}>
						<ImageWrapper>
							{
								postData.profileImages.map(({ _id, photo, user }) => {
									if (user === userEmail) {
										return <img key={_id} src={photo} alt="profile" />
									}
								})
							}
						</ImageWrapper>
						<PostContentContainer>
							<Username>{cutUsername(userEmail)}</Username>
							<Post>{contents}</Post>
							{photo && <PostImageContainer><PostImage src={photo} alt={"post photo ", _id} /></PostImageContainer>}
							<PostDate>{new Date(date).toLocaleString()}</PostDate>
						</PostContentContainer>
					</PostContainer>
				))
			}
		</PostsContainer>
	);
};

export default Posts;
