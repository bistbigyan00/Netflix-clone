import React, {useState, useEffect} from 'react';
import axios from './axios';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';


//setting base url for adding remaining path for image
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title,fetchURL,isLargeRow}) {
    //using state to capture movies
    const [movies,setMovies] = useState([] );

    //using state to get youtube trailer url
    const [trailerUrl, setTrailerUrl] = useState("");



    //A default snippet of code which runs based on a specific condition
    //run everytime, we receive fetch url
    useEffect(()=>{
       async function fetchData(){
        //axios is like postman, where we fetch the data
        const request = await axios.get(fetchURL);
        //we pass that data to setMOvies function, which re renders whole component
        setMovies(request.data.results);
        return request;
       }
       fetchData();        
    },[fetchURL]);

    const opts = {
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1
        }
    }

    //when user clicks picture
    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            //default package to get url of movie name
            movieTrailer(movie?.name || "")
            //url = https://www.youtube.com/watch?v=s-dB1ZLlz-Q
            .then((url)=>{
                const urlParams = new URLSearchParams(new URL(url).search);
                //urlparams=,v=s-dB1ZLlz-Q
                //it sets the id to trailer url
                setTrailerUrl(urlParams.get('v'));
                console.log('this is params',urlParams.get('v'));
            })
            .catch((error) => console.log(error));
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            
            <div className="row__posters">
                {movies.map(movie => (
                    <img 
                    //when lots of data is looped through, we must send unique id to all data i.e key
                    key={movie.id}

                    //display video trailer after onclick
                    onClick={()=> handleClick(movie)}

                    //says, normal class name is row poster, but if is-large-row is there, add extra class name so that we can style it big

                    className={`row__poster ${isLargeRow && "row__posterLarge"} `} 
                    //if islargerow, display movie poster, else other
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}
                    />
                ))}
            </div>
            
            {/* when trailer url show youtube video */}
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
