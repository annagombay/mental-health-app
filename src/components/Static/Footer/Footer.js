import React from "react";
import {
    // BrowserRouter,
    // Routes,
    // Route,
    Link
  } from 'react-router-dom';
import styles from './Footer.module.css';
import Sun from '../../SVGs/Sun';
import Community from "../../SVGs/Community";
// import CommunityPage from "../../Community/CommunityPage";
import KnowledgeBase from "../../SVGs/KnowledgeBase";
import Home from "../../SVGs/Home";

// function sayHello() {
//     alert('Don"t be a link!');
//   }

class Footer extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         color: "#FFFDFA",
    //     };
    //   }

    //   changeColor = () => {
    //     this.setState({color: "black"});
    //   }

    render() {
        return (
                <div className={styles.Footer}>

                    <Link to="/" className={styles.KB}>
                        <div className={styles.Sun}>
                            <Sun />
                            <div className={styles.KnowledgeBase}>
                                <KnowledgeBase />
                            </div>
                        </div>
                        Knowledge Base
                    </Link>
                    
                    <Link to="" className={styles.H}>
                        <div className={styles.Sun}>
                            <Sun />
                            <div className={styles.Home}>
                                <Home />
                            </div>
                        </div>
                        Home
                    </Link>

                    <Link to="../../Community/CommunityPage" className={styles.C}>
                        <div className={styles.Sun} >
                            <Sun />
                            <div className={styles.Community}>
                                <Community />
                            </div>
                        </div>
                        Community
                    </Link>

                </div>)
        }
    }   

export default Footer;