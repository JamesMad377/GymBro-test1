import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../src/LS_styles.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; // Importing auth from firebase.js
import { db } from './firebase'; // Import Firestore instance
import { doc, setDoc } from 'firebase/firestore'; // Firestore methods

function Signup_Page() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match!');
            return;
        }

        // Check if email is valid
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setErrorMessage('Please enter a valid email address!');
            return;
        }

        try {
            // Create user with Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("User Registered Successfully!");

            // Store user data (first name and last name) in Firestore
            const userRef = doc(db, 'users', user.uid); // Reference to user's document in Firestore
            await setDoc(userRef, {
                firstName: firstName,
                lastName: lastName,
            });

            // Redirect to login page after successful signup
            navigate('/Login_Page');
        } catch (error) {
            // Handle Firebase errors
            if (error.code === 'auth/invalid-email') {
                setErrorMessage('Invalid email format!');
            } else if (error.code === 'auth/weak-password') {
                setErrorMessage('Password should be at least 6 characters!');
            } else {
                setErrorMessage('Something went wrong, please try again.');
            }
            console.error(error.message);
        }
    };

    return (
        <div className="LS_Container">
            <div className="Login_Form">
                <div className="LS_Logo">
                    <img src="GB22.png" alt="GymBro Logo" />
                </div>
                
                <h5>Register your account</h5>
                
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="firstname" 
                        placeholder="First Name" 
                        required 
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input 
                        type="text" 
                        name="lastname" 
                        placeholder="Last Name" 
                        required 
                        onChange={(e) => setLastName(e.target.value)}
                    />
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
                    <input 
                        type="password" 
                        name="confirmation" 
                        placeholder="Confirm Password" 
                        required 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit">Create Account</button>
                </form>
                <p>Already have an account? <Link to="/Login_Page">Log In</Link></p>
            </div>

            <div className="Welcome_Section">
                <img src="rightPanel.png" alt="background" className="LS_Background" />
                <div className="Welcome_Message">
                    <h3>Welcome back!</h3>
                    <img src="welcomeLogo.png" alt="GymBro Logo" />
                    <p>Empower Your Fitness Journey</p>
                </div>
            </div>
        </div>
    );
}

export default Signup_Page;
