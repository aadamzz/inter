import React, { useContext } from 'react';
import app from '../../base';
import { AuthContext } from '../../Auth';
import { Wrapper, Logout, ThemeSwitcher } from './HeaderStyles'

function Header() {
    const { colorMode, setColorMode } = useContext(AuthContext);


    const toggleTheme = () => {
        colorMode === "dark" ? (setColorMode("light")) : (setColorMode("dark"))
    };

    return (
        <Wrapper>
            <Logout onClick={() => app.auth().signOut()}>Log out</Logout>
            <ThemeSwitcher onClick={toggleTheme}>{colorMode === "dark" ? "Set Light Mode" : "Set Dark Mode"}</ThemeSwitcher>
        </Wrapper>
    );
};

export default Header;
