import './SearchPage.css'
import { Link } from 'react-router-dom';
import MusicIcon from "../../assets/music-icon.png"
import { useState } from 'react';
import MusicTrack from '../../Componentes/MusicTrack';
//import axios from "axios";
//import CapaAlbum from "../../assets/capa-album.png"
//import { FaPlayCircle } from "react-icons/fa";

function SearchPage() {
    //console.log(import.meta.env.VITE_API_KEY)

    const [music, setMusic] = useState("")

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };

    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=taylorswift', options)
        .then(response => response.json())
        .then(response => {
            for (let i = 0; i <= 10; i++) {
                //var numberMusic = i.toString()
                //console.log(numberMusic)
                const data = response.data[10]
                setMusic({
                    id: data.id,
                    title: data.title,
                    cover: data.album.cover_big,
                    artist: data.artist.name,
                    linkSaibaMais: data.linkSaibaMais,
                    preview: data.preview,
                });
            }
        })

    // const options = {
    //     method: 'GET',
    //     url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    //     params: { q: 'eminem' },
    //     headers: {
    //         'X-RapidAPI-Key': '',
    //         'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    //     }
    // };

    // axios.request(options).then(function (response) {
    //     const data = response.data[0]
    //     console.log(data)
    //     setMusic({
    //         id: data.id,
    //         title: data.title,
    //         cover: data.cover_big,
    //         artist: data.artist,
    //         link: data.link,
    //         preview: data.preview,
    //     });
    // }).catch(function (error) {
    //     console.error(error);
    // });


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
                <MusicTrack key={music.id} title={music.title} cover={music.cover} artist={music.artist} linkSaibaMais={music.linkSaibaMais} preview={music.preview} />
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