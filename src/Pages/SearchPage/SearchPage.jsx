import './SearchPage.css'
import { Link } from 'react-router-dom';
import MusicIcon from "../../assets/music-icon.png"
import { useState } from 'react';
import MusicTrack from '../../Componentes/MusicTrack';
//import CapaAlbum from "../../assets/capa-album.png"
//import { FaPlayCircle } from "react-icons/fa";

function SearchPage() {
    //console.log(import.meta.env.VITE_API_KEY)

    const [Music, setMusic] = useState({ "title": "" })

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };

    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=julie%20and%20the%20phantoms', options)
        .then(response => response.json())
        .then(response => {
            for (var i = 0; i <= 10; i++) {
                const data = response.data[i]
                setMusic({
                    id: data.id,
                    title: data.title,
                    cover: data.album.cover_big,
                    artist: data.artist.name,
                    link: data.link,
                    preview: data.preview,
                });
            }
        })


    return (
        <div className="Search-page">
            <section className='title-page'>
                <div className='logo'>
                    <Link to="/"><img src={MusicIcon} /></Link>
                </div>
                <h2>Olá, seja bem-vindo ao <i>Melody</i> !</h2>
            </section>
            <div className='search'>
                <input type="text" placeholder="Busque por cantor, música ou álbum" />
                <button>Buscar</button>
            </div>
            <section className="tracks">
                <MusicTrack key={Music.id} title={Music.title} cover={Music.cover} artist={Music.artist} link={Music.link} preview={Music.preview} />
                {/* <MusicTrack /> */}
                {/* <div className="music-track">
                    <div className="capa">
                        <img src={CapaAlbum} alt="capa da música ou álbum" />
                    </div>
                    <div>
                        <section className="descricao">
                            <div className="infos">
                                <h3>Título</h3>
                                <p><i>Artista</i></p>
                                <a href="https://www.google.com.br/" target="_blank" rel="noopener noreferrer">Saiba mais</a>
                            </div>
                            <div className="play">
                                <FaPlayCircle />
                            </div>
                        </section>
                    </div>
                    {/* <div className="musica">
                        <audio controls src=""></audio>
                    </div> 
                </div>*/}

                {/*<div className="music-track">
                    <div className="capa">
                        <img src={CapaAlbum} alt="capa da música ou álbum" />
                    </div>
                    <div>
                        <section className="descricao">
                            <div className="infos">
                                <h3>Título</h3>
                                <p><i>Artista</i></p>
                                <a href="https://www.google.com.br/" target="_blank" rel="noopener noreferrer">Saiba mais</a>
                            </div>
                            <div className="play">
                                <FaPlayCircle />
                            </div>
                        </section>
                    </div>
                </div>

                <div className="music-track">
                    <div className="capa">
                        <img src={CapaAlbum} alt="capa da música ou álbum" />
                    </div>
                    <section className="descricao">
                        <div className="infos">
                            <h3>Título</h3>
                            <p><i>Artista</i></p>
                            <a href="#" target="_blank" rel="noopener noreferrer">Saiba mais</a>
                        </div>
                        <div className="play">
                            <FaPlayCircle />
                        </div>
                    </section>
                </div>*/}
            </section>
        </div>
    )
}

export default SearchPage