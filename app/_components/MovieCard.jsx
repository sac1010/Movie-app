import Image from 'next/image'
// import React, { useEffect } from 'react'

const MovieCard = ({title, backdrop, poster}) => {
//   useEffect(()=>{
// console.log( backdrop)
//   },[])
  return (
    <div className='w-full xl:w-1/5 lg:w-1/4 sm:w-1/3 md h-[25rem] bg-gray-300'>
      <div className='relative w-full h-full'>

      <Image objectFit='cover' layout='fill' src={poster}/>
      </div>
    </div>
  )
}

export default MovieCard