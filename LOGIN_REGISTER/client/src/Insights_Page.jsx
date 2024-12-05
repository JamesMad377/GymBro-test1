import React from "react";
import '../src/Insights_Page.css';
import { Link, useNavigate } from "react-router-dom";
function Insights_Page() {
    const navigate = useNavigate();
  return (
    <div className="container">
      {/* Logo */}
      <div className="logo">
        <img src="violet_logo.png" alt="GymBro Logo" />
      </div>

      {/* Main Layout */}
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
            <a className="userAcc">
              <img src="useravatar.png" alt="User Profile" className="user-avatar" />
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <div className="InsightsPage_MainContent" id="mainContent">
          {/* Top Part */}
          <div className="top-part">
            <h1>Insights</h1>
            <div className="search-bar">
              <img src="loc-icon-violet.png" alt="Location Icon" />
              <input type="text" placeholder="Select Gym or Branch" />
            </div>
          </div>

          {/* Filters */}
          <div className="filters">
            {/* Date Record Selector */}
            <div className="date-selector">
              <div className="date-btn-container">
                <button id="date-btn">This Week ▼</button>
                <div id="custom-date" style={{ display: "none" }} className="custom-date">
                  <label>
                    Start Date: <input type="date" id="start-date" />
                  </label>
                  <label>
                    End Date: <input type="date" id="end-date" />
                  </label>
                </div>
              </div>
              <div id="date-list" style={{ display: "none" }} className="date-list">
                <ul>
                  <li>Today</li>
                  <li>Yesterday</li>
                  <li>This Week</li>
                  <li>This Month</li>
                  <li>This Year</li>
                  <li>Custom</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="summary">
            <h2>Summary</h2>
            <div className="summary-boxes">
              <div className="box-ttl-rec">
                <p>00</p>
                <span>Total Records</span>
              </div>
              <div className="box">
                <p className="total">00</p>
                <p>MM/DD/YY</p>
                <span>Busiest Day</span>
              </div>
              <div className="box">
                <p className="total">00</p>
                <p>5 PM</p>
                <span>Busiest Time of Day</span>
              </div>
              <div className="box">
                <p className="total">00</p>
                <p>Sat</p>
                <span>Busiest Day of the Week</span>
              </div>
            </div>

            {/* Number of Records */}
            <div className="records-by-week">
              <h3>Number of records</h3>
              <div className="week-records">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day}>
                    <p>{day}</p>
                    <div>00</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Records by Time */}
            <div className="records-by-time">
              <h3>Records by time</h3>
              <div id="chart-container">
                <canvas id="timeChart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights_Page;