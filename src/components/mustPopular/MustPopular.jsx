import React from 'react'
import Collections from '../collections/Collections'


import "./MustPopular.css"

const MustPopular = () => {


    return (
        <div>
            <div className="must-popular">
                <div className="catagories">
                    <h1 className="catagories-title my-5 text-white text-center">Browse Through Our <span>Categories </span> Here.</h1>
                    <div className="catagories-box-container ">
                        <div className="row px-5 ">
                            <div className="p-box p-3 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="catagories-box d-flex flex-column justify-content-between align-items-center  ">
                                    <div className="catagories-img-box">
                                        <img src="images/icon-01.png" alt="" />
                                    </div>
                                    BlockChain

                                </div>
                            </div>
                            <div className="p-box p-3 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="catagories-box d-flex flex-column justify-content-between align-items-center  ">
                                    <div className="catagories-img-box">
                                        <img src="images/icon-02.png" alt="" />
                                    </div>
                                    Digital Art

                                </div>
                            </div>
                            <div className="p-box p-3 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="catagories-box d-flex flex-column justify-content-between align-items-center  ">
                                    <div className="catagories-img-box">
                                        <img src="images/icon-03.png" alt="" />
                                    </div>
                                    Music Art

                                </div>
                            </div>
                            <div className="p-box p-3 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="catagories-box d-flex flex-column justify-content-between align-items-center  ">
                                    <div className="catagories-img-box">
                                        <img src="images/icon-04.png" alt="" />
                                    </div>
                                    Virtual World

                                </div>
                            </div>
                            <div className="p-box p-3 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="catagories-box d-flex flex-column justify-content-between align-items-center  ">
                                    <div className="catagories-img-box">
                                        <img src="images/icon-05.png" alt="" />
                                    </div>
                                    Valuable

                                </div>
                            </div>
                            <div className="p-box p-3 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                <div className="catagories-box d-flex flex-column justify-content-between align-items-center  ">
                                    <div className="catagories-img-box">
                                        <img src="images/icon-06.png" alt="" />
                                    </div>
                                    Triple NFT

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Collections />
            </div>
        </div>
    )
}

export default MustPopular
