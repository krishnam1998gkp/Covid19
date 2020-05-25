import React from 'react';

import './SignIn-SignUp.styles.scss';

import SignIn from '../../Components/sign-in/sign-in.component';
import Signup from '../../Components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
    <div className = 'sign-in-and-sign-up'>
        <SignIn/>
        <Signup/>
    </div>
)

export default SignInAndSignUpPage;