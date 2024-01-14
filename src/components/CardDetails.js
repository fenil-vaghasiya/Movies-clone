import React from 'react'
import { useLocation } from 'react-router-dom';

const movie1 = {
    "Title": "Kabhi Khushi Kabhie Gham...",
    "Year": "2001",
    "imdbID": "tt0248126",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTQ5Nzc3NzAtMzZlMS00ZWJjLWIxMGMtNDU4ZTQ1NmNjMjc5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
};

function CardDetails() {
  const location = useLocation();
  return (
    <div className='w-3/5 mx-auto h-screen flex items-center'>
        <div className='mx-auto w-2/6 h-2/4 shadow-3xl shadow-gray-800'>
            <img src={location.state.movie.Poster} alt="image not found" className='h-full w-full rounded-l-lg'/>
        </div>
        <div className='mx-auto w-4/6 h-2/4 shadow-3xl bg-gray-800 flex flex-col justify-around font-bold text-2xl p-16 text-yellow-100 rounded-r-lg'>
            <h2>Title: {location.state.movie.Title}</h2>
            <h2>Year: {location.state.movie.Year}</h2>
            <h2>Imdb-id: {location.state.movie.imdbID}</h2>
            <h2>Type: {location.state.movie.Type}</h2>
        </div>
    </div>
  )
}

export default CardDetails