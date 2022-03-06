import React from "react";
import styles from "./DataLog.module.css";
import {
    // BrowserRouter,
    // Routes,
    // Route,
    Link
  } from 'react-router-dom';

class DataLog extends React.Component {
    render() {
        return (
            <div className={styles.Backdrop}>
                <div className={styles.Container}>
                    <Link to="./Mood" className={styles.Logs}>
                        <div className={styles.Log}>
                        </div>
                        <div className={styles.Header}>
                            Mood
                        </div>
                    </Link>
                    <div className={styles.Logs}>
                        <div className={styles.Log}>
                        </div>
                        <div className={styles.Header}>
                            Meds
                        </div>
                    </div>
                </div>

            </div> )
        }
    }

export default DataLog;
