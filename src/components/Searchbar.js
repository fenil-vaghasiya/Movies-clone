import React, { useState } from 'react'

function Searchbar() {
  const [search,setSearch] = useState('');
  return (
    <div className='lg:w-3/4 xl:w-2/4 mx-auto'>
      <input 
        type="text" 
        placeholder='Search for movies' 
        className='rounded-lg py-2 px-5 xl:w-5/6 lg:w-4/5'
        value={search}
        onChange={(e) => {setSearch(e.target.value)}}/>
      <button 
        className='bg-blue-400 rounded-lg py-2 px-5 xl:w-1/6 lg:w-1/5'
        onClick={() => {}}>
          Search</button>
    </div>
  )
}

export default Searchbar