import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card';
import { StickyNavbar } from '../../components/Navbar/Navbar';
import Loading from '../../components/Loading/Loading';
import { Link } from 'react-router-dom';

export default function Movies() {
    const [Movies, SetMovies] = useState(null);
    async function getMovies() {
        const options = {
            method: "GET",
            url: `https://api.themoviedb.org/3/discover/movie?api_key=bd96ecd66c79c8555eeb806ccbd7b6fd`
        }
        const { data } = await axios.request(options);
        SetMovies(data.results);
        console.log(data.results);
    }
    useEffect(() => {
        getMovies();
    }, [])

    return (
        <>
        <section className='bg-[#131722] min-h-screen'>
            <div className="container grid grid-cols-12 gap-3 p-3  ">
                {Movies ? (Movies.map((data) => {
                    return <Link className=' col-span-12 md:col-span-4 lg:col-span-2' to={`/movieInfo/${data.id}`} key={data.id} > <Card data={data} /> </Link>
                })) : (
                    <Loading/>
                )
                }

            </div>
        </section>
        </>
    )
}

