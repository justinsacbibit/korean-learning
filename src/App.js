import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MoneyTestingView from "./MoneyTestingView";
import HomeView from "./HomeView";
import TimeTestingView from "./TimeTestingView";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const path = urlParams.get('p');
    if (path) {
      window.location.replace('/korean-learning' + path);
    }
  });
  return (
    <Router basename="/korean-learning">
      <div className="">
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              {/*<li className="nav-item">*/}
              {/*  <Link to="/money">*/}
              {/*    <a className="nav-link" href="#">Money</a>*/}
              {/*  </Link>*/}
              {/*</li>*/}
              <li className="nav-item">
                <Link className="nav-link" to="/time">
                  Time
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='container py-5'>
          <Route path="/" exact component={HomeView} />
          <Route path="/money" component={MoneyTestingView} />
          <Route path="/time" component={TimeTestingView} />
        </div>
      </div>
    </Router>
  );
};

export default App;
