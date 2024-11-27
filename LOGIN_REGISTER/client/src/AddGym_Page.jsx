import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../src/AddGym_Page.css';
import Home_Page from './Home_Page';
function AddGym_Page() {
    const [gymName, setGymName] = useState('');
    const [branchLocation, setBranchLocation] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the logic for adding a new gym here, e.g., API call
        console.log({ gymName, branchLocation, imageUrl });
        // Reset fields after submission if needed
        setGymName('');
        setBranchLocation('');
        setImageUrl('');
    };

    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };

    const handleCancel = () => {
        // Reset fields and perform any additional cancel logic if needed
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
                            <Link to ="/Home_Page">
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
                            <a href="../customers/customers-page.html">
                                <img src="customers.png" alt="Customers" className="AddGymPage_NavigationIcon" />
                                Customers
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="logout.png" alt="Logout" className="AddGymPage_NavigationIcon" />
                                Logout
                            </a>
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