import React from 'react'

import "./CurrentBiddings.css"

const CurrentBiddings = () => {
    return (
        <div className='current-biddings-container text-white px-lg-5  py-5'>
            <div className="current-biddings-title d-flex flex-column flex-md-row justify-content-between   align-items-center my-5">
                <h4>Current Biddings Price ( ETH )</h4>
                <select className='current-biddings-select bg-dark text-white border-0 rounded-3 fw-bold ' name="" id="">
                    <option value="">Sort By:Latest</option>
                    <option value="">Sort By:Highest</option>
                    <option value="">Sort By:Lowest</option>
                    <option value="">Sort By:Oldest</option>
                </select>
            </div>
            <div className="opportunity-container">
                <div className="row gy-3 ">
                    <div className='col-lg-6  col-xl-4'>
                        <div className="opportunity-card d-flex ">

                            <div className="opportunity-card-left">
                                <img src="/images/current-01.jpg" alt="" />
                            </div>
                            <div className="opportunity-card-right  py-4  ms-4 ">
                                <div className="opportunity-card-name ">
                                    <h5>David Walker</h5>
                                    <span className='fw-bold' style={{ color: "rgba(116,83,252)" }}>@davidwalker</span>
                                </div>
                                <div className="opportunity-card-price mt-3">
                                    <h5>Bid: <span style={{ color: "rgba(116,83,252)" }}>0.06 ETH</span></h5>
                                    <span style={{ color: "rgba(116,83,252)" }}>24/07/2022, 22:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6  col-xl-4'>
                        <div className="opportunity-card d-flex ">

                            <div className="opportunity-card-left">
                                <img src="/images/current-02.jpg" alt="" />
                            </div>
                            <div className="opportunity-card-right  py-4  ms-4 ">
                                <div className="opportunity-card-name ">
                                    <h5>David Walker</h5>
                                    <span className='fw-bold' style={{ color: "rgba(116,83,252)" }}>@davidwalker</span>
                                </div>
                                <div className="opportunity-card-price mt-3">
                                    <h5>Bid: <span style={{ color: "rgba(116,83,252)" }}>0.06 ETH</span></h5>
                                    <span style={{ color: "rgba(116,83,252)" }}>24/07/2022, 22:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6  col-xl-4'>
                        <div className="opportunity-card d-flex ">

                            <div className="opportunity-card-left">
                                <img src="/images/current-03.jpg" alt="" />
                            </div>
                            <div className="opportunity-card-right  py-4  ms-4 ">
                                <div className="opportunity-card-name ">
                                    <h5>David Walker</h5>
                                    <span className='fw-bold' style={{ color: "rgba(116,83,252)" }}>@davidwalker</span>
                                </div>
                                <div className="opportunity-card-price mt-3">
                                    <h5>Bid: <span style={{ color: "rgba(116,83,252)" }}>0.06 ETH</span></h5>
                                    <span style={{ color: "rgba(116,83,252)" }}>24/07/2022, 22:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6  col-xl-4'>
                        <div className="opportunity-card d-flex ">

                            <div className="opportunity-card-left">
                                <img src="/images/current-03.jpg" alt="" />
                            </div>
                            <div className="opportunity-card-right  py-4  ms-4 ">
                                <div className="opportunity-card-name ">
                                    <h5>David Walker</h5>
                                    <span className='fw-bold' style={{ color: "rgba(116,83,252)" }}>@davidwalker</span>
                                </div>
                                <div className="opportunity-card-price mt-3">
                                    <h5>Bid: <span style={{ color: "rgba(116,83,252)" }}>0.06 ETH</span></h5>
                                    <span style={{ color: "rgba(116,83,252)" }}>24/07/2022, 22:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6  col-xl-4'>
                        <div className="opportunity-card d-flex ">

                            <div className="opportunity-card-left">
                                <img src="/images/current-04.jpg" alt="" />
                            </div>
                            <div className="opportunity-card-right  py-4  ms-4 ">
                                <div className="opportunity-card-name ">
                                    <h5>David Walker</h5>
                                    <span className='fw-bold' style={{ color: "rgba(116,83,252)" }}>@davidwalker</span>
                                </div>
                                <div className="opportunity-card-price mt-3">
                                    <h5>Bid: <span style={{ color: "rgba(116,83,252)" }}>0.06 ETH</span></h5>
                                    <span style={{ color: "rgba(116,83,252)" }}>24/07/2022, 22:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6  col-xl-4'>
                        <div className="opportunity-card d-flex ">

                            <div className="opportunity-card-left">
                                <img src="/images/current-01.jpg" alt="" />
                            </div>
                            <div className="opportunity-card-right  py-4  ms-4 ">
                                <div className="opportunity-card-name ">
                                    <h5>David Walker</h5>
                                    <span className='fw-bold' style={{ color: "rgba(116,83,252)" }}>@davidwalker</span>
                                </div>
                                <div className="opportunity-card-price mt-3">
                                    <h5>Bid: <span style={{ color: "rgba(116,83,252)" }}>0.06 ETH</span></h5>
                                    <span style={{ color: "rgba(116,83,252)" }}>24/07/2022, 22:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentBiddings
