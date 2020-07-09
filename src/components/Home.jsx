import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Loader from './Loader';
import Header from './Header/Header';
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';

const Main = styled.main`
    max-width: 100vw;
    min-height: 100vh;
`;

function PrivateComponents() {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setLoader(false);
    }, [])

    if (loader) return <Loader />
    return (
        <Main>
            <Header />
            <NewPost />
            <Posts />
        </Main>
    );
};

export default PrivateComponents;
