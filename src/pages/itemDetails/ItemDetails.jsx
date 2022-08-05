import React from 'react'
import CurrentBiddings from '../../components/currentBiddings/CurrentBiddings'

import Footer from '../../components/footer/Footer'
import HowToCreateNft from '../../components/howToCreateNft/HowToCreateNft'
import Navbar from "../../components/navbar/Navbar"
import OneItemDetails from '../../components/oneItemDetails/OneItemDetails'

import "./ItemDetails.css"

const ItemDetails = () => {
    return (
        <div className='item-details-wrapper'>
            <Navbar />
            <div className='item-details-header'>

                <h4 className='text-center'>Liberty NFT Market</h4>
                <h1 className='text-center fw-bold' >VIEW ITEM DETAILS</h1>
                <h5 className='text-center'> <span style={{ color: "rgba(116,83,252)" }}> Home /</span> Explore</h5>
                <div className="item-details-header-btns ">
                    <button>Explore Our Items </button>
                    <button>Create Your NFT</button>
                </div>
            </div>

            <div className='bg-item-details'>
                <h2 className='one-item-details-title'>View Details <span> For Item </span>Here.</h2>
                <OneItemDetails />
                <CurrentBiddings />
            </div>
            <HowToCreateNft />
            <Footer />
        </div>
    )
}

export default ItemDetails
