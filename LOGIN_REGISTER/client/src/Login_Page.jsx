import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../src/LS_styles.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; // Import the auth instance from firebase.js

function Login_Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in successfully!");
            navigate('/Home_Page'); // Navigate to HomePage on successful login
        } catch (error) {
            console.error("Error logging in: ", error.message);
            setErrorMessage("Invalid email or password!"); // Set error message if login fails
        }
    };

    return (
        <div className="LS_Container">
            <div className="Login_Form">
                <div className="LS_Logo">
                    <img src="LS_logo.png" alt="GymBro Logo" />
                </div>
                <h1>Log in to your Account</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        required 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        required 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit">
                        Log in
                    </button>
                </form>
                <p>Don't have an account? <Link to="/Signup_Page">Create an account</Link></p>
            </div>

            <div className="Welcome_Section">
                <img src="rightPanel.png" alt="background" className="LS_Background" />
                <div className="Welcome_Message">
                    <h3>Welcome back!</h3>
                    <img src="welcomeLogo.png" alt="GymBro Logo"/>
                    <p>Empower Your Fitness Journey</p>
                </div>
            </div>
        </div>
    );
}

export default Login_Page;
