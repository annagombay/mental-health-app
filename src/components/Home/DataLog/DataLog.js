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

                <Link to="./DataLog/Mood/Mood" className={styles.Logs}>
                    <div className={styles.Log} >
                    <div className={styles.IconLrg}>
                            <div className={styles.IconText}>
                            Mood
                            </div>
                        </div>
                    </div>
                </Link>

            <div className={styles.Logs}>
                <div className={styles.Log}>
                        <div href="Therapy" className={styles.IconLrg}>
                            <div className={styles.IconText}>
                            Body
                            </div>
                        </div>
              </div>
            </div>

            <div className={styles.Logs}>
                <div className={styles.Log}>
                        <div href="Relationships" className={styles.IconLrg}>
                            <div className={styles.IconText}>
                                Meds
                            </div>
                        </div>
                </div>
            </div>

          </div>
        )
      }
    }

export default DataLog;
