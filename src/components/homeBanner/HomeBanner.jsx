import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./HomeBanner.css"

const HomeBanner = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        },

    };

    return (
        <div className="banner">

            <div className="row  banner-row ">
                <div className="banner-content  d-flex flex-column justify-content-center align-items-center col-xl-6">
                    <div className="banner-box  text-white">
                        <h1 className="title">Liberty NFT Market</h1>
                        <h2 className="b-subTitle">CREATE, SELL & COLLECT TOP NFT’S.</h2>
                        <p className="b-content">Liberty NFT Market is a really cool and professional design for your NFT websites. This HTML CSS template is based on Bootstrap v5 and it is designed for NFT related web portals. Liberty can be freely downloaded from TemplateMo's free css templates.</p>
                        <div className="btn-gruop-banner ">
                            <button className="explore-btn">Explore Top Ntf's</button>
                            <button className="watch-btn">Watch Our Videos</button>
                        </div>
                    </div>

                </div>
                <div className="banner-content p-0 ms-xl-auto  col-xl-5 my-own-custom-container " >
                    <div className="banner-box mx-auto  mt-5 ">
                        <Carousel className='b-slide ' responsive={responsive} infinite={true}  >

                            <div className='corousel-item  '>
                                <img src="/images/banner-01.png" alt="" />

                            </div>
                            <div className='corousel-item  '>
                                <img src="/images/banner-02.png" alt="" />

                            </div>



                        </Carousel>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HomeBanner
