import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

import React, { Component } from 'react'
// import Spinner from './components/Spinner';


export default class App extends Component {
  
  render() {
    return (
     <>
        <div>
          <Navbar/>
          <News/>
          {/* <Spinner/> */}
        </div>
     </>
    )
  }
 
}


