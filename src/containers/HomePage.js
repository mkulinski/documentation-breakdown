import React from 'react';

import Heading from '../components/Heading';

import '../styles/home-page.scss';


const HomePage = () => {
  return (
    <div className="component-container">
      <Heading value="Engage-UI" />
      <p>This is the home or root page for the engage-ui docs</p>
      <p>Just some text about how amazing the engage-ui library truely is</p>
    </div>
  );
};

HomePage.propTypes = {
};

export default HomePage;
