// Imports //
import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  // Link
} from 'react-router-dom';
import Header from './components/Static/Header/Header';
import Footer from './components/Static/Footer/Footer';
import Mood from './components/Home/DataLog/Mood/Mood';
// import KnowledgeBase from "./components/KnowledgeBase/KnowledgeBase";
import Home from "./components/Home/Home";
import CommunityPage from "./components/Community/CommunityPage";

// Functions //

// function scrollReset() {
//   window.scrollTo(0,0);
// }

class App extends React.Component {
  render() {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         color: "#FFFBF7",
    //     };
    //   }

    //   changeColor = () => {
    //     this.setState({color: "black"});
    //   }
    return (
      <BrowserRouter>
        <div>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/*" element={<CommunityPage />} />
              <Route path="/Mood" element={<Mood />} />
            </Routes>
          <Footer />=
        </div>
      </BrowserRouter> );
    }
  }

export default App;

// A module can only have one default export, but as many named exports as you'd like

// The default exports tend to be used for whatever you normally expect to get from the module. The named exports tend to be used for utilities that might be handy, but aren’t always necessary. 

// Eg: export const A = 42, import A, { myA, Something } from './A'


// The anchor tag in HTML is used to navigate to different web pages using an href attribute. This href attribute contains the URL or path to the destination page. It may be a relative URL or an absolute URL. In React, relative URLs should always be handled by the link tag provided by the React Router, and pure anchor tags should only be used for absolute paths. You can also think of relative URLs as in-app navigation, for example navigating to a particular route of the app and absolute paths as external links. 


// scrollTo(0,0) <-- make scroll reset to top of page when refreshed