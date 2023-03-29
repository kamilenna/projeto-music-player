import './SearchPage.css'
import { Link } from 'react-router-dom';
import MusicIcon from "../../assets/music-icon.png"
import { useState } from 'react';
import axios from "axios";
import MusicCard from "../../componentes/MusicCard"
import NoResults from '../../componentes/NoResults';

export default function SearchPage() {

    const [music, setMusic] = useState([])
    const [search, setSearch] = useState("")


    const resultsNotFound = !music.length;
    const getMusics = async () => {
        const getResponse = await axios({
            method: 'GET',
            url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
            params: { q: search },
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        })
            .then(function (response) {
                let results = response.data.data
                setMusic(results)
            });
    }

    return (
        <div className="Search-page">
            <section className='title-page'>
                <div className='logo'>
                    <Link to="/"><img src={MusicIcon} /></Link>
                </div>
                <h2>Olá, seja bem-vindo ao <i>Melody</i> !</h2>
            </section>
            <div className='search'>
                <input type="text" placeholder="Busque por cantor, música ou álbum" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button onClick={getMusics}>Buscar</button>
            </div>
            <section className="tracks">
                <div className="music-track">
                    {music.map((m) => (<MusicCard key={m.id} title={m.title} cover={m.album.cover_big} artist={m.artist.name} link={m.link} preview={m.preview} />))}
                    {resultsNotFound && (
                        <NoResults />
                    )}
                </div>
            </section>
        </div>
    )
}