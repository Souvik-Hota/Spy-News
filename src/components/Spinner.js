// src/components/Spinner.js
import React from 'react';
import loading from './loading.gif'; // Make sure loading.gif is in the same folder

const Spinner = () => {
  return (
    <div className="text-center my-3">
      <img src={loading} alt="Loading..." style={{ width: '50px' }} />
    </div>
  );
};

export default Spinner;