import '../../App.css'
import IconsLogo from "../../assets/icons-logo.png"
import { FaPlayCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="Home">
            <div className='Logo'><img src={IconsLogo} alt="" /></div>
            <div className='content'>
                <h2><i>Encontre</i> e <i>aproveite</i> suas músicas favoritas!</h2>
                <Link to="/busca"><button>Vamos começar <FaPlayCircle className='icon-play' /></button></Link>
            </div>
        </div>
    )
}
