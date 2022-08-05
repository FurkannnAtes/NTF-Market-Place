import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import OneItemDetails from '../../components/oneItemDetails/OneItemDetails'
import ItemDetails from '../itemDetails/ItemDetails'

import "./CreateYours.css"

const CreateYours = () => {
    return (
        <div>
            <Navbar />
            <div className='create-yours-header'>
                <h4 className='text-center'>Liberty NFT Market</h4>
                <h1 className='text-center fw-bold' >CREATE YOUR NFT NOW.</h1>
                <h5 className='text-center'> <span style={{ color: "rgba(116,83,252)" }}> Home /</span> Create Yours</h5>
                <div className="create-yours-header-btns ">
                    <button>Explore Our Items </button>
                    <button>Create Your NFT</button>
                </div>
            </div>
            <div className='create-yours-bg text-white'>
                <h2 className='text-center py-3'>Apply For <span style={{ color: "rgba(116,83,252)" }}>Your Item</span>  Here.</h2>

                <div className="create-your-nft-container py-5  mx-auto">
                    <form action="" className='create-your-nft-form    '>
                        <div className='mb-5'>
                            <div className="row px-3">
                                <label className='d-flex flex-column col-lg-4' ><span className='ps-2'>Item Title</span>
                                    <input className='create-your-nft-form-input  my-2  ' type="text" name="" id="" placeholder='Ex. Lyon King' />
                                </label>
                                <label className='d-flex flex-column col-lg-4'><span className='ps-2'>Description For Item</span>
                                    <input className='create-your-nft-form-input my-2 ' type="text" name="" id="" placeholder='Give us your idea' />
                                </label>
                                <label className='d-flex flex-column col-lg-4' ><span className='ps-2'>Your Username </span>
                                    <input className='create-your-nft-form-input  my-2 ' type="email" name="" id="" placeholder='Ex. @alansmithee' />
                                </label>
                            </div>
                            <div className="row px-3 mt-lg-3">
                                <label className='d-flex flex-column col-lg-6' ><span className='ps-2'>Price Of Item</span>
                                    <input className='create-your-nft-form-input  my-2  ' type="text" name="" id="" placeholder='Price depends on quality. Ex. 0.06 ETH' />
                                </label>
                                <label className='d-flex flex-column col-lg-6'><span className='ps-2'>Royalties</span>
                                    <input className='create-your-nft-form-input my-2 ' type="text" name="" id="" placeholder='Common royalties 1-25%' />
                                </label>

                            </div>
                        </div>
                        <div>
                            <div className="row px-3">
                                <label className='d-flex flex-column col-lg-6 ' >
                                    Your File
                                    <input className='mt-2' type="File" />
                                </label>
                                <button className='col-lg-6 create-nft-submit' type='submit'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>

                <h2 className='one-item-details-title'>This Is<span> Your Item</span> Preview.</h2>
                <OneItemDetails />
            </div>

            <Footer />
        </div>
    )
}

export default CreateYours
