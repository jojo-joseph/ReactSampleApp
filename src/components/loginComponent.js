import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
const Loginbackground = require('../css/background.jpg'); 
require('../css/login.css');

class Login extends Component{

    constructor() {
        super();
        this.state = {
          username: '',
          password: '',
        };
        this.signin = this.signin.bind(this);
        this.onChange = this.onChange.bind(this);
      }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    signin = () => {
       // alert("button clicked");
        const data = {
            username: this.state.username,
            password: this.state.password
        };
        if(data.username=="jojo" && data.password=="jojo"){
            //sssalert("sucess");
            window.location="http://localhost:3000/Dashboard"
        }
        else{
            alert("Username or Password is incorrect ");
        }  
      };
    render(){
        return(
            <div>
                <div className="mainClassLogin">        
                        <div className="mainDivBox">
                            
                                        <div className="leftSideDiv">
                                            <img src={Loginbackground} alt="Logo" className="LoginPagebackground" />
                                        </div>
                                        <div className="rightSideDiv">
                                            <label className="rightSideLabel">Sign in to the Site</label>
                                            <div className="userNameDiv">
                                                <TextField
                                                    id="standard-basic"
                                                    name="username"
                                                    className="userNameTextField"
                                                    label="Username"
                                                    onChange={this.onChange}
                                                    margin="normal"
                                                />
                                                <TextField
                                                    id="standard-basic"
                                                    className="userNameTextField"
                                                    label="password"
                                                    name="password"
                                                    type="password"
                                                    onChange={this.onChange}
                                                    margin="normal"
                                                />
                                               </div>
                                               <div className="butonDivNew">
                                                    <Button variant="contained" color="primary" className="loginButton" onClick={this.signin}>
                                                        Login
                                                      
                                                    </Button>
                                                </div>
                                        </div>
                     
                    </div>
                </div>
            </div>
        )
    }
}export default Login;