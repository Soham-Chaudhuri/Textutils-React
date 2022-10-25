import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react';

function App() {
  return (
    <>
    <Navbar/>
    <br />
    <div className="container">
      <h1>Enter Your Text Here</h1>
      <TextForm/>
    </div>
    </>
  );
}

export default App;
