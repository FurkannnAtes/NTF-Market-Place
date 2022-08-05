import React from 'react'

import "./OneItemDetails.css"

const OneItemDetails = () => {
    return (
        <div className='one-item-details-container text-white'>


            <div className="one-item-details-card px-1 px-lg-5">
                <div className="row ">
                    <div className="one-item-details-card-left col-lg-6 ">
                        <img className='one-item-img w-100' src="/images/item-details-01.jpg" alt="" />
                    </div>
                    <div className="one-item-details-card-right col-lg-6 d-flex flex-column justify-content-around py-xl-5 px-xl-5">
                        <h4 className="one-item-details-card-right-title fw-bold">
                            Dolores Haze Westworld Eye
                        </h4>
                        <div className="one-item-details-card-right-avtar-info d-flex">
                            <img className='rounded rounded-circle me-2' src="/images/author.jpg" alt="" />
                            <div className='d-flex flex-column '>
                                <span>Liberty Artist</span>
                                <span className='fw-bold' style={{ color: "rgba(116,83,252)" }}>@libertyart</span>
                            </div>
                        </div>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, neque.adipisicing elit. Totam, neque.</div>
                        <div className="one-item-details-card-right-price-info d-flex justify-content-between">
                            <div className='d-flex flex-column'>
                                <span> Current Bid </span>
                                <h6 className='fw-bold' style={{ color: "rgba(116,83,252)" }}> 6.06 ETH </h6>
                                <span> ($8,025.50)</span>
                            </div>
                            <div className='d-flex flex-column'>
                                <span>  Owner</span>
                                <h6 className='fw-bold' style={{ color: "rgba(116,83,252)" }}>  David Walker</h6>
                                <span>  (@davidwalker)</span>
                            </div>
                            <div className='d-flex flex-column'>
                                <span>  Ends In</span>
                                <h6 className='fw-bold' style={{ color: "rgba(116,83,252)" }}>  3D 05H 20M 58S</h6>
                                <span>  (January 22nd, 2021)</span>
                            </div>
                        </div>
                        <div className="one-item-details-card-right-btns">
                            <span>Place Bid:</span> <button> 1 ETH</button> <button>Submit Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneItemDetails
