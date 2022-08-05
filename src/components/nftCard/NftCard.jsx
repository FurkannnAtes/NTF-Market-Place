import React from 'react'

import "./NftCard.css"

const NftCard = () => {
    return (
        <div className="c-slider-item text-white position-relative p-5">
            <div className="c-slider-item-header">
                <img src="images/collection-01.jpg" alt="" />
            </div>
            <div className="c-slider-item-body  ps-4">
                <h4>Worldwide Artwork Ground</h4>
            </div>
            <div className="c-slider-item-footer px-4 d-flex justify-content-between">
                <div className="c-slider-item-footer-left d-flex flex-column">
                    <span> Items In collection:</span>
                    <span> 248/235</span>
                </div>
                <div className="c-slider-item-footer-right  d-flex flex-column">
                    <span>Catagory:</span>
                    <span>Vısual Art</span>
                </div>
            </div>
            <button className='c-slider-item-button'>Explore Bored Ape</button>
        </div>
    )
}

export default NftCard
