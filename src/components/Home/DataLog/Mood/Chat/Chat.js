import React from "react";
import styles from "./Chat.module.css";

class Chat extends React.Component {
    render() {
        return (
            <div className={styles.Chat}>
                <div className={styles.Date}>
                    Tue, Dec 7
                </div>

                <div className={styles.Prompt}>
                    How are you feeling today, Jane? 
                </div>
            </div>)
        }
    }

export default Chat; 