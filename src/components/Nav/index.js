import React from 'react';
import { Link, IndexLink } from 'react-router';

import '../styles/nav.scss';


const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li><IndexLink to="/">Home</IndexLink></li>
        <li><Link to="/component/link">Link Component</Link></li>
        <li><Link to="/component/list">List Component</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
