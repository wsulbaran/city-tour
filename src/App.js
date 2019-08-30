import React, { Component } from 'react'
import './App.scss';
import Navbar from './component/Navbar/Navbar'
import TourList from './component/TourList/index'
export default class App extends Component {
  render() {
    return  (
      <React.Fragment>
        <Navbar/>
        <TourList/>
      </React.Fragment>
    )
  }
}