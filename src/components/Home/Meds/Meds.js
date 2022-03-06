import React from "react";
import styles from "./Meds.module.css";
import MedicationPill from "../../SVGs/MedicationPill";

class Meds extends React.Component {
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
                            ADD A MEDICATION
                        </div>         
                    </div>
                    <div className={styles.MedicationPill}>
                            <MedicationPill />
                    </div>  
                </div>
            </div>
            )
        }
    }

export default Meds; 