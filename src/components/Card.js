import React, { useState } from 'react'
import CardDetails from './CardDetails'
import { Link, useNavigate } from 'react-router-dom'

function Card({movie}) {
  // const id = 8;
  const navigate = useNavigate();
  
  function gotoDetail(){
    navigate('/carddetail',{state:{movie : movie}})
  }
  return (
    <div>
      <div className='bg-gray-400 h-96 w-64 rounded-lg shadow-sm shadow-gray-400 text-white'>
        {/* <Link to='/carddetail'> */}
          <img src={movie.Poster} alt="" className='h-3/4 w-full rounded-t-lg' onClick={gotoDetail}/>
        {/* </Link> */}
        <div className='h-1/4 bg-gray-700 flex flex-col justify-center pl-4 font-semibold text-lg rounded-b-lg'>
            <h4>Movie year: {movie.Year}</h4>
            <h4>{movie.Title}</h4>
        </div>
      </div>
    </div>
  )
}

export default Card