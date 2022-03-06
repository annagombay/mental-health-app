import React from 'react';
import styles from './Community.module.css';
import Searchbar from './Searchbar/Searchbar';
import Channel from './Channel/Channel';
import Filter from './Filter/Filter';
import Card from './Card/Card';
import AddPost from './AddPost/AddPost';

class CommunityPage extends React.Component {
    render() {
      // constructor(props) {
      //     super(props);
      //     this.state = {
      //         color: "#FFFDFA",
      //     };
      //   }
  
      //   changeColor = () => {
      //     this.setState({color: "black"});
      //   }
      return (
          <div className={styles.Community}>
            <Searchbar />
            <Channel />
            <Filter />
            <Card />
            <AddPost />
          </div> );
      }
    }
  
  export default CommunityPage;