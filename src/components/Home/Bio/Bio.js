import React from "react";
import styles from "./Bio.module.css";
// import ExpandBio from "./ExpandBio/ExpandBio";
// import Avatar from "../../SVGs/Avatar";

// need to make Header's text "Home"


class Bio extends React.Component {
    render() {
        return (
            <div className={styles.Backdrop}>
                <div>
                    <div className={styles.UserAvatar}>
                    </div>
                </div>
                <div>
                    <div className={styles.UserName}>
                        Jane Doe
                    </div>
                    <div className={styles.AboutUser}>
                        Realm of the galaxies brain is the seed of intelligence Orion's sword the brain is the seed sword is the seed of  Realm of the galaxies brain 
                    </div>
                </div>
            </div> )
        }
    }

export default Bio; 