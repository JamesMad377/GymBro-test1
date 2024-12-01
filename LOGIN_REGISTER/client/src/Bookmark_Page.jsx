import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Bookmark_Page.css"; // Ensure the correct relative path for your CSS file

function Bookmark_Page (){
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Logo */}
      <div className="logo">
        <img src="violet_logo.png" alt="GymBro_logo" />
      </div>

      {/* Main layout */}
      <div className="layout">
        {/* Sidebar */}
        <nav className="SideBar">
          <ul className="navlinks">
          <li>
                            <Link to ="/Home_Page">
                                <img src="urgym.png" alt="Your Gyms" className="HomePage_NavigationIcon" />
                                Your Gyms
                            </Link>
                        </li>
                        <li>
                            <Link to ={'/Bookmark_Page'}>
                                <img src="bookmark.png" alt="Bookmarks" className="HomePage_NavigationIcon" />
                                Bookmarks
                            </Link>
                        </li>
                        <li>
                            <Link to={'/Insights_Page'}>
                                <img src="insight.png" alt="Insights" className="HomePage_NavigationIcon" />
                                Insights
                            </Link>
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

          <div className="userinfo">
            <a href="profile.html" className="userAcc">
              <img src="useravatar.png" alt="User Profile" className="user-avatar" />
              <span>Juan Dela Cruz</span>
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <div className="main-content" id="mainContent">
          {/* Top part of the main content */}
          <div className="top-part">
            <h1>Bookmarks</h1>
            <div className="search-bar">
              <input type="text" placeholder="Search here" />
            </div>
          </div>

          {/* Example gyms and branches */}
          <div className="gym-and-branches">
            {/* Example gyms */}
            <div className="gym-box">
              {/* Top part of the gym */}
              <div className="gyms-top-part">
                <span className="gym-name">Anytime Fitness</span>
                <button className="add-branch-btn">
                  <img
                    src="plusIcon-violet.png"
                    alt="add-branch-icon"
                    className="add-icon"
                  />
                  Add Branch
                </button>
                <a href="#">
                  <img src="editIcon.png" alt="edit-icon" className="edit-icon" />
                </a>
              </div>

              {/* Example branches */}
              <div className="branch-list">
                <div className="branch-item">
                  <div className="gym-img">
                    <img src="diversion.png" alt="Gym Image" />
                  </div>
                  <div className="branch-details">
                    <span className="branch-location">Diversion M Plaza, Naga</span>
                    <span className="branch-name">Anytime Fitness</span>
                  </div>
                  <div className="branch-actions">
                    <div className="top-actions">
                      <img
                        src="insight-violet.png"
                        alt="insight-icon"
                        className="action-icon"
                      />
                      <img
                        src="bookmark-violet-filled.png"
                        alt="bookmark-icon"
                        className="action-icon"
                      />
                    </div>
                    <button className="view-logs" onClick={() => navigate("/Records_Page")}>
                      View Logs
                      <img src="arrow-right.png" alt="view-logs" />
                    </button>
                  </div>
                </div>
                {/* Add more branches here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmark_Page;