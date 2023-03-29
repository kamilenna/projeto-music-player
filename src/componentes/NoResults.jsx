import '../Pages/SearchPage/SearchPage.css'

export default function NoResults() {

    return (
        <div className='no-results'>
            <p><strong>Nenhum resultado encontrado. Tente novamente. </strong></p>
            <hr />
            <h4>Você pode realizar a busca através do:</h4>
            <ul>
                <li><strong>Nome do artista</strong></li>
                <li><strong>Título da música</strong></li>
                <li><strong>Título da álbum</strong></li>
            </ul>
        </div>

    )
}
