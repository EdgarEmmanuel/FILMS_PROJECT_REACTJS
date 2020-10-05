import React,{useEffect, useState} from 'react';
import './css/Result.css';
import './VideoCard';
import VideoCard from './VideoCard';
import axios from './axios';
import FlipMove from 'react-flip-move';
//import requests from './service/requests';

function Result({selectedOption}){
   
        const [movies,setMovies] = useState([]);
        useEffect(()=>{
            async function fetchData(){
                const req = await axios.get(selectedOption);
                setMovies(req.data.results);
                return req;
            }
            fetchData();
        },[selectedOption]);

        return(
            <FlipMove>
            <div className="results">
            { movies.map((movie) => (
                <VideoCard key={movie.id} image={movie}/>
            ))};
            </div>
            </FlipMove>
        )
    
}

export default Result;