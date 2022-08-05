import React from 'react'

import "./ItemMarket.css"

const ItemMarket = () => {
    return (
        <div className='item-market py-5 '>
            <div className=' d-flex flex-column flex-md-row  justify-content-between mb-5 px-5 align-items-center'>
                <h2 className='text-white'><span className='item-market-title-span '>Items</span>   Currently In The Market.</h2>
                <ul className="nav nav-pills nft-tab-panel d-flex justify-content-between">

                    <li className="nav-item ">
                        <button id='Tproject' className="nav-link  w-100 active" aria-current="page" data-bs-toggle="tab" data-bs-target="#All-items" >All</button>
                    </li>
                    <li className="nav-item">
                        <button id='Tart' className="nav-link  w-100 " aria-current="page" data-bs-toggle="tab" data-bs-target="#art" >Art</button>
                    </li>
                    <li className="nav-item">
                        <button id='Tdigital-art' className="nav-link  w-100  " aria-current="page" data-bs-toggle="tab" data-bs-target="#digital-art" >Digital Art</button>
                    </li>


                </ul>
            </div>
            <div className="tab-content">
                <div id='All-items' className="tab-pane fade show active">
                    <div className="row p-lg-5 gy-5">
                        <div className="nft-market-item col-lg-6 px-md-5 mx-auto  ">
                            <div className="nft-market-item-box text-white d-flex  ">
                                <div className="nft-market-item-box-img ms-4 ">
                                    <img className='img-fluid' src="/images/market-01.jpg" alt="" />
                                </div>
                                <div className="nft-market-item-content  d-flex flex-column w-100 px-3">
                                    <div className="nft-market-info">
                                        <h4>Music Art Super Item</h4>
                                        <div className="nft-market-info-user d-flex align-items-center  ">
                                            <img className='rounded rounded-circle me-2' src="/images/author.jpg" alt="" />
                                            <span className='d-flex flex-column  justify-content-center'>
                                                <span>Liberty Artist</span>
                                                <a href=''>@libertyart</a>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="nft-market-item-price d-flex justify-content-between mt-1" >
                                        <div className='d-flex flex-column  justify-content-evenly' >
                                            <span>Current Bid</span>
                                            <span className='fw-bold' style={{ fontSize: "1.3rem" }} > 2.03 ETH</span>
                                            <span> ($8,240.50)</span>
                                        </div>
                                        <div className='text-end d-none d-sm-flex flex-column justify-content-evenly'>
                                            <span>Ends In</span>
                                            <span className='fw-bold' style={{ fontSize: "1.3rem" }} >4D 08H 32M 18S</span>
                                            <span>(July 16th, 2022)</span>
                                        </div>
                                    </div>
                                    <div className="nft-market-item-link mt-auto">
                                        <a href="">View Item Details</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="nft-market-item col-lg-6 px-md-5 mx-auto  ">
                            <div className="nft-market-item-box text-white d-flex  ">
                                <div className="nft-market-item-box-img ms-4 ">
                                    <img className='img-fluid' src="/images/market-01.jpg" alt="" />
                                </div>
                                <div className="nft-market-item-content  d-flex flex-column w-100 px-3">
                                    <div className="nft-market-info">
                                        <h4>Music Art Super Item</h4>
                                        <div className="nft-market-info-user d-flex align-items-center  ">
                                            <img className='rounded rounded-circle me-2' src="/images/author.jpg" alt="" />
                                            <span className='d-flex flex-column  justify-content-center'>
                                                <span>Liberty Artist</span>
                                                <a href=''>@libertyart</a>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="nft-market-item-price d-flex justify-content-between mt-1" >
                                        <div className='d-flex flex-column  justify-content-evenly' >
                                            <span>Current Bid</span>
                                            <span className='fw-bold' style={{ fontSize: "1.3rem" }} > 2.03 ETH</span>
                                            <span> ($8,240.50)</span>
                                        </div>
                                        <div className='text-end d-none d-sm-flex flex-column justify-content-evenly'>
                                            <span>Ends In</span>
                                            <span className='fw-bold' style={{ fontSize: "1.3rem" }} >4D 08H 32M 18S</span>
                                            <span>(July 16th, 2022)</span>
                                        </div>
                                    </div>
                                    <div className="nft-market-item-link mt-auto">
                                        <a href="">View Item Details</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="nft-market-item col-lg-6 px-md-5 mx-auto   ">
                            <div className="nft-market-item-box text-white d-flex  ">
                                <div className="nft-market-item-box-img ms-4 ">
                                    <img className='img-fluid' src="/images/market-01.jpg" alt="" />
                                </div>
                                <div className="nft-market-item-content  d-flex flex-column w-100 px-3">
                                    <div className="nft-market-info">
                                        <h4>Music Art Super Item</h4>
                                        <div className="nft-market-info-user d-flex align-items-center  ">
                                            <img className='rounded rounded-circle me-2' src="/images/author.jpg" alt="" />
                                            <span className='d-flex flex-column  justify-content-center'>
                                                <span>Liberty Artist</span>
                                                <a href=''>@libertyart</a>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="nft-market-item-price d-flex justify-content-between mt-1" >
                                        <div className='d-flex flex-column  justify-content-evenly' >
                                            <span>Current Bid</span>
                                            <span className='fw-bold' style={{ fontSize: "1.3rem" }} > 2.03 ETH</span>
                                            <span> ($8,240.50)</span>
                                        </div>
                                        <div className='text-end d-none d-sm-flex flex-column justify-content-evenly'>
                                            <span>Ends In</span>
                                            <span className='fw-bold' style={{ fontSize: "1.3rem" }} >4D 08H 32M 18S</span>
                                            <span>(July 16th, 2022)</span>
                                        </div>
                                    </div>
                                    <div className="nft-market-item-link mt-auto">
                                        <a href="">View Item Details</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="nft-market-item col-lg-6 px-md-5 mx-auto   ">
                            <div className="nft-market-item-box text-white d-flex  ">
                                <div className="nft-market-item-box-img ms-4 ">
                                    <img className='img-fluid' src="/images/market-01.jpg" alt="" />
                                </div>
                                <div className="nft-market-item-content  d-flex flex-column w-100 px-3">
                                    <div className="nft-market-info">
                                        <h4>Music Art Super Item</h4>
                                        <div className="nft-market-info-user d-flex align-items-center  ">
                                            <img className='rounded rounded-circle me-2' src="/images/author.jpg" alt="" />
                                            <span className='d-flex flex-column  justify-content-center'>
                                                <span>Liberty Artist</span>
                                                <a href=''>@libertyart</a>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="nft-market-item-price d-flex justify-content-between mt-1" >
                                        <div className='d-flex flex-column  justify-content-evenly' >
                                            <span>Current Bid</span>
                                            <span className='fw-bold' style={{ fontSize: "1.3rem" }} > 2.03 ETH</span>
                                            <span> ($8,240.50)</span>
                                        </div>
                                        <div className='text-end d-none d-sm-flex flex-column justify-content-evenly'>
                                            <span>Ends In</span>
                                            <span className='fw-bold' style={{ fontSize: "1.3rem" }} >4D 08H 32M 18S</span>
                                            <span>(July 16th, 2022)</span>
                                        </div>
                                    </div>
                                    <div className="nft-market-item-link mt-auto">
                                        <a href="">View Item Details</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="nft-market-item col-lg-6 px-md-5 mx-auto   ">
                            <div className="nft-market-item-box text-white d-flex  ">
                                <div className="nft-market-item-box-img ms-4 ">
                                    <img className='img-fluid' src="/images/market-01.jpg" alt="" />
                                </div>
                                <div className="nft-market-item-content  d-flex flex-column w-100 px-3">
                                    <div className="nft-market-info">
                                        <h4>Music Art Super Item</h4>
                                        <div className="nft-market-info-user d-flex align-items-center  ">
                                            <img className='rounded rounded-circle me-2' src="/images/author.jpg" alt="" />
                                            <span className='d-flex flex-column  justify-content-center'>
                                                <span>Liberty Artist</span>
                                                <a href=''>@libertyart</a>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="nft-market-item-price d-flex justify-content-between mt-1" >
                                        <div className='d-flex flex-column  justify-content-evenly' >
                                            <span>Current Bid</span>
                                            <span className='fw-bold' style={{ fontSize: "1.3rem" }} > 2.03 ETH</span>
                                            <span> ($8,240.50)</span>
                                        </div>
                                        <div className='text-end d-none d-sm-flex flex-column justify-content-evenly'>
                                            <span>Ends In</span>
                                            <span className='fw-bold' style={{ fontSize: "1.3rem" }} >4D 08H 32M 18S</span>
                                            <span>(July 16th, 2022)</span>
                                        </div>
                                    </div>
                                    <div className="nft-market-item-link mt-auto">
                                        <a href="">View Item Details</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="nft-market-item col-lg-6 px-md-5 mx-auto   ">
                            <div className="nft-market-item-box text-white d-flex  ">
                                <div className="nft-market-item-box-img ms-4 ">
                                    <img className='img-fluid' src="/images/market-01.jpg" alt="" />
                                </div>
                                <div className="nft-market-item-content  d-flex flex-column w-100 px-3">
                                    <div className="nft-market-info">
                                        <h4>Music Art Super Item</h4>
                                        <div className="nft-market-info-user d-flex align-items-center  ">
                                            <img className='rounded rounded-circle me-2' src="/images/author.jpg" alt="" />
                                            <span className='d-flex flex-column  justify-content-center'>
                                                <span>Liberty Artist</span>
                                                <a href=''>@libertyart</a>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="nft-market-item-price d-flex justify-content-between mt-1" >
                                        <div className='d-flex flex-column  justify-content-evenly' >
                                            <span>Current Bid</span>
                                            <span className='fw-bold' style={{ fontSize: "1.3rem" }} > 2.03 ETH</span>
                                            <span> ($8,240.50)</span>
                                        </div>
                                        <div className='text-end d-none d-sm-flex flex-column justify-content-evenly'>
                                            <span>Ends In</span>
                                            <span className='fw-bold' style={{ fontSize: "1.3rem" }} >4D 08H 32M 18S</span>
                                            <span>(July 16th, 2022)</span>
                                        </div>
                                    </div>
                                    <div className="nft-market-item-link mt-auto">
                                        <a href="">View Item Details</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div id='art' className="tab-pane fade  text-center text-white ">
                    <div className="row p-lg-5 gy-5">



                        <div className="nft-market-item col-lg-6 px-md-5 mx-auto   ">
                            <div className="nft-market-item-box text-white d-flex  ">
                                <div className="nft-market-item-box-img ms-4 ">
                                    <img className='img-fluid' src="/images/market-01.jpg" alt="" />
                                </div>
                                <div className="nft-market-item-content  d-flex flex-column w-100 px-3">
                                    <div className="nft-market-info">
                                        <h4>Music Art Super Item</h4>
                                        <div className="nft-market-info-user d-flex align-items-center  ">
                                            <img className='rounded rounded-circle me-2' src="/images/author.jpg" alt="" />
                                            <span className='d-flex flex-column  justify-content-center'>
                                                <span>Liberty Artist</span>
                                                <a href=''>@libertyart</a>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="nft-market-item-price d-flex justify-content-between mt-1" >
                                        <div className='d-flex flex-column  justify-content-evenly' >
                                            <span>Current Bid</span>
                                            <span className='fw-bold' style={{ fontSize: "1.3rem" }} > 2.03 ETH</span>
                                            <span> ($8,240.50)</span>
                                        </div>
                                        <div className='text-end d-none d-sm-flex flex-column justify-content-evenly'>
                                            <span>Ends In</span>
                                            <span className='fw-bold' style={{ fontSize: "1.3rem" }} >4D 08H 32M 18S</span>
                                            <span>(July 16th, 2022)</span>
                                        </div>
                                    </div>
                                    <div className="nft-market-item-link mt-auto">
                                        <a href="">View Item Details</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="nft-market-item col-lg-6 px-md-5 mx-auto   ">
                            <div className="nft-market-item-box text-white d-flex  ">
                                <div className="nft-market-item-box-img ms-4 ">
                                    <img className='img-fluid' src="/images/market-01.jpg" alt="" />
                                </div>
                                <div className="nft-market-item-content  d-flex flex-column w-100 px-3">
                                    <div className="nft-market-info">
                                        <h4>Music Art Super Item</h4>
                                        <div className="nft-market-info-user d-flex align-items-center  ">
                                            <img className='rounded rounded-circle me-2' src="/images/author.jpg" alt="" />
                                            <span className='d-flex flex-column  justify-content-center'>
                                                <span>Liberty Artist</span>
                                                <a href=''>@libertyart</a>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="nft-market-item-price d-flex justify-content-between mt-1" >
                                        <div className='d-flex flex-column  justify-content-evenly' >
                                            <span>Current Bid</span>
                                            <span className='fw-bold' style={{ fontSize: "1.3rem" }} > 2.03 ETH</span>
                                            <span> ($8,240.50)</span>
                                        </div>
                                        <div className='text-end d-none d-sm-flex flex-column justify-content-evenly'>
                                            <span>Ends In</span>
                                            <span className='fw-bold' style={{ fontSize: "1.3rem" }} >4D 08H 32M 18S</span>
                                            <span>(July 16th, 2022)</span>
                                        </div>
                                    </div>
                                    <div className="nft-market-item-link mt-auto">
                                        <a href="">View Item Details</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div id='digital-art' className="tab-pane fade  text-center text-white  ">
                    <div className="row p-lg-5 gy-5">




                        <div className="nft-market-item col-lg-6 px-md-5 mx-auto   ">
                            <div className="nft-market-item-box text-white d-flex  ">
                                <div className="nft-market-item-box-img ms-4 ">
                                    <img className='img-fluid' src="/images/market-01.jpg" alt="" />
                                </div>
                                <div className="nft-market-item-content  d-flex flex-column w-100 px-3">
                                    <div className="nft-market-info">
                                        <h4>Music Art Super Item</h4>
                                        <div className="nft-market-info-user d-flex align-items-center  ">
                                            <img className='rounded rounded-circle me-2' src="/images/author.jpg" alt="" />
                                            <span className='d-flex flex-column  justify-content-center'>
                                                <span>Liberty Artist</span>
                                                <a href=''>@libertyart</a>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="nft-market-item-price d-flex justify-content-between mt-1" >
                                        <div className='d-flex flex-column  justify-content-evenly' >
                                            <span>Current Bid</span>
                                            <span className='fw-bold' style={{ fontSize: "1.3rem" }} > 2.03 ETH</span>
                                            <span> ($8,240.50)</span>
                                        </div>
                                        <div className='text-end d-none d-sm-flex flex-column justify-content-evenly'>
                                            <span>Ends In</span>
                                            <span className='fw-bold' style={{ fontSize: "1.3rem" }} >4D 08H 32M 18S</span>
                                            <span>(July 16th, 2022)</span>
                                        </div>
                                    </div>
                                    <div className="nft-market-item-link mt-auto">
                                        <a href="">View Item Details</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemMarket
