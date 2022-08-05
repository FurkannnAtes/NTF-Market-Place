import React from 'react'
import DiscoverTopItems from '../../components/discoverTopItems/DiscoverTopItems'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import OurItems from '../../components/ourItems/OurItems'
import TopSellers from '../../components/topSellers/TopSellers'


import "./Explore.css"
const Explore = () => {
    return (
        <div className='wrapper ' style={{ overflowX: "hidden" }}>
            <Navbar />
            <DiscoverTopItems />
            <div className='our-items-bg'>
                <div className=' d-flex flex-column flex-xl-row  justify-content-between p-5'>
                    <h2 className="our-items-title text-white  mb-4 ">
                        Discover Some Of Our <span> Items.</span>
                    </h2>
                    <div className="our-items-search d-flex flex-column flex-xl-row justify-content-between">
                        <input type="text" placeholder='Type Something...' />
                        <select name="" id="">
                            <option value="All Categories" hidden>All Categories</option>
                            <option value="Music" >Music</option>
                            <option value="Digital" >Digital</option>
                            <option value="BlockChain" >BlockChain</option>
                            <option value="Virtual" >Virtual</option>
                        </select>
                        <select name="" id="">
                            <option value="Avaible" hidden>Avaible</option>
                            <option value="Ending soon" >Ending soon</option>
                            <option value="Coming soon" >Coming soon</option>
                            <option value="Close" >Close</option>

                        </select>
                        <button className='search-btn'>Search</button>
                    </div>
                </div>
                <OurItems />
            </div>

            <TopSellers />
            <Footer />
        </div>
    )
}

export default Explore
