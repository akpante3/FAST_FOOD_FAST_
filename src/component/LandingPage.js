import React from 'react';
import Navbar from '../component/NavBar';
import '../../public/style.scss';
import { Link } from 'react-router-dom';


export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
              <Navbar 
                login={<Link to="/login">Login</Link>}
                signup={<Link to="/signup">Signup</Link>}
              />
              <div class="headers">
                <h1>Welcome...</h1>
                <p> Signup for an exciting food experience</p>
              </div>
              <img className='image-cover' src='https://www.pixelstalk.net/wp-content/uploads/2016/08/Burger-fast-food-wallpaper-hd-1080p-768x432.jpg' alt='image of food' />
            </React.Fragment>
        );
    }
}
