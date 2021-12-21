import React from "react";
import styles from "./Card.module.css"
import Comment from "../../SVGs/Comment";
import Share from "../../SVGs/Share";
import Bookmark from "../../SVGs/Bookmark";
import More from "../../SVGs/More";
import Upvote from "../../SVGs/Upvote";
import Downvote from "../../SVGs/Downvote";

class Channel extends React.Component {
    render() {
        return (
            <div className={styles.Backdrop}>
                <div className={styles.Card}>

                    <div className={styles.CardFooter}>
                        <div className={styles.Comment}>
                            <Comment />
                        </div>
                        <div className={styles.Share}>
                            <Share />
                        </div>
                        <div className={styles.Bookmark}>
                            <Bookmark />
                        </div>
                        <div className={styles.More}>
                            <More />
                        </div>
                    </div>

                    <div className={styles.CardHeader}>
                        <div className={styles.Upvote}>
                            <Upvote />
                        </div>
                        <div className={styles.Score}>
                            22
                        </div>
                        <div className={styles.Downvote}>
                            <Downvote />
                        </div>
                        <div className={styles.Tags}>
                            <div className={styles.Username}>
                                Jane Doe
                            </div>
                            <div className={styles.Channel}>
                                Relationships
                            </div>
                            <div className={styles.Timestamp}>
                                12 hrs
                            </div>
                        </div>
                        <div className={styles.Title}>
                            How is this it needs to fit a title that’s long
                        </div>
                        <div className={styles.Content}>
                            Realm of the galaxies brain is the seed of intelligence Orion's sword the brain is the seed sword is the seed of... more
                        </div>
                    </div>
                    
                </div>
            </div> )
        }
    }

export default Channel;