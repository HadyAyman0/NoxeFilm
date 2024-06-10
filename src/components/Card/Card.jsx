import React from 'react';
import Styles from './Card.module.css'

export default function Card({data}) {
    const {title,vote_average,poster_path,release_date,name,first_air_date} = data;
   
    console.log(Styles);
    return (
        <>  
    <div className={`my-3 ${Styles.card} text-white cursor-pointer col-span-12 md:col-span-4 lg:col-span-2`}>
        <picture className='' >
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className='w-full rounded-md' alt="" />
        </picture>
        <div className=' '>
        <h4 className='text-center'>{name}</h4>
        <div className='flex mt-3 gap-3  justify-between '>
        <div className='flex gap-1 justify-center items-center'>
        <i className="fa-solid fa-star text-yellow-400"></i>
        <span>{vote_average}</span>
        </div>
        <p className=' bg-gray-500 line-clamp-1 sm:p-1  text-[15px] rounded-md '>{release_date||first_air_date}</p>
        </div>
        </div>
    </div>
    
        </>
    )
}
