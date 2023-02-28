//import './App.css'
import { Link } from 'react-router-dom';
import MusicIcon from "../../assets/music-icon.png"
import CapaAlbum from "../../assets/capa-album.png"
import { FaPlayCircle } from "react-icons/fa";

function SearchPage() {

    return (
        <div className="Search-page">
            <div>
                <Link to="/"><img src={MusicIcon} /></Link>
                <h2>Olá, seja bem-vindo ao <i>Melody</i></h2>
            </div>
            <div>
                <input type="text" placeholder="Busque por cantor, musica ou álbum" />
                <button>Buscar</button>
            </div>
            <section className="tracks">
                <div className="music-track">
                    <img src={CapaAlbum} alt="capa" />
                    <div>
                        <div className="descricao">
                            <h6>Título</h6>
                            <p><i>Artista</i></p>
                            <a href="#" target="_blank" rel="noopener noreferrer">Saiba mais</a>
                        </div>
                        <div className="play">
                            <FaPlayCircle />
                        </div>
                    </div>
                </div>

                <div className="music-track">
                    <img src={CapaAlbum} alt="capa" />
                    <div>
                        <div className="descricao">
                            <h6>Título</h6>
                            <p><i>Artista</i></p>
                            <a href="#" target="_blank" rel="noopener noreferrer">Saiba mais</a>
                        </div>
                        <div className="play">
                            <FaPlayCircle />
                        </div>
                    </div>
                </div>

                <div className="music-track">
                    <img src={CapaAlbum} alt="capa" />
                    <div>
                        <div className="descricao">
                            <h6>Título</h6>
                            <p><i>Artista</i></p>
                            <a href="#" target="_blank" rel="noopener noreferrer">Saiba mais</a>
                        </div>
                        <div className="play">
                            <FaPlayCircle />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SearchPage