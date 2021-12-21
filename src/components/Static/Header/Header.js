import React from "react";
import Settings from '../../SVGs/Settings'; 
import styles from './Header.module.css';

class Header extends React.Component {
    render() {
        return (
            <div className={styles.Header}>
                
                <div className={styles.Title}>
                    Community
                </div>

                <div className={styles.Settings}>
                    <Settings />
                </div>
                
            </div>
            )
        }
    }

export default Header;