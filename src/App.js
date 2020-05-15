import React,{Component} from 'react';
import {Switch , Route, Redirect} from 'react-router-dom';

import HomePage from './Pages/homepage';
import Navbarheader from './components/navbar/navbar.component';


class App extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="App">
        <Navbarheader/>
        <Switch>
        <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    )
  }
}

export default App;
