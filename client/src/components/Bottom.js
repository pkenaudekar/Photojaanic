import React from 'react';
import Header from './Header';
import Route from './Route';
import Photos from './Photos';
import Tab from './Tab';

const Bottom = () => {
  return (
    <div className="grid-container">
      <div className="item1">
        <Header />
      </div>
      <Route path="/">
        <Photos />
      </Route>
      <Route path="/tab2">
        <Tab number={2} />
      </Route>
      <Route path="/tab3">
        <Tab number={3} />
      </Route>
    </div>
  );
};

export default Bottom;
