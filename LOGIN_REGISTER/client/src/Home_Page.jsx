import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db, auth } from './firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import '../src/Home_Page.css'; // Ensure CSS path is correct

function Home_Page() {
    const [gyms, setGyms] = useState([]);
    const [filteredGyms, setFilteredGyms] = useState([]);  // State for filtered gyms
    const [userName, setUserName] = useState('');
    const [searchQuery, setSearchQuery] = useState('');  // State for search query
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
                    setFilteredGyms(gymList);  // Set filtered gyms initially
                } catch (error) {
                    console.error("Error fetching gyms or user data: ", error);
                }
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        // Filter gyms based on search query
        if (searchQuery === '') {
            setFilteredGyms(gyms);  // If search query is empty, show all gyms
        } else {
            const filtered = gyms.filter(gym => 
                gym.gymName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                gym.branchLocation.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredGyms(filtered);
        }
    }, [searchQuery, gyms]);  // Re-run the filtering whenever gyms or searchQuery changes

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
                            <input 
                                type="text" 
                                placeholder="Search here" 
                                value={searchQuery} 
                                onChange={(e) => setSearchQuery(e.target.value)}  // Update search query
                            />
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
                        {filteredGyms.length === 0 ? (
                            <p>No gyms found. Try another search or click "Add Gym" to add a gym.</p>
                        ) : (
                            filteredGyms.map((gym, index) => (
                                <div key={index} className="HomePage_GymBox">
                                    <div className="HomePage_GymsTopPart">
                                        <span className="HomePage_GymName">{gym.gymName}</span>
                                        <Link to="#"><img src="editIcon.png" alt="Edit" className="HomePage_EditIcon" /></Link>
                                    </div>

                                    <div className="HomePage_BranchList">
                                        {/* Use gym.gymName and gym.branchLocation directly */}
                                        <div className="HomePage_BranchItem">
                                            <div className="HomePage_GymImage">
                                                <img src={gym.imageUrl} alt="Gym Image" />
                                            </div>

                                            <div className="HomePage_BranchDetails">
                                                <span className="HomePage_BranchLocation">{gym.branchLocation}</span>
                                                <span className="HomePage_BranchName">{gym.gymName}</span>
                                            </div>

                                            <div className="HomePage_BranchActions">
                                                <button className="HomePage_ViewLogs" onClick={() => navigate("/Records_Page")}>
                                                    View Logs
                                                    <img src="arrow-right.png" alt="view-logs" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
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
