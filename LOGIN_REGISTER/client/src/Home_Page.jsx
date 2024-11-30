import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db, auth } from './firebase'; // Import Firebase services
import { collection, getDocs } from 'firebase/firestore'; // Firestore methods
import '../src/Home_Page.css';

function Home_Page() {
    const [gyms, setGyms] = useState([]); // State to hold gym data
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGyms = async () => {
            const user = auth.currentUser; // Get current logged-in user
            if (user) {
                try {
                    // Get gyms from Firestore under the current user's UID
                    const gymRef = collection(db, 'users', user.uid, 'gyms');
                    const gymSnapshot = await getDocs(gymRef);
                    const gymList = gymSnapshot.docs.map(doc => doc.data());
                    setGyms(gymList); // Set gyms to state
                } catch (error) {
                    console.error("Error fetching gyms: ", error);
                }
            }
        };

        fetchGyms(); // Call function to fetch gyms
    }, []); // Empty dependency array to fetch gyms once on page load

    return (
        <div className="HomePage_Container">
            {/* logo */}
            <div className="HomePage_Logo">
                <img src="violet_logo.png" alt="GymBro_logo" />
            </div>

            {/* main layout */}
            <div className="HomePage_Layout">
                {/* sidebar */}
                <nav className="HomePage_SideBar">
                    <ul className="HomePage_NavigationLinks">
                        <li>
                            <Link to="/Home_Page">
                                <img src="urgym.png" alt="Your Gyms" className="HomePage_NavigationIcon" />
                                Your Gyms
                            </Link>
                        </li>
                        <li>
                            <a href="/Bookmarks.html">
                                <img src="bookmark.png" alt="Bookmarks" className="HomePage_NavigationIcon" />
                                Bookmarks
                            </a>
                        </li>
                        <li>
                            <a href="../insights/insights.html">
                                <img src="insight.png" alt="Insights" className="HomePage_NavigationIcon" />
                                Insights
                            </a>
                        </li>
                        <li>
                            <Link to={'/Customers_Page'}>
                                <img src="customers.png" alt="Customers" className="HomePage_NavigationIcon" />
                                Customers
                            </Link>
                        </li>
                        <li>
                             <Link to="/Login_Page">
                                <img src="logout.png" alt="Logout" className="HomePage_NavigationIcon" />
                                Logout
                            </Link>
                        </li>
                    </ul>

                    <div className="HomePage_UserInfo">
                        <a href="profile.html" className="HomePage_UserAccount">
                            <img src="useravatar.png" alt="User Profile" className="HomePage_UserAvatar" />
                            <span>Juan Dela Cruz</span>
                        </a>
                    </div>
                </nav>

                {/* main content */}
                <div className="HomePage_MainContent" id="mainContent">
                    {/* top part of the main content */}
                    <div className="HomePage_TopPart">
                        <h1>Your Gyms</h1>
                        <div className="HomePage_SearchBar">
                            <input type="text" placeholder="Search here" />
                            <button className="HomePage_AddGymButton" id="addGymBtn" onClick={() => navigate('/AddGym_Page')}>
                                <img src="AddIcon.png" alt="HomePage_AddIcon" />
                                Add Gym
                            </button>
                        </div>
                    </div>

                    {/* Display gyms or message if none are added */}
                    <div className="HomePage_GymAndBranches">
                        {gyms.length === 0 ? (
                            <p>No gyms added yet. Click "Add Gym" to add your first gym.</p>
                        ) : (
                            <ul className="HomePage_GymList">
                                {gyms.map((gym, index) => (
                                    <li key={index} className="HomePage_GymItem">
                                        <h3>{gym.gymName}</h3>
                                        <p>{gym.branchLocation}</p>
                                        <img src={gym.imageUrl} alt={gym.gymName} className="HomePage_GymImage" />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home_Page;
