import React from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import Navbar from './NavBar';
import { Redirect } from 'react-router-dom';
import signUpAction from '../actions/signUpAction';
import Footer from './Footer';
import { Link } from 'react-router-dom';


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
        this.props.signUpAction(userDetails, this.props.history);

    //   this.props.signUpAction(userDetails);
    }
     
    render() {
        if(this.props.signUp && this.props.signUp.status === 'failure') {
            const message = document.querySelector(".error-message");
            if(this.props.signUp.message == "error user was not created") {
              message.innerHTML= 'email has been used already';
            } else {
                message.innerHTML=this.props.signUp.message;
            }
            
        } 
        
        return (
        <Fragment>
            {/* this.props.signUp && this.props.signUp.status === "success" && <Redirect to='/menu' /> */}
            <Navbar 
            login={<Link to="/login">login</Link>}
            />
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
             <Footer />
        </Fragment>
        );
    }
}
const mapStateToprops = (state) => ({
    signUp: state.signup.payload,
});

export default connect(mapStateToprops,{signUpAction})(SignUp);