import React, { useState, useEffect } from "react";
import { getCoins } from "../services/api";
import Coin from "./Coin";

// Components
import Loader from "./Loader";

import styles from "../assets/css/Landing.module.css";

const Landing = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchApi = async () => {
            const data = await getCoins();
            setCoins(data);
            console.log(data);
        };

        fetchApi();
    }, []);

    const searchHandler = (e) => {
        setSearch(e.target.value);
    };

    const searchedCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            {coins.length > 0 ? (
                <div className={styles.coinContainer}>
                    <div className={styles.inputContainer}>
                        <input className={styles.input} type="text" placeholder="Search" onChange={searchHandler} />
                    </div>

                    {searchedCoins.map((coin) => (
                        <Coin key={coin.id} coinData={coin} />
                    ))}
                </div>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default Landing;
