import React from 'react'
import Footer from '../../components/footer/Footer'
import HomeBanner from '../../components/homeBanner/HomeBanner'
import HowToCreateNft from '../../components/howToCreateNft/HowToCreateNft'
import ItemMarket from '../../components/itemMarket/ItemMarket'
import MustPopular from '../../components/mustPopular/MustPopular'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
    return (
        <div className='wrapper ' style={{ overflowX: "hidden" }}>
            <Navbar />
            <HomeBanner />
            <MustPopular />
            <HowToCreateNft />
            <ItemMarket />
            <Footer />
        </div >
    )
}

export default Home
