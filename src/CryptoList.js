import React from "react";
import CryptoCard from "./CryptoCard";

const CryptoList = ({ coinsData }) => {

    return(
        <div className="crypto_list">
            {
                coinsData?.map((coin, index) => {
                    return (
                        <CryptoCard 
                            key={index}
                            name={coin.name}
                            image={coin.image}
                            price={coin.current_price}
                        />
                    )
                })
            }
        </div>
    )
}

export default CryptoList;