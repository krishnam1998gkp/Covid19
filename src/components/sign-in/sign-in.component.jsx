import React from 'react';
import Rectbtn from '../rectangular-button/rectangular-button.component';
import FormInput from '../form-input/form-input.component';
// import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password : ''
        }
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

export default SignIn;