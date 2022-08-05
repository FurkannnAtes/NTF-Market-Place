import React from 'react'
import Footer from '../../components/footer/Footer'
import HowToCreateNft from '../../components/howToCreateNft/HowToCreateNft'
import Navbar from '../../components/navbar/Navbar'
import OurItems from '../../components/ourItems/OurItems'

import "./Author.css"

const Author = () => {
    return (
        <div>
            <Navbar />
            <div className='author-header'>
                <h4 className='text-center'>Author Details</h4>
                <h1 className='text-center fw-bold' >VIEW DETAILS FOR AUTHOR</h1>
                <h5 className='text-center'> <span style={{ color: "rgba(116,83,252)" }}> Author /</span> Explore</h5>
                <div className="author-header-btns ">
                    <button>Explore Our Items </button>
                    <button>Create Your NFT</button>
                </div>
            </div>
            <div className='our-item-bg py-5'>
                <div className="single-author d-flex flex-column flex-lg-row align-items-center justify-content-around ">
                    <div className="single-author-info mb-5 mb-lg-0 d-flex align-items-center   ">
                        <img className='rounded  rounded-circle single-author-img me-3' src="/images/single-author.jpg" alt="" />
                        <div className='single-author-info-text  text-white d-flex flex-column'>
                            <h4>Melanie Smith</h4>
                            <h4 className='fw-bold' style={{ color: "rgba(116,83,252)" }}>@melanie32</h4>
                        </div>
                    </div>
                    <div className="single-author-stats-box text-white">
                        <div className="single-author-stats-box-head d-flex  justify-content-between align-items-center px-2 px-md-5 py-3">
                            <div className='d-flex flex-column '>
                                <span><i className="bi bi-heart-fill"></i></span>
                                <span><span className='fw-bold' style={{ color: "rgba(116,83,252)" }}>1238</span>  Likes</span>
                            </div>
                            <div className='d-flex flex-column'>
                                <span><i className="bi bi-heart-fill"></i></span>
                                <span><span className='fw-bold' style={{ color: "rgba(116,83,252)" }}>1238</span>  Likes</span>
                            </div>
                            <div className='d-flex flex-column'>
                                <span><i className="bi bi-heart-fill"></i></span>
                                <span><span className='fw-bold' style={{ color: "rgba(116,83,252)" }}>1238</span>  Likes</span>
                            </div>

                        </div>
                        <div className="single-author-stats-box-footer py-4 d-flex justify-content-around align-items-center">
                            <h4 className='text-muted fw-bold'>559 Followers</h4>
                            <button>Follow @Melanie32</button>
                        </div>
                    </div>
                </div>

                <h2 className='text-white px-5 ms-3 my-5'>Melanie Smith’s <span style={{ color: "rgba(116,83,252)" }}> Items.</span></h2>
                <OurItems />
            </div>
            <HowToCreateNft />
            <Footer />
        </div>
    )
}

export default Author
