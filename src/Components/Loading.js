// src/Components/Loading.js
import React from 'react';

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner">
        <h1 className="loading-logo">Trendy News</h1>
        <div className="spinner-circle"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loading;