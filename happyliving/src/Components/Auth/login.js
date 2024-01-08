import React from "react";
import "../../styles/LoginForm.css";
import Navbar from "../navbar";
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";

const Login = () => {
    return (
        <>
            <Navbar />
            <div id="login-form">
                <h1>Login</h1>
                <form>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                    <Link to="/register">Forget password?</Link>
                    <input type="submit" value="Loginf" />
                    <div>Don't have an Account ? 
                        <Link to="/register"><a>Sign up</a></Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
