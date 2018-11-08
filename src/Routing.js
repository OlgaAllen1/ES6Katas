import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Layout/Home/Home.js'

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const Routing = () => (
  <Router>
    <switch>
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
    </switch>
    {/*<div>*/}
      {/*<nav>*/}
        {/*<ul>*/}
          {/*<li>*/}
            {/*<Link to="/">Home</Link>*/}
          {/*</li>*/}
          {/*<li>*/}
            {/*<Link to="/about/">About</Link>*/}
          {/*</li>*/}
          {/*<li>*/}
            {/*<Link to="/users/">Users</Link>*/}
          {/*</li>*/}
        {/*</ul>*/}
      {/*</nav>*/}
    {/*</div>*/}
  </Router>
);

export default Routing;
