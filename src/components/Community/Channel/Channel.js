import React from "react";
import styles from "./Channel.module.css";
import Diagnosis from "../../SVGs/Diagnosis";
import Therapy from "../../SVGs/Therapy";
import Relationships from "../../SVGs/Relationships";

function sayHello() {
    alert('Don"t be a link!');
  }
  
class Channel extends React.Component {
    render() {
        return (
            <div className={styles.Backdrop}>

              <div className={styles.Channel}>
                <button onClick={sayHello}>
                  <div href="Diagnosis" className={styles.IconLrg}>
                    <Diagnosis />
                    <div className={styles.IconText}>
                      Diagnosis
                    </div>
                  </div>
                </button>
              </div>

              <div className={styles.Channel}>
                <button onClick={sayHello}>
                  <div href="Therapy" className={styles.IconLrg}>
                    <Therapy/>
                    <div className={styles.IconText}>
                      Therapy
                    </div>
                  </div>
                </button>
              </div>

              <div className={styles.Channel}>
                <button onClick={sayHello}>
                  <div href="Relationships" className={styles.IconLrg}>
                    <Relationships />
                    <div className={styles.IconText}>
                        Relationships
                    </div>
                  </div>
                </button>
              </div>
              
          </div>
        )
      }
    }

export default Channel;
