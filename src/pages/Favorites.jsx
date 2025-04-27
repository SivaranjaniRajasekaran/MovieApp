import { useMovieContext } from '../context/MovieContext';
import MovieCard from '../components/MoviewCard'
import '../css/Favorites.css'
function Favorites(){

    const {favorites} = useMovieContext();
    if(favorites){
        return <div className='favorites'>
                <h2>Your Favorite Movies</h2>
                    <div className="movies-grid">
                    {favorites.map(movie=><MovieCard movie={movie} key={movie.id}/>)}

                </div>
            </div>
    }
    return <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favorites that will appear hear</p>


    </div>
}

export default Favorites