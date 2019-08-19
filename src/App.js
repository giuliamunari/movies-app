import React, { Component } from 'react'
import Routes from './components/Routes'
import NavBarContainer from './components/NavBar/NavBarContainer';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBarContainer/>
        <Routes />
      </div>
    )
  }
}
