import React from 'react';
import Facebook from './components/Facebook';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Facebook Auth Example</h1>
      <p>To get started, authenticate with facebook.</p>
      <Facebook />
    </div>
  );
}

export default App;
