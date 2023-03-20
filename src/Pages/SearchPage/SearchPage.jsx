import './SearchPage.css'
import { Link } from 'react-router-dom';
import MusicIcon from "../../assets/music-icon.png"
import { useState } from 'react';
import axios from "axios";
//import CapaAlbum from "../../assets/capa-album.png"
//import { FaPlayCircle } from "react-icons/fa";

export default function SearchPage() {
    //console.log(import.meta.env.VITE_API_KEY)

    const [search, setSearch] = useState("")
    const handleChangeSearch = (e) => {
        setSearch(e.target.value)
    }

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
                let res = response.data.data
                for (var i = 0; i < res.length; i++) {
                    var numberMusic = i.toString()
                    let data = response.data.data[numberMusic]

                    function listarMusicas(dados) {
                        let main = document.querySelector(".music-track")
                        main.innerHTML += ` 
                        <div class="track-content">  
                                <div class="capa">
                                    <img src='${dados.album.cover_big}' alt="capa da música ou álbum" />
                                </div>
                                <div>
                                    <section class="descricao">
                                        <div class="infos">
                                            <h3>${dados.title}</h3>
                                            <p><i>${dados.artist.name}</i></p>
                                            <a href=${dados.link} target="_blank" rel="noopener noreferrer">Saiba mais</a>
                                        </div>
                                        <div class="player">
                                            <audio controls>
                                                <source src="${dados.preview}" type="audio/mpeg">
                                                Your browser does not support the audio tag.
                                            </audio>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                   
                `
                    }
                    listarMusicas(data)

                }
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
                <input type="text" placeholder="Busque por cantor, música ou álbum" value={search} onChange={(e) => handleChangeSearch(e)} />
                <button onClick={getMusics}>Buscar</button>
            </div>
            <section className="tracks">
                <div className="music-track">
                </div>
            </section>
        </div>
    )
}

// <div class="play">
                                    //     <FaPlayCircle />
                                    // </div>