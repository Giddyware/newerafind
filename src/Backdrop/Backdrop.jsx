import React from 'react';

import './Backdrop.scss';

const Backdrop = ({onClick}) => {
  return <div className="backdrop" onClick={onClick}/>;
};

export default Backdrop;
