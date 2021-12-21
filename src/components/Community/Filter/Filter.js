import React from "react";
import styles from "./Filter.module.css";
import FilterIcon from "../../SVGs/FilterIcon";
import Chevron from "../../SVGs/Chevron";

class Filter extends React.Component {
    render() {
        return (
            <div className={styles.Backdrop}>
                <div className={styles.Filter}>
                    <FilterIcon />
                    New
                    <div className={styles.Chevron}>
                        <Chevron />
                    </div>
                </div>
            </div> )
        }
    }

export default Filter;