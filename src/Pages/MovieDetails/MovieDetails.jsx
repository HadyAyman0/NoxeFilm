import React, { useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';
import { Button } from "@material-tailwind/react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';
import Card from '../../components/Card/Card';
export default function MovieDetails() {
    const [player, setPlayer] = useState(null);
    const [isMuted, setIsMuted] = useState(true);
    const [movie, SetMovie] = useState(null);
    const [video, SetVideo] = useState(null)
    const [movieRecomended, SetRecomended] = useState(null);
    const { id } = useParams();
    console.log(id)
    const setting = {
        autoplay: true,
        autoplaySpeed: 2000,
    }
    async function getMovieDetails() {
        const options = {
            method: "GET",
            url: `https://api.themoviedb.org/3/movie/${id}?api_key=bd96ecd66c79c8555eeb806ccbd7b6fd`,
        }
        const { data } = await axios.request(options);
        SetMovie(data);
    }
    async function getVideo() {
        const options = {
            method: "GET",
            url: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=bd96ecd66c79c8555eeb806ccbd7b6fd`
        }
        const { data } = await axios.request(options);
        console.log(data.results);
        SetVideo(data)

    }
    async function getRecomended() {
        const options = {
            method: "GET",
            url: `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=bd96ecd66c79c8555eeb806ccbd7b6fd`
        }
        const { data } = await axios.request(options)
        console.log(data.results);
        SetRecomended(data.results)
    }

    useEffect(() => {
        getMovieDetails();
        getVideo();
        getRecomended();
      
    }, [id])


    const onPlayerReady = (event) => {
        setPlayer(event.target);
        event.target.mute();
    };

    const toggleMute = () => {
        if (player) {
            if (isMuted) {
                player.unMute();
            } else {
                player.mute();
            }
            setIsMuted(!isMuted);
        }
    };

    const opts = {

        playerVars: {
            autoplay: 1,
            mute: 1,
        },
    };

    return (
        <>
            {movie ? <section className='  bg-[#131722] '>
                <div className='relative '>
                    <YouTube
                        iframeClassName='w-full min-h-[185vh] md:min-h-screen'
                        videoId={video && video.results && video.results.length > 1 && video.results[1].key ? video.results[1].key : ''}
                        opts={opts}
                        onReady={onPlayerReady}
                    />
                    <div className='absolute  z-10 top-0 left-0 right-0 bottom-0   text-white flex justify-center items-center    bg-gray-800 bg-opacity-50 '>
                        <div className='conatainer bg-gray-800 bg-opacity-35 sm:bg-transparent sm:opacity-100  p-5  grid grid-cols-12 gap-5'>
                            <div className=' col-span-12 sm:mt-0 md:col-span-4 flex justify-center '>
                                <picture className=''>
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className=' w-full h-[500px] opacity-50 rounded-md' alt="" />
                                </picture>
                            </div>
                            <div className='col-span-12 md:col-span-8'>
                                <h1 className=' font-extrabold text-5xl'>{movie.title}</h1>
                                <div className='flex gap-3 items-center mt-5'>
                                    <i class="fa-solid fa-star text-yellow-500"></i>
                                    <p>{movie.vote_average}</p>
                                    <p>{movie.release_date}</p>
                                </div>
                                <div className='p-5 break-words whitespace-normal '>
                                    {movie.genres && movie.genres.length > 0 && (
                                        <span className='text-3xl'>
                                            {movie.genres[0].name}
                                            {movie.genres[1] ? `, ${movie.genres[1].name}` : ''}
                                            {movie.genres[2] ? `, ${movie.genres[2].name}` : ''}
                                        </span>
                                    )}
                                    <p className='break-words whitespace-normal'>{movie.overview}</p>
                                    <p className='break-words whitespace-normal mt-3  text-gray-500 '>tagline: <span className='text-white'>{movie.tagline}</span> </p>
                                    {movie.production_companies && movie.production_companies.length > 0 && (
                                        <p className='break-words whitespace-normal mt-3 text-gray-500'>
                                            production companies:
                                            <span className='text-white'>
                                                {movie.production_companies[0].name}
                                                {movie.production_companies[1] ? `, ${movie.production_companies[1].name}` : ''}
                                                {movie.production_companies[2] ? `, ${movie.production_companies[2].name}` : ''}
                                            </span>
                                        </p>
                                    )}
                                </div>
                                <Button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container min-h-screen">
                    <div className='mt-3 '>
                        <h3 className='text-white text-5xl m-3'>Trailers And Clips</h3>
                        <swiper-container loop={true} slides-per-view="3" space-Between={10}  {...setting} breakpoints={JSON.stringify({ 1200: { slidesPerView: 3 } })}>
                            {video && video.results ? (
                                video.results.map((el) => {
                                    return (
                                        <swiper-slide key={el.key}>
                                            <div className="aspect-video w-full max-w-[500px]">
                                                <iframe
                                                    className="rounded-lg w-full h-full"
                                                    title="Trailler"
                                                    width="500"
                                                    height="294px"
                                                    src={`https://www.youtube.com/embed/${el.key}?&theme=dark&color=white&rel=0`}
                                                ></iframe>
                                            </div>
                                        </swiper-slide>
                                    );
                                })
                            ) : (
                                <Loading />
                            )}
                        </swiper-container>

                    </div>
                    <div className='mt-3 '>
                        <h3 className='text-white text-5xl my-3'>You May Also Like</h3>
                        <swiper-container loop={true} slides-per-view="3" space-Between={10}  {...setting} breakpoints={JSON.stringify({ 1200: { slidesPerView: 8 } })} >
                            {movieRecomended ? (movieRecomended.map((data) => <swiper-slide><Link className=' col-span-12 md:col-span-4 lg:col-span-2' to={`/movieInfo/${data.id}`} key={data.id}><Card data={data} /></Link></swiper-slide>
                            )) : (
                                <Loading />
                            )
                            }
                        </swiper-container>
                    </div>

                </div>
            </section> : <Loading />}
        </>
    );
}


