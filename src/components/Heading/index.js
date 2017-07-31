import React, { PropTypes } from 'react';

import '../../styles/heading.scss';


const Heading = ({ value, className }) => {
  const containerClass = `default-heading ${className}`;
  return (
    <div className={containerClass}>
      <h1>{value}</h1>
    </div>
  );
};

Heading.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Heading;
