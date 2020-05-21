/* eslint-disable no-useless-constructor */
import React,{Component} from 'react';
import {Switch , Route} from 'react-router-dom';

import HomePage from './Pages/homepage';
import Navbarheader from './Components/navbar/navbar.component';
import Footer from './Components/footer/footer.component';
import SignInAndSignUpPage from './Pages/SignIn-SignUp/signIn-SignUp.component';


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
        <Route exact path='/signinup' component={SignInAndSignUpPage}/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}

export default App;
