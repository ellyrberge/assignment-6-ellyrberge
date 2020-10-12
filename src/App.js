import React from 'react';
import Members from './Members.js'
import './App.css';

function App() {
  return (

    <div className = "container">
      <div className = "d-flex justify-content-center mt-5">
        <h1 className = "text-danger">Netflix <span className = "text-dark">Members</span></h1>
      </div>
      <div>
        <Members/>
      </div>
    </div>
  );
}

export default App;
