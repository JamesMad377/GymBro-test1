import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../src/Home_Page.css';
import AddGym_Page from "./AddGym_Page";
import Records_Page from "./Records_Page";
function Home_Page() {
    const navigate = useNavigate()
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
                            <Link to ="/Home_Page">
                                <img src="urgym.png" alt="Your Gyms" className="HomePage_NavigationIcon" />
                                Your Gyms
                            </Link>
                        </li>
                        <li>
                            <a href="../bookmarks/bookmarks.html">
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
                            <a href="#">
                                <img src="logout.png" alt="Logout" className="HomePage_NavigationIcon" />
                                Logout
                            </a>
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
                    
                    {/* example gyms and branches */}
                    <div className="HomePage_GymAndBranches">
                        {/* example gyms */}
                        <div className="HomePage_GymBox">
                            {/* top part of the gym */}
                            <div className="HomePage_GymsTopPart">
                                <span className="HomePage_GymName">Anytime Fitness</span>
                                <button className="HomePage_AddBranchButton"> 
                                    <img src="plusIcon-violet.png" alt="add-branch-icon" className="HomePage_AddIcon" /> 
                                    Add Branch
                                </button>
                                <a href="#">
                                    <img src="editIcon.png" alt="HomePage_EditIcon" className="HomePage_EditIcon" />
                                </a>
                            </div>
                            
                             {/* example branches */}
                            <div className="HomePage_BranchList">
                                <div className="HomePage_BranchItem">
                                    <div className="HomePage_GymImage">
                                        <img src="ayala_mall.png" alt="Gym Image" />
                                    </div>
                                    <div className="HomePage_BranchDetails">
                                        <a href="records.html">
                                            <span className="HomePage_BranchLocation">Ayala Malls, Legazpi</span>
                                        </a>
                                        <span className="HomePage_BranchName">Anytime Fitness</span>
                                    </div>
                                    <div className="HomePage_BranchActions">
                                        <div className="HomePage_TopActions">
                                            <img src="insight-violet.png" alt="insight-icon" className="HomePage_ActionIcon" />
                                            <img src="bookmark-violet.png" alt="bookmark-icon" className="HomePage_ActionIcon" />
                                        </div>
                                        <Link to="/Records_Page">
                                            <button className="HomePage_ViewLogs">
                                                View Logs
                                                <img src="arrow-right.png" alt="HomePage_ViewLogs" />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                {/* add example branches here */}
                                <div className="HomePage_BranchItem">
                                    <div className="HomePage_GymImage">
                                        <img src="diversion.png" alt="Gym Image" />
                                    </div>
                                    <div className="HomePage_BranchDetails">
                                        <span className="HomePage_BranchLocation">Diversion M Plaza, Naga</span>
                                        <span className="HomePage_BranchName">Anytime Fitness</span>
                                    </div>
                                    <div className="HomePage_BranchActions">
                                        <div className="HomePage_TopActions">
                                            <img src="insight-violet.png" alt="insight-icon" className="HomePage_ActionIcon" />
                                            <img src="bookmark-violet-filled.png" alt="bookmark-icon" className="HomePage_ActionIcon" />
                                        </div>
                                        <button className="HomePage_ViewLogs">
                                            View Logs
                                            <img src="arrow-right.png" alt="HomePage_ViewLogs" />
                                        </button>
                                    </div>
                                </div>
                            </div>                                               
                        </div>
                        
                        {/* add example gym here */}
                        <div className="HomePage_GymBox">
                            {/* top part of the gym */}
                            <div className="HomePage_GymsTopPart">
                                <span className="HomePage_GymName">A-Factor</span>
                                <button className="HomePage_AddBranchButton"> 
                                    <img src="plusIcon-violet.png" alt="add-branch-icon" className="HomePage_AddIcon" /> 
                                    Add Branch
                                </button>
                                <a href="#">
                                    <img src="editIcon.png" alt="HomePage_EditIcon" className="HomePage_EditIcon" />
                                </a>
                            </div>
                            
                             {/* example branches */}
                            <div className="branch-list">
                                <div className="HomePage_BranchItem">
                                    <div className="HomePage_GymImage">
                                        <img src="jacob.png" alt="Gym Image" />
                                    </div>
                                    <div className="HomePage_BranchDetails">
                                        <span className="HomePage_BranchLocation">Jacob, Naga</span>
                                        <span className="HomePage_BranchName">A-Factor</span>
                                    </div>
                                    <div className="HomePage_BranchActions">
                                        <div className="HomePage_TopActions">
                                            <img src="insight-violet.png" alt="insight-icon" className="HomePage_ActionIcon" />
                                            <img src="bookmark-violet.png" alt="bookmark-icon" className="HomePage_ActionIcon" />
                                        </div>
                                        <button className="HomePage_ViewLogs">
                                            View Logs
                                            <img src="arrow-right.png" alt="HomePage_ViewLogs" />
                                        </button>
                                    </div>
                                </div>
                                {/* add example branches here */}
                            </div>                                               
                        </div>
                    </div> 
                </div> 
            </div>
        </div>
    );
}

export default Home_Page;