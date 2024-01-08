import React from "react";
import "../../styles/LoginForm.css";

import Navbar from "../navbar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const Register = () => {

    return (
        <>
            <Navbar />
            <div id="login-form">
                <h1>Register</h1>
                <form>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />
                    <label htmlFor="email">E-mail:</label>
                    <input type="text" id="email" name="email" />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                    <label htmlFor="reenterpassword">Re-Enter Password:</label>
                    <input type="password" id="reenterpassword" name="reenterpassword" />
                    <input type="submit" value="Submit" />
                    <div>Already have an Account ?
                        <Link to="/login">Sign in</Link>
                    </div>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            var resp = jwtDecode(credentialResponse.credential);
                            console.log(resp);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        type="icon"
                        shape="circle"
                        useOneTap
                    />
                </form>
            </div>
        </>
    );
};

export default Register;
