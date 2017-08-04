import React from 'react';
import Heading from '../../components/Heading';

const HeadingExample = () => {
  return (
    <div className="heading-container">
      <Heading
        value="2 Chainz"
        className="main-heading"
      />
    </div>
  );
};

HeadingExample.propTypes = {
};

export default HeadingExample;
