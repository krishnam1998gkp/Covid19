/* eslint-disable no-useless-constructor */
import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selector';

import './navbar.styles.scss';
import Logo from '../../assets/logo-nav.svg';
import { connect } from 'react-redux';

class Navbarheader extends Component{
    constructor(){
        super();

        this.state = {
          isBoxVisible:false
        };
      }

      signOut=()=>{
        //const {setCurrentUser} = this.props;
        //setCurrentUser();
        localStorage.clear();
      }

      toggleBox = () => {
        this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
      };

    render(){
      const { isBoxVisible } = this.state;
      const {currentUser}=this.props;
    return(

    <div className="section-navbar">
        <title>covidcare</title>
        
        <div className="navbar">
           <div className="nav-con" >
           <input type="checkbox" className="navigation__checkbox" id="navi-toggle"></input>
            <label htmlFor="navi-toggle" className="navigation__button" onClick={this.toggleBox}>
                    <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navbar-logo">
                <Link to="/"><img src={Logo} alt="LOGO" className="navbar-logo-img"></img></Link>
            </div>
            </div>

            <div className={`navbar-links ${isBoxVisible ? "visible" : "hidden"}`}>
                    <Link href="/" className="navbar-link navbar-link__2 ">Buy/sell</Link>
                    <Link to="/hospital" className="navbar-link navbar-link__1 ">Hospitals</Link>         
                    <Link href="/" className="navbar-link navbar-link__3 ">Covid Help</Link>
                    {currentUser?
                     <div  className="navbar-link navbar-link__4 btn btn-green"  onClick={this.signOut}>SIGNOUT</div> 
                    :<Link to="/signinup" className="navbar-link navbar-link__4 btn btn-green">Create Account for free</Link>
                    }
            </div>
        </div>
        
    </div>
    )
  }
}

// const mapDispatchToProps = dispatch=>({
//   setCurrentUser:user=> dispatch(setCurrentUser(user))
// })

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
})

export default connect(mapStateToProps)(Navbarheader);