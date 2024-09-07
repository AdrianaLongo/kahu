import logo from './logo.svg';
import './App.css';
import React from 'react';
import AddRecord from './Model/CREATE.js';
import GetRecords from './Model/READ.js';


function App() {
  return (
    <div>
      <h1>Dog Health Records</h1>
      <AddRecord> </AddRecord>
      <GetRecords> </GetRecords>
    </div>
  );
}

export default App;
