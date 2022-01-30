import React from "react";
import styles from "./Mood.module.css";
// import Chat from "./";
import MoodScale from "./MoodScale/MoodScale";
import Chat from "./Chat/Chat";


class Mood extends React.Component {
    render() {
        return (
            <div className={styles.Mood}>
            <Chat />
               <MoodScale />
            </div> )
        }
    }

export default Mood; 