import React, { useEffect, useState } from 'react'
import { StickyNavbar } from '../../components/Navbar/Navbar'
import HomeSlider from '../../components/HomeSlider/HomeSlider'
import Card from '../../components/Card/Card'
import axios from 'axios';
import Loading from '../../components/Loading/Loading';
import { data } from 'autoprefixer';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';


export default function Home() {
   const [upComing,SetUp] = useState(null);
   const [topRated , SetTop] = useState(null);
   const [popular,SetPopular] = useState(null);
   const [nowPlaying , SetNow] = useState(null);
   const setting = {
    autoplay: true,
     autoplaySpeed: 2000,
   }
   
 async function getMovie(directory ,setState)
   {
    const options = {
        method : "GET",
        url : `https://api.themoviedb.org/3/movie/${directory}?api_key=bd96ecd66c79c8555eeb806ccbd7b6fd`
    }
    const {data} = await axios.request(options);
    console.log(data.results);
    setState(data.results);
   }

   useEffect(()=>{
    getMovie('upcoming',SetUp);
    getMovie('top_rated',SetTop);
    getMovie('popular',SetPopular);
    getMovie('now_playing',SetNow)
   },[])


    return (
        <>
        <HomeSlider/>
        <section className='bg-[#131722] min-h-screen'>
        <div className="container p-3 ">
        <div className='p-2'>
        <h3 className='text-5xl text-white opacity-50 mb-3 '>Up Coming Movie</h3>
        <swiper-container  loop={true} slides-per-view="3" space-Between={10}  {...setting} breakpoints={JSON.stringify({ 1200: { slidesPerView: 8 } })} >
        {upComing?(upComing.map((data)=> <swiper-slide><Link className=' col-span-12 md:col-span-4 lg:col-span-2' to={`/movieInfo/${data.id}`} key={data.id}><Card data={data}/></Link></swiper-slide> 
            )):(
                <Loading/>
            )
        }
        </swiper-container>
        </div>
        <div className='p-2'>
        <h3 className='text-5xl text-white opacity-50 mb-3 '>Top Rated</h3>
        <swiper-container  loop={true} slides-per-view="3" space-Between={10}  {...setting} breakpoints={JSON.stringify({ 1200: { slidesPerView: 8 } })} >
        {topRated?(topRated.map((data)=> <swiper-slide><Link className=' col-span-12 md:col-span-4 lg:col-span-2' to={`/movieInfo/${data.id}`} key={data.id}><Card data={data}/></Link></swiper-slide> 
            )):(
                <Loading/>
            )
        }
        </swiper-container>
        </div>
        <div className='p-2'>
        <h3 className='text-5xl text-white opacity-50 mb-3 '>popular</h3>
        <swiper-container  loop={true} slides-per-view="3" space-Between={10}  {...setting} breakpoints={JSON.stringify({ 1200: { slidesPerView: 8 } })} >
        {popular?(popular.map((data)=> <swiper-slide><Link className=' col-span-12 md:col-span-4 lg:col-span-2' to={`/movieInfo/${data.id}`} key={data.id}><Card data={data}/></Link></swiper-slide> 
            )):(
                <Loading/>
            )
        }
        </swiper-container>
        </div>
        <div className='p-2'>
        <h3 className='text-5xl text-white opacity-50 mb-3 '>Now Playing</h3>
        <swiper-container  loop={true} slides-per-view="3" space-Between={10}  {...setting} breakpoints={JSON.stringify({ 1200: { slidesPerView: 8 } })} >
        {nowPlaying?(nowPlaying.map((data)=> <swiper-slide><Link className=' col-span-12 md:col-span-4 lg:col-span-2' to={`/movieInfo/${data.id}`} key={data.id}><Card data={data}/></Link></swiper-slide> 
            )):(
                <Loading/>
            )
        }
        </swiper-container>
        </div>
        </div>
        </section>
        </>
    )
}
