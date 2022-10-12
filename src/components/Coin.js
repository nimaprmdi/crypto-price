import React from "react";

import styles from "../assets/css/Coin.module.css";

const Coin = ({ coinData }) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={coinData.image} alt={coinData.name} />
            <span className={styles.name}>{coinData.name}</span>
            <span className={styles.symbol}>{coinData.symbol.toUpperCase()}</span>
            <span className={styles.currentPrice}>{coinData.current_price.toLocaleString()}</span>
            <span className={coinData.priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange}>
                {coinData.price_change_24h}
            </span>
            <span className={styles.marketCap}>{coinData.market_cap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;
