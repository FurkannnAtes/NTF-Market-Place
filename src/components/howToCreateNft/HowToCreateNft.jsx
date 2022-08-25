

import "./HowToCreateNft.css"

const HowToCreateNft = () => {
    return (
        <div className='howToCreateNft p-5'>
            <div className='d-flex flex-column flex-lg-row justify-content-between mt-5 '>
                <h2 className='text-white how-to-create-nft-title'>Create Your NFT & Put It On The Market.</h2>
                <button className='text-white htc-button mb-lg-5 mb-3'>Create Your NFT Now</button>
            </div>
            <div className="row mt-5">
                <div className="htc-box col-lg-4 text-white text-center text-lg-start mb-3">
                    <div className="htc-box-img d-flex justify-content-center align-item-center   mx-auto me-lg-0 ms-lg-0 mb-lg-5 mb-3">
                        <img src="/images/icon-01.png" alt="" />
                    </div>
                    <h2 className='htc-box-title'>
                        Set Up Your Wallet
                    </h2>
                    <p className='htc-box-content'>NFT means Non-Fungible Token that are used in digital cryptocurrency markets. There are many different kinds of NFTs in the industry.</p>
                </div>
                <div className="htc-box col-lg-4 text-white text-center text-lg-start mb-3">
                    <div className="htc-box-img d-flex justify-content-center align-item-center  mx-auto me-lg-0 ms-lg-0 mb-lg-5 mb-3 ">
                        <img src="/images/icon-02.png" alt="" />
                    </div>
                    <h2 className='htc-box-title'>
                        Set Up Your Wallet
                    </h2>
                    <p className='htc-box-content'>NFT means Non-Fungible Token that are used in digital cryptocurrency markets. There are many different kinds of NFTs in the industry.</p>
                </div>
                <div className="htc-box col-lg-4 text-white text-center text-lg-start mb-3">
                    <div className="htc-box-img d-flex justify-content-center align-item-center text-center  mx-auto me-lg-0 ms-lg-0 mb-lg-5 mb-3 ">
                        <img src="/images/icon-03.png" alt="" />
                    </div>
                    <h2 className='htc-box-title'>
                        Set Up Your Wallet
                    </h2>
                    <p className='htc-box-content'>NFT means Non-Fungible Token that are used in digital <a href="/" className='text-decoration-none '>cryptocurrency</a>  markets. There are many different kinds of NFTs in the industry.</p>
                </div>
            </div>
        </div>
    )
}

export default HowToCreateNft
