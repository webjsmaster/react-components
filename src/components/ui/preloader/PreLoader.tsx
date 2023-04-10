import React, { FC } from 'react';
import './PreLoader.scss';

const PreLoader: FC = () => {
  return (
    <div className="wrapper flex-center">
      <div className="container">
        <div className="container-dot dot-a">
          <div className="dot"></div>
        </div>
        <div className="container-dot dot-b">
          <div className="dot"></div>
        </div>
        <div className="container-dot dot-c">
          <div className="dot"></div>
        </div>
        <div className="container-dot dot-d">
          <div className="dot"></div>
        </div>
        <div className="container-dot dot-e">
          <div className="dot"></div>
        </div>
        <div className="container-dot dot-f">
          <div className="dot"></div>
        </div>
        <div className="container-dot dot-g">
          <div className="dot"></div>
        </div>
        <div className="container-dot dot-h">
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
