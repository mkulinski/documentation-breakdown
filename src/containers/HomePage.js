import React from 'react';

import Heading from '../components/Heading';
import SplitPane from '../components/SplitPane';

import '../styles/home-page.scss';


const HomePage = () => {
  return (
    <div className="component-container">
      <Heading value="Engage-UI" />
      <div className="parent">
        <div className="wrapper">
          <SplitPane
            split="vertical"
            minSize={50}
            maxSize={300}
            defaultSize={100}
          >
            <div />
            <div />
          </SplitPane>
        </div>
      </div>
    </div>
  );
};

HomePage.propTypes = {
};

export default HomePage;
