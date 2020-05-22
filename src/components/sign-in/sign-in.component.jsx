import React from 'react';
import Rectbtn from '../rectangular-button/rectangular-button.component';
import FormInput from '../form-input/form-input.component';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selector';

import './sign-in.styles.scss';
import { connect } from 'react-redux';


class SignIn extends React.Component{
    constructor({currentUser}){
        super({currentUser});

        this.state = {
            email: '',
            password : ''
        }
    }


    handleSubmit =async event =>{
        event.preventDefault();

        try{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: (JSON.stringify({email:this.state.email,password:this.state.password}))
            };
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            const url = 'https://covid19pr.herokuapp.com/public/login'
            fetch(proxyUrl+url, requestOptions)
                .then(response => response.json())
                .then(data => {
                    if(data.stat===-1)alert(data.message);
                    else{
                        if(!data.token){
                            alert('wrong email or password');
                        }
                        else{
                        localStorage.setItem("token",data.token)
                        alert('loggedIn successfully');
                        this.setState({email:'',password:''})
                        }
                    }
                });
        }catch(error){
            console.log(error);
        }
    }


    handleChange = event=>{
        const {value,name} = event.target;
        this.setState({[name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            
            <form onSubmit={this.handleSubmit}>
                <FormInput
                     name="email"
                     type="email" 
                     value={this.state.email}
                     label="email" 
                     handleChange={this.handleChange}
                     required />
                     
                <FormInput 
                     name="password" 
                     type="password" 
                     value={this.state.password}
                     label="password" 
                     handleChange={this.handleChange}
                     required />
                <div className='buttons'>
                
                <Rectbtn info={'Sign In'}></Rectbtn>
                </div>
                
            </form>
            </div>

        )
    }
}

const mapStateToProps = createStructuredSelector({currentUser:selectCurrentUser})
export default connect(mapStateToProps)(SignIn);