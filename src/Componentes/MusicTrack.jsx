// import './SearchPage.css'
// import { Link } from 'react-router-dom';
// import MusicIcon from "../../assets/music-icon.png"
//import CapaAlbum from "../assets/capa-album.png"
import { FaPlayCircle } from "react-icons/fa";

function MusicTrack(props) {

    return (
        <div>
            <div className="music-track">
                <div className="capa">
                    <img src={props.cover} alt="capa da música ou álbum" />
                </div>
                <div>
                    <section className="descricao">
                        <div className="infos">
                            <h3>{props.title}</h3>
                            <p><i>{props.artist}</i></p>
                            <a href={props.linkSaibaMais} target="_blank" rel="noopener noreferrer">Saiba mais</a>
                        </div>
                        <div className="play">
                            <FaPlayCircle />
                        </div>
                    </section>
                </div>
                <div className="musica">
                    <audio controls src={props.preview}></audio>
                </div>
            </div>

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
                </div> */}
        </div>
    )
}

export default MusicTrack