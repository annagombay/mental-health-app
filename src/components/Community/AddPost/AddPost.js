import React from "react";
import styles from "./AddPost.module.css";
import Send from "../../SVGs/Send";
import Avatar from "../../SVGs/Avatar";

class AddPost extends React.Component {
    render() {
        return (
        <div className={styles.Backdrop}>
            <div className={styles.Avatar}>
                <Avatar />
            </div>
            <div className={styles.Textbox}>
            Add a post...
            </div>
            <div className={styles.Send}>
                <Send />
            </div>
        </div> )
    }
}

export default AddPost;