import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import LoadsPage from './LoadsPage';
import VendorsPage from './VendorsPage';
import BlogsPage from './BlogsPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" ></link>
        <div className="App" >
          <header className="App-header">
            <h1 id="title">Vendor Tracking System</h1>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <nav>
                  <button class="w3-button w3-white w3-round-xxlarge w3-hover-aqua"><Link to="loads" id="link">Loads</Link></button>
                  <button class="w3-button w3-white w3-round-xxlarge w3-hover-aqua"><Link to="vendors" id='link'>Vendors</Link></button>
                  <button class="w3-button w3-white w3-round-xxlarge w3-hover-aqua"><Link to="blogs" id='link'>Blogs</Link></button>
              </nav>
          </header>
          
          <Route path="/loads" component={ LoadsPage } />
          <Route path="/vendors" component={ VendorsPage } />
          <Route path="/blogs" component={ BlogsPage } />
        
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
