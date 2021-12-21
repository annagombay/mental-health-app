import React from "react";
import Search from "../../SVGs/Search";
import styles from "./Searchbar.module.css";

class Searchbar extends React.Component {
    render() {
        return (
            <div className={styles.Searchbar}>
                <div className={styles.Searchbox}>
                    <div className={styles.Search}>
                        <Search />
                    </div>
                </div>
            </div> )
        }   
    }

export default Searchbar;