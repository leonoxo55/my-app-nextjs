import Link from 'next/link';
import Menu from '../components/Menu';

export default function movies (props) {

    const {movies} = props;
    return (
        <div>
            <Menu />
            <h1 style={{textAlign:'center'}} >Estamos en la página de películas</h1>
            {movies.map((movie, index) => (
                <Link href='/movie/[movie]' as={`/movie/${movie.id}`} key={index} >
                    <a style={{marginRight: 20}}>{movie.name}</a>
                </Link>
            ))}
        </div>
    )
}

movies.getInitialProps = () => {
    const movies = [
        {
            id: 'joker',
            name: 'Joker'
        },
        {
            id: 'spider',
            name: 'Spider-man'
        },
        {
            id: 'batman',
            name: 'Batman'
        }
    ]

    return {movies};
}