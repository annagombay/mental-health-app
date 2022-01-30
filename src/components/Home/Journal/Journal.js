// import { style } from "@mui/system";
import React from "react";
import styles from "./Journal.module.css";


class Journal extends React.Component {
    render() {
        return (
        <div className={styles.Container}>
            <div className={styles.JournalHeader}> 
                Journal
            </div>
            <div className={styles.Journal}>
                <div className={styles.Entries}> 
                    <div className={styles.Entry}>
                        <div className={styles.Calendar}>
                            <div className={styles.Day}>
                                SAT
                            </div>
                            <div className={styles.Number}>
                                22
                            </div>
                        </div>
                        <div className={styles.Tags}>
                            <div className={styles.Tag}>
                                #gloomy
                            </div>
                            <div className={styles.Time}>
                                10:37 pm
                            </div>
                        </div>
                        <div className={styles.Content}>
                        Too many days I have spent feeling like I could feel the inside of my mind... more
                        </div>
                    </div>
                    <div className={styles.Entry}>
                        <div className={styles.Calendar}>
                            <div className={styles.Day}>
                                FRI
                            </div>
                            <div className={styles.Number}>
                                21
                            </div>
                        </div>
                        <div className={styles.Tags}>
                            <div className={styles.Tag}>
                                #calm
                            </div>
                            <div className={styles.Time}>
                                10:37 pm
                            </div>
                        </div>
                        <div className={styles.Content}>
                        Today feels nice and I can concentrate on things... more
                        </div>
                    </div>
                </div>
            </div>
        </div> )
    }
}

export default Journal; 


