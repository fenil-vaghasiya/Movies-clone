import React, { useEffect, useState } from 'react'
import Searchbar from './Searchbar';
import Card from './Card';
import CardDetails from './CardDetails';
// dffb3cb3
// const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=dffb3cb3';
const URL = "https://www.omdbapi.com/?apikey=dffb3cb3";

const movie1 = {
    "Title": "Kabhi Khushi Kabhie Gham...",
    "Year": "2001",
    "imdbID": "tt0248126",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTQ5Nzc3NzAtMzZlMS00ZWJjLWIxMGMtNDU4ZTQ1NmNjMjc5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
};

function Movie() {

    const [movies,setMovies] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');

    const searchMovies = async(title)=>{
        const response = await fetch(`${URL}&s=${title}`);
        const finaldata = await response.json();
        setMovies(finaldata.Search);
    }
    useEffect(()=>{
        searchMovies('hum');
    },[]); // only called at starting phase

  return (
    <div className='flex justify-center flex-col items-center bg-slate-800'>
        <div className='h-20 w-full text-center flex justify-center items-center text-3xl font-bold'>
            <h1 className='text-white'>MovieLand</h1>
        </div>
        <div className='h-32 w-full flex justify-center items-center'>
            <div className='lg:w-3/4 xl:w-2/4 mx-auto'>
                <input 
                    type="text" 
                    placeholder='Search for movies' 
                    className='rounded-lg py-2 px-5 xl:w-5/6 lg:w-4/5 border-none outline-none'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}/>
                <button 
                    className='bg-blue-400 rounded-lg py-2 px-5 xl:w-1/6 lg:w-1/5 font-bold text-md'
                    onClick={() => searchMovies(searchTerm)}>Search
                </button>
            </div>
            {/* <Searchbar/> */}
        </div>
        <div className='flex flex-wrap gap-4 mx-auto w-4/5 justify-center items-center p-5'>
            {
                movies?.length>0 ? 
                movies.map((movie)=>(
                    <Card movie={movie}/>
                )):
                <div className='text-white'>No movies found</div>
            }

        </div>
    </div>
  )
}

export default Movie