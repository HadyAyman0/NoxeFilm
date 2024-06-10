import React from 'react'
import img1 from '../../assets/Images/329585.jpg';
import img2 from '../../assets/Images/329598.jpg';
import img3 from '../../assets/Images/21097.jpg';
import img4 from '../../assets/Images/5th-wave.jpg';
import Styles from './HomeSlider.module.css'

export default function HomeSlider() {
    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
    }
    return (
        <>
            <section className='relative '>
            <swiper-container {...settings2}  >
                <swiper-slide ><img src={img1} className={`w-full relative ${Styles.background}`} /></swiper-slide>
                <swiper-slide ><img src={img2}  className={`w-full relative ${Styles.background}`} /></swiper-slide>
                <swiper-slide ><img src={img3}  className={`w-full relative ${Styles.background}`} /></swiper-slide>
                <swiper-slide ><img src={img4}  className={`w-full relative ${Styles.background}`} /></swiper-slide>
            </swiper-container>
            <div className='absolute flex justify-center items-start flex-col   z-40 top-0 bottom-0 left-0 right-0 bg-gray-900 bg-opacity-45 text-white '>
                <h3 className='ml-2 mb-3 md:ml-9 md:mb-5 text-5xl md:text-8xl font-semibold'>Watch Free Movies </h3>
                <h3 className=' ml-4 mb-2 md:ml-16 md:mb-2 text-3xl md:text-5xl font-semibold'>With <span className='text-blue-400'>N</span>oxe</h3>
                <p className=' ml-5 md:ml-16  text-2xl md:text-3xl font-semibold'>Stop searching for free movie websites and watch </p>
            </div>
            </section>


        </>
    )
}
