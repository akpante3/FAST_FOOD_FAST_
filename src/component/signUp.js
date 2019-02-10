import React from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import Navbar from './NavBar';
import { Redirect } from 'react-router-dom';
import signUpAction from '../actions/signUpAction';


class SignUp extends React.Component {
    constructor(props) {
    super(props);
      this.state = {
          email: '',
          password: '',
          username: '',
          address: ''
      }
    }

    handler (e) {
       this.setState({[e.target.name]: e.target.value})
    }

    signup () {
        const userDetails = {
            email: this.state.email,
            password: this.state.password,
            username: this.state.username,
            address: this.state.address,
            data: this.state.data
        }
      this.props.signUpAction(userDetails);
    }
     
    render() {
        console.log(this.props.signUp && this.props.signUp.data.status, 'component');
        if(this.props.signUp && this.props.signUp.data.status === 'failure') {
            const message = document.querySelector(".error-message");
            message.innerHTML=this.props.signUp.data.message;
        } 
        return (
        <Fragment>
            { this.props.signUp && this.props.signUp.data.status === 'success' && <Redirect to='/' /> }
            <Navbar />
            <br />
            <br />
            <br/>
            <br />
            <br />
            <form  className="sign-container" >
                        <div>
                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr />
                        <label htmlFor="psw"><b>User Name</b></label>
                        <input type="text" placeholder="Enter user name" onChange={(e)=> this.handler(e)} className="username" name="username" required />
                        
                        <label htmlFor="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" onChange={(e)=> this.handler(e)} className="email" name="email" required />
                    
                        <label htmlFor="address"><b>Address</b></label>
                        <input type="text" placeholder="Enter Address" onChange={(e)=> this.handler(e)} className="address" name="address" required />
                    
                        <label htmlFor="psw-repeat"><b>Password</b></label>
                        <input type="password" className="password" placeholder="Password" onChange={(e)=> this.handler(e)} name="password" required />
                        <p>By creating an account you agree to our <a href="#" style={{color:'dodgerblue'}}>Terms & Privacy</a></p>
                    
                        <div className="clearfix">
                            <button type="button" className="signupbtn" onClick= {() => this.signup()} >Sign Up</button>
                        </div>
                        </div>
                        <p className="error-message"></p>
             </form>
        </Fragment>
        );
    }
}
const mapStateToprops = (state) => ({
    signUp: state.signup.payload,
});

export default connect(mapStateToprops,{signUpAction})(SignUp);