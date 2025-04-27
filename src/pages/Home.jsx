import { useState ,useEffect} from "react"
import MovieCard from "../components/MoviewCard";
import NavBar from "../components/NavBar";
import '../css/Home.css';
import { searchMovies,getPopularMovies } from "../services/api";

function Home(){

    const [searchQuery,setSearchQuery] = useState("")

    // const movies =[
    //     {id:1, title:'John Wick', release_date:'2025'},
    //     {id:2, title:'Dragon', release_date:'2025'},
    //     {id:3, title:'Amaran', release_date:'2024'},
    // ]
    const [movies, setMovies] = useState([]);
    const [error,setError] = useState(null);
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        const loadPopularMovies = async ()=>{
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            }
            catch(err){
                console.log(err)
                setError("Failed to Load movies...")
            }
            finally{
                setLoading(false)
            }

        }
        loadPopularMovies()
    },[])

    const handleSearch = async(e) =>{
       e.preventDefault();
       if(!searchQuery.trim) return
       setLoading(true)
       if(loading)return

       try{
        const searchResults = await searchMovies(searchQuery);
        setMovies(searchResults)
        setError(null)

       }catch(err){
        console.log(err)
        setError("Failed to Search movies...")

       }finally{
        setLoading(false)
       }
    }
    
    return (
        <div className="home">
        <form onSubmit={handleSearch} className='search-form'>
            <input 
                type="text"
                placeholder='Search for movies..' 
                className='search-input'
                value={searchQuery} 
                onChange={(e)=> setSearchQuery(e.target.value)}/>
                 <button type="submit" className="search-button">Search</button>
        </form>
       

       {error && <div className="error">{error}</div>}

       {loading ? (
        <div className="loading">Loading...</div>)
       :
        (<div className="movies-grid">
            {movies.map(movie=>
            movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id}/>)}

        </div>)}
    </div>
    )
}

export default Home