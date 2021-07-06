import React from 'react';
import '../css/styles.css';
import Top from './Top';
import Bottom from './Bottom';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="top-section">
          <Top />
        </div>
        <div className="mid-section" />
        <div className="bottom-section">
          <Bottom />
        </div>
      </div>
    );
  }
}

export default App;
