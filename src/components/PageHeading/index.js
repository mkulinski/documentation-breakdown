import React, { PropTypes } from 'react';

import '../../styles/page-heading.scss';


const PageHeading = ({ value, className }) => {
  const containerClass = `default-heading ${className}`;
  return (
    <div className={containerClass}>
      <h1>{value}</h1>
    </div>
  );
};

PageHeading.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default PageHeading;
