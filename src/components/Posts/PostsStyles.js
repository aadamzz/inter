import styled from 'styled-components';

export const PostsContainer = styled.div`
section:last-child {
margin-bottom: 50px;
}
`;

export const PostContainer = styled.section`
    display: flex;
    align-items: center;
    width: 700px;
    min-height: 100px;
    margin: 0 auto;
    border: 1px solid ${({ theme: { text } }) => text};
    padding: 15px;
    font-size: 18px;
    border-radius: 10px;
	margin-bottom: 10px;

	@media (max-width: 720px) {
		width: 500px;
	}

	@media (max-width: 520px) {
		width: 350px;
	}
`;

export const ImageWrapper = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 520px) {
		width: 55px;
		height: 55px;
	}

    img {
        width: 100%;
        height: auto;
    }
`;

export const PostContentContainer = styled.div`
    max-width: 90%;
    height: auto;
    word-wrap: break-word;
    margin-left: 10px;

    p {
        max-width: 100%;
        height: auto;
    }
`;

export const Username = styled.h2`
	font-weight: bold;
	padding-bottom: 15px;
`;

export const Post = styled.p`
	padding-bottom: 15px;
	font-size: 20px;
`;

export const PostDate = styled.span`
	font-size: 14px;
`;

export const PostImageContainer = styled.div`
	width: 300px;
	height: auto;

	@media (max-width: 520px) {
		width: 250px;
	}
`;

export const PostImage = styled.img`
	width: 100%;
	height: auto;
	border-radius: 5px;
`;