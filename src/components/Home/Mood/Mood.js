import React from "react";
import styles from "./Mood.module.css";
import NeutralFace from "../../SVGs/NeutralFace";

class Mood extends React.Component {
    render() {
        return (
            <div className={styles.Container}>
                <div className={styles.Header}> 
                    Mood
                </div>
                <div className={styles.Backdrop}>
                    <div className={styles.PlaceHolder}>
                        No data available    
                        <div className={styles.Button}>
                            RATE YOUR MOOD
                        </div>         
                    </div>
                    <div className={styles.NeutralFace}>
                            <NeutralFace />
                    </div>  
                </div>
            </div>
            )
        }
    }

export default Mood; 