import './SearchPage.css'
import { Link } from 'react-router-dom';
import MusicIcon from "../../assets/music-icon.png"
import CapaAlbum from "../../assets/capa-album.png"
import { FaPlayCircle } from "react-icons/fa";

function SearchPage() {

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
                <div className="music-track">
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
                    </div> */}
                </div>

                <div className="music-track">
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
                </div>
            </section>
        </div>
    )
}

export default SearchPage