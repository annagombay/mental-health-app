import React from "react";
import styles from "./Home.module.css";
import Bio from "./Bio/Bio";
import HowItsGoing from "./HowItsGoing/HowItsGoing";
import DataLog from "./DataLog/DataLog";
import Filter from "./Filter/Filter";
import Card from "../Community/Card/Card";

class Home extends React.Component {
    render() {
        return (
        <div className={styles.Home}>
            <Bio />

            <HowItsGoing />

            <DataLog />

            <Filter />

            <Card />

        </div>)
    }
}

export default Home; 


