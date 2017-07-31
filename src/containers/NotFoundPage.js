import React from 'react';
import { Link } from 'react-router';


const NotFoundPage = () => (
  <div className="component-container contents-container">
    <h1>404 Page Not Found</h1>
    <Link to="/">Go back to homepage</Link>
  </div>
);

export default NotFoundPage;
