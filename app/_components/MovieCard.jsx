import Image from 'next/image'
import Link from 'next/link'
// import React, { useEffect } from 'react'

const MovieCard = ({title, backdrop, poster, slug}) => {
//   useEffect(()=>{
// console.log( backdrop)
//   },[])
  return (
    <Link href={`/${slug}`} className='lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 h-[25rem] bg-gray-300 transition-transform transform-gpu hover:scale-105 hover:shadow-xl cursor-pointer'>
      <div className='relative w-full h-full'>

      <Image objectFit='cover' layout='fill' src={poster}/>
      </div>
      <div className='py-2'>{title}</div>
    </Link>
  )
}

export default MovieCard