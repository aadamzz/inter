import React, { useState, useEffect } from 'react'
import Loader from './Loader';
import app from '../base';

function PrivateComponents() {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setLoader(false);
    }, [])

    if (loader) return <Loader />

    return (
        <div>
            <h1>This is home</h1>
            <button onClick={() => app.auth().signOut()}>Log out</button>
        </div>
    );
};

export default PrivateComponents;
