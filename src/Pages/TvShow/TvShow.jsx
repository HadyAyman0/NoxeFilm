import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card';
import Loading from '../../components/Loading/Loading';
import { Link } from 'react-router-dom';

export default function TvShow() {
    const [tv,SetTv] = useState(null);
     async function getTv()
    {
        const options = {
            method :"GET",
            url :"https://api.themoviedb.org/3/discover/tv?api_key=bd96ecd66c79c8555eeb806ccbd7b6fd",
        }
        const {data} = await axios.request(options);
        console.log(data.results);
        SetTv(data.results)
    }
    useEffect(()=>{
        getTv();
    },[])

    return (
        <>
    <section className='bg-[#131722]'>
        <div className="container grid grid-cols-12 gap-3 p-4">
        { tv ?(tv.map((data)=>{
            return <Link className=' col-span-12 md:col-span-4 lg:col-span-2' to={`/movieInfo/${data.id}`} key={data.id}><Card data={data} /></Link>
        })) : (
            <Loading/>
        )
        }

        </div>

    </section>

        </>
    )
}
