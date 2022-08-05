import React from 'react'
import "./DiscoverTopItems.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const DiscoverTopItems = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 764 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 764, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className='discover-content  text-white'>
            <h4 className='text-center'>Liberty NFT Market</h4>
            <h1 className='text-center fw-bold' >DISCOVER SOME TOP ITEMS</h1>
            <h5 className='text-center'> <span style={{ color: "rgba(116,83,252)" }}> Home /</span> Explore</h5>
            <Carousel className='discover-slider mt-4' infinite={true} responsive={responsive}>
                <div className='discover-slider-item'><img src="/images/featured-01.jpg" alt="" />

                </div>
                <div className='discover-slider-item'><img src="/images/featured-02.jpg" alt="" /></div>
                <div className='discover-slider-item'><img src="/images/featured-03.jpg" alt="" /></div>
                <div className='discover-slider-item'><img src="/images/featured-04.jpg" alt="" /></div>
            </Carousel >;
        </div >
    )
}

export default DiscoverTopItems
