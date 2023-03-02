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
                    {/* <div className="musica">
                        <audio controls src=""></audio>
                    </div> */}
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