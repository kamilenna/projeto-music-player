import '../Pages/SearchPage/SearchPage.css'
import { FaPlayCircle } from "react-icons/fa";

export default function MusicCard(props) {

    return (
        <div className="track-content">
            <div className="capa">
                <img src={props.cover} alt="capa da música ou álbum" />
            </div>
            <div>
                <section className="descricao">
                    <div className="infos">
                        <h3>{props.title}</h3>
                        <p><i>{props.artist}</i></p>
                        <a href={props.link} target="_blank" rel="noopener noreferrer">Saiba mais</a>
                    </div>
                    <div className="player">
                        <audio controls>
                            <source src={props.preview} type="audio/mpeg" />
                            Your browser does not support the audio tag.
                        </audio>
                    </div>
                </section>
            </div>
        </div>

    )
}
