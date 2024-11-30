import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db, auth } from './firebase'; // Importing Firebase services
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; // Firestore methods
import '../src/AddGym_Page.css';

function AddGym_Page() {
    const [gymName, setGymName] = useState('');
    const [branchLocation, setBranchLocation] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();

    // Function to handle the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic validation to ensure all fields are filled
        if (!gymName || !branchLocation || !imageUrl) {
            alert('Please fill out all fields!');
            return;
        }
    
        const user = auth.currentUser; // Get the current user
    
        try {
            // Add gym to Firestore under the user's UID
            const gymRef = collection(db, 'users', user.uid, 'gyms');
            await addDoc(gymRef, {
                gymName,
                branchLocation,
                imageUrl,
                createdAt: serverTimestamp(), // Timestamp for the gym creation
            });
    
            // Reset form fields after successful submission
            setGymName('');
            setBranchLocation('');
            setImageUrl('');
            alert('Gym added successfully!');
    
            // Optionally, navigate to the "Your Gyms" page or anywhere else
            navigate('/Home_Page'); // Adjust the page route
        } catch (error) {
            console.error('Error adding gym: ', error);
            alert('There was an error adding the gym.');
        }
    };

    // Function to handle going back to the previous page
    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };

    // Function to handle resetting the form
    const handleCancel = () => {
        setGymName('');
        setBranchLocation('');
        setImageUrl('');
    };

    return (
        <div className="AddGymPage_Container">
            <div className="AddGymPage_Logo">
                <img src="violet_logo.png" alt="GymBro Logo" />
            </div>

            {/* Sidebar */}
            <div className="AddGymPage_ContentWrapper">
                <nav className="AddGymPage_SideBar">
                    <ul className="AddGymPage_NavigationLinks">
                        <li>
                            <Link to="/Home_Page">
                                <img src="urgym.png" alt="Your Gyms" className="HomePage_NavigationIcon" />
                                Your Gyms
                            </Link>
                        </li>
                        <li>
                            <a href="../bookmarks/bookmarks.html">
                                <img src="bookmark.png" alt="Bookmarks" className="AddGymPage_NavigationIcon" />
                                Bookmarks
                            </a>
                        </li>
                        <li>
                            <a href="../insights/insights.html">
                                <img src="insight.png" alt="Insights" className="AddGymPage_NavigationIcon" />
                                Insights
                            </a>
                        </li>
                        <li>
                            <a href="/Customers_Page">
                                <img src="customers.png" alt="Customers" className="AddGymPage_NavigationIcon" />
                                Customers
                            </a>
                        </li>
                        <li>
                             <Link to="/Login_Page">
                                <img src="logout.png" alt="Logout" className="HomePage_NavigationIcon" />
                                Logout
                            </Link>
                        </li>
                    </ul>

                    <div className="AddGymPage_UserInfo">
                        <a href="profile.html" className="AddGymPage_UserAccount">
                            <img src="useravatar.png" alt="User Profile" className="AddGymPage_UserAvatar" />
                            <span>Juan Dela Cruz</span>
                        </a>
                    </div>
                </nav>

                {/* Form for adding gym */}
                <div className="AddGymPage_MainContent">
                    <button id="goBackButton" onClick={handleBack}>
                        <img src="arrow-left.png" alt="Back Icon" className="AddGymPage_ButtonIcon" />
                        Back
                    </button>
                    <h1>Add New Gym</h1>
                    <form className="AddGymPage_NewGymForm" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="gymname" 
                            placeholder="Gym Name" 
                            value={gymName} 
                            onChange={(e) => setGymName(e.target.value)} 
                            required 
                        />
                        <input 
                            type="text" 
                            name="branchlocation" 
                            placeholder="Branch Location" 
                            value={branchLocation} 
                            onChange={(e) => setBranchLocation(e.target.value)} 
                            required 
                        />
                        <input 
                            type="text" 
                            name="imageurl" 
                            placeholder="Image URL" 
                            value={imageUrl} 
                            onChange={(e) => setImageUrl(e.target.value)} 
                            required 
                        />

                        <div className="AddGymPage_ButtonContainer">
                            <button type="submit">
                                <img src="plusIcon-white.png" alt="Plus Icon" />
                                Create
                            </button>
                            <button type="button" id="cancelButton" onClick={handleCancel}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddGym_Page;
