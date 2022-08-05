import React from 'react'


import NftCard from '../nftCard/NftCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Collections.css"


const Collections = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1044 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1004, min: 764 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 764, min: 0 },
            items: 1
        }
    };
    return (
        <div className="collections ">
            <h1 className="collections-title text-center text-white my-5">Explore Some Hot <span>Collections</span> In Market.</h1>
            <div className="collections-slider-container ">
                <Carousel className='collections-slider   ' autoPlay={true} autoPlaySpeed={5000} infinite={true} responsive={responsive}>
                    <NftCard />
                    <NftCard />
                    <NftCard />



                </Carousel>

            </div>
        </div>
    )
}

export default Collections
