import React, { Component } from 'react';
import './style.scss';
import Button from '../forms/Button';
import { SignInWithGoogle } from './../../firebase/utils';


class SignIn extends Component {
    state = {}

    handleSubmit = async (e) => {
        e.preventDefault();
    }

    render() { 
        return (
            <div className="signin">
                <div className="wrap">
                    <h2>
                        Login
                    </h2>
    
                    <div className="formWrap">
                        <form onSubmit={this.handleSubmit}>
                            <div className="socialSignin">
                                <div className="row">
                                    <Button onClick={SignInWithGoogle}>
                                        Signin with Google
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>                        
            </div>
        );
    }
}
 
export default SignIn;