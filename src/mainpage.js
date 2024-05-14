import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App1 = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/placements">Placements</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/apply-now">Apply now</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/placements" component={Placements} />
        <Route path="/about" component={About} />
        <Route path="/apply-now" component={ApplyNow} />
      </div>
    </Router>
  );
};

const Home = () => {
  return <h1>Welcome to Presidency College</h1>;
};

const Placements = () => {
  return <h1>Placements at Presidency College</h1>;
};

const About = () => {
  return <h1>About Presidency College</h1>;
};

const ApplyNow = () => {
  return <h1>Apply now to Presidency College</h1>;
};

export default App1;