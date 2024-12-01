import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db, auth } from './firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import '../src/Home_Page.css'; // Ensure CSS path is correct

function Home_Page() {
    const [gyms, setGyms] = useState([]);
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const user = auth.currentUser;
            if (user) {
                try {
                    const userRef = doc(db, 'users', user.uid);
                    const userSnapshot = await getDoc(userRef);
                    if (userSnapshot.exists()) {
                        const userData = userSnapshot.data();
                        setUserName(`${userData.firstName} ${userData.lastName}`);
                    }

                    const gymRef = collection(db, 'users', user.uid, 'gyms');
                    const gymSnapshot = await getDocs(gymRef);
                    const gymList = gymSnapshot.docs.map(doc => doc.data());
                    setGyms(gymList);
                } catch (error) {
                    console.error("Error fetching gyms or user data: ", error);
                }
            }
        };

        fetchData();
    }, []);

    return (
        <div className="HomePage_Container">
            <div className="HomePage_Logo">
                <img src="violet_logo.png" alt="GymBro_logo" />
            </div>

            <div className="HomePage_Layout">
                <nav className="HomePage_SideBar">
                    <ul className="HomePage_NavigationLinks">
                        <li>
                            <Link to="/Home_Page">
                                <img src="urgym.png" alt="Your Gyms" className="HomePage_NavigationIcon" />
                                Your Gyms
                            </Link>
                        </li>
                        <li>
                            <Link to="/Bookmark_Page">
                                <img src="bookmark.png" alt="Bookmarks" className="HomePage_NavigationIcon" />
                                Bookmarks
                            </Link>
                        </li>
                        <li>
                            <Link to="/Insights_Page">
                                <img src="insight.png" alt="Insights" className="HomePage_NavigationIcon" />
                                Insights
                            </Link>
                        </li>
                        <li>
                            <Link to="/Customers_Page">
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
                        <img src="useravatar.png" alt="User Profile" className="HomePage_UserAvatar" />
                        <span>{userName}</span>
                    </div>
                </nav>

                <div className="HomePage_MainContent">
                    <div className="HomePage_TopPart">
                        <h1>Your Gyms</h1>
                        <div className="HomePage_SearchBar">
                            <input type="text" placeholder="Search here" />
                            <button
                                className="HomePage_AddGymButton"
                                onClick={() => navigate('/AddGym_Page')}
                            >
                                <img src="AddIcon.png" alt="HomePage_AddIcon" />
                                Add Gym
                            </button>
                        </div>
                    </div>

                    <div className="HomePage_GymAndBranches">
                        {gyms.length === 0 ? (
                            <p>No gyms added yet. Click "Add Gym" to add your first gym.</p>
                        ) : (
                            gyms.map((gym, index) => (
                                <div key={index} className="HomePage_GymItem">
                                    <div className="HomePage_GymImage">
                                        <img src={gym.imageUrl} alt={gym.gymName} />
                                    </div>
                                    <div className="HomePage_GymDetails">
                                        <div className="HomePage_GymName">{gym.gymName}</div>
                                        <div className="HomePage_GymAddress">{gym.branchLocation}</div>
                                    </div>
                                    <Link to="/Records_Page" className="HomePage_ViewDetails">
                                        View Logs
                                    </Link>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home_Page;
