/* eslint-disable no-useless-constructor */
import React,{Component} from 'react';
import {Switch , Route,Redirect} from 'react-router-dom';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selector';

import Hospital from './Pages/Hospitals/hospital.component';
import HomePage from './Pages/homepage';
import Navbarheader from './Components/navbar/navbar.component';
import Footer from './Components/footer/footer.component';
import SignInAndSignUpPage from './Pages/SignIn-SignUp/signIn-SignUp.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


class App extends Component{
  constructor(){
    super();
  }

  componentDidMount(){
    const {setCurrentUser} = this.props;
    var token = localStorage.getItem('token');
    if(token){
      setCurrentUser({id:token})
    }
  }


  render(){
    const {currentUser} = this.props;
    return(
      <div className="App">
        <Navbarheader/>
        
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hospital' component={Hospital}/>
        <Route 
          exact path='/signinup' 
          render={() =>
            currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInAndSignUpPage />
            )
          }
          />
        </Switch>
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps =createStructuredSelector({
  currentUser:selectCurrentUser
})

const mapDispatchToProps = dispatch=>({
  setCurrentUser:user=> dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
