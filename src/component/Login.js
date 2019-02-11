import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Fragment } from 'react';
import Navbar from './NavBar';
import Footer from './Footer';

import logInAction from '../actions/logInActions';

class Login extends React.Component {
    constructor(props) {
        super(props);
          this.state = {
              email: '',
              password: '',
          }
        }
    
        handler (e) {
           this.setState({[e.target.name]: e.target.value})
        }
    
        login (e) {
            e.preventDefault();
            const userDetails = {
                email: this.state.email,
                password: this.state.password,
            }
          this.props.logInAction(userDetails);
        }
    render() {
        if(this.props.Login === 'FAILURE') {
            const message = document.querySelector(".error-message");
            message.innerHTML='Error user cant be logged in';
        } 
        return (
        <Fragment>
            { this.props.Login === 'SUCCESS' && <Redirect to='/' /> }
            <Navbar 
            home={'Home'}
            />
            <br />
            <br />
            <br/>
            <br />
            <br />
            <form className="sign-container">
                        <div className="container">
                        <h1>Sign In</h1>
                        <p>Please Log in Details.</p>
                        <hr />
                        <label htmlFor="uname"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" className="email" name="email" onChange={(e)=> this.handler(e)} required />
                    
                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" className="password" name="password" onChange={(e)=> this.handler(e)} required />
                        
                        <button  className="loginbtn" onClick= {(e) => this.login(e)}>Login</button>
                        <br />
                    </div>
                    <br />
                    <div className="container">
                    <span className="psw">Forgot <a href="#">password?</a></span>
                    </div>
                    <p className="error-message"></p>
            </form>
            <Footer />
        </Fragment>
        );
    }
}

const mapStateToprops = (state) => ({
    Login: state.login.status
});

export default connect(mapStateToprops,{logInAction})(Login);