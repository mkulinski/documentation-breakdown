import React, { PropTypes } from 'react';

import '../../styles/subheading.scss';


const Subheading = ({ value, className }) => {
  const containerClass = `default-heading ${className}`;
  return (
    <div className={containerClass}>
      <h3>{value}</h3>
    </div>
  );
};

Subheading.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
};

export default Subheading;
