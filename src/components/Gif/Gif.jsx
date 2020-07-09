import React, { useState, useContext } from 'react'
import { Container, GifContainer, GifImg, GifForm, InputText, Button } from './GifStyles'
import { AuthContext } from '../../Auth';

const API_KEY = "sjMjEIfPDG1Fmg4DzZ27hHu6mQoJoLq4";

function Gif() {
    const [query, setQuery] = useState('');
    const [gifSrc, setGifSrc] = useState(null);
    const { setImgSrc } = useContext(AuthContext)

    const searchForGif = async () => {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=1&q=${query}`);
            const json = await response.json();
            const url = json.data[0].images.original.url;
            setGifSrc(url);
        } catch (error) {
            if (error) {
                console.log(error);
                return;
            }
        }
    }

    return (
        <Container>
            <GifForm onSubmit={event => event.preventDefault()}>
                <InputText type="text" value={query} onChange={event => setQuery(event.currentTarget.value)} />
                <Button onClick={searchForGif}>Search</Button>
            </GifForm>
            {
                query && (
                    <GifContainer>
                        <GifImg onClick={event => setImgSrc(event.currentTarget.src)} src={gifSrc} alt="" />
                    </GifContainer>
                )
            }
        </Container>
    )
}

export default Gif
