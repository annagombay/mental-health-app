import React from "react";
import LeftSemiArc from "../../../../SVGs/LeftSemiArc";
import RightSemiArc from "../../../../SVGs/RightSemiArc";
import styles from "./MoodScale.module.css";
import LeftSparks from "../../../../SVGs/LeftSparks";
import RightSparks from "../../../../SVGs/RightSparks";
import Unpleasant from "../../../../SVGs/Unpleasant";
import Pleasant from "../../../../SVGs/Pleasant";

class MoodScale extends React.Component {
    render() {
        return (
            <div className={styles.MoodScale}>

                <div className={styles.LeftSparks}>
                    <LeftSparks /> 
                </div>

                <div className={styles.LeftSemiArc}>
                    <LeftSemiArc /> 
                    <div className={styles.Unpleasant}>
                      <Unpleasant/>
                    </div>
                </div>
                
                {/* Perform "select" feedback for LeftSemi
                    LeftSemi turns #227C9D   */}
                <div className={styles.LeftSemi}>
                
                </div> 

                <div className={styles.RightSemi}>
                    
                </div> 


                <div className={styles.RightSemiArc}>
                    <RightSemiArc /> 
                    <div className={styles.Pleasant}>
                      <Pleasant/>
                    </div>
                </div>

                <div className={styles.RightSparks}>
                    <RightSparks /> 
                </div> 

            </div> )
        }
    }

export default MoodScale; 