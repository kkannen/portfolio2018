import React, { Component } from 'react';
import './App.css';

import Portfolio from "./Components/Portfolio"
import Resume from "./Components/Resume"

import {BrowserRouter, Switch, Route} from  "react-router-dom"






class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <BrowserRouter>
      <div className='poo'>
      <Switch>
        <Route path="/resume" component={Resume}/>
        <Route path="/" component={Portfolio}/>
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
