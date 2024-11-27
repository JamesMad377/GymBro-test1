import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../src/Records_Page.css';
import Home_Page from './Home_Page';
function Records_Page(){

    return (
        <div className="container">
            {/* logo */}
            <div className="logo">
                <img src="violet_logo.png" alt="GymBro_logo" />
            </div>

            {/* main layout */}
            <div className="layout">
                {/* sidebar */}
                <nav className="SideBar">
                    <ul className="navlinks">
                        <li>
                            <a href="urgym.html">
                                <img src="urgym.png" alt="Your Gyms" className="nav-icon" />
                                Your Gyms
                            </a>
                        </li>
                        <li>
                            <a href="../bookmarks/bookmarks.html">
                                <img src="bookmark.png" alt="Bookmarks" className="nav-icon" />
                                Bookmarks
                            </a>
                        </li>
                        <li>
                            <a href="../insights/insights.html">
                                <img src="insight.png" alt="Insights" className="nav-icon" />
                                Insights
                            </a>
                        </li>
                        <li>
                            <a href="../customers/customers-page.html">
                                <img src="customers.png" alt="Customers" className="nav-icon" />
                                Customers
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="logout.png" alt="Logout" className="nav-icon" />
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

                {/* main content */}
                <div className="main-content">
                    <button className="back-button">
                        <img src="arrow-left.png" alt="Back" />
                        Back
                    </button>
                    <h1>Records Page</h1>

                    {/* gym details box */}
                    <div className="gym-info-box">
                        <span className="gym-name">Anytime Fitness</span>
                        <div className="location">
                            <img src="loc-icon.png" alt="Location Icon" className="location-icon" />
                            <span className="gym-location">Ayala Malls, Legazpi</span>
                        </div>
                    </div>

                    {/* search bar and selected date */}
                    <div className="search-date-container">
                        <input type="text" placeholder="Search Name" className="search-bar" />
                        {/* date recorder */}
                        <div className="display-selected">
                            <p className="selected"></p>
                        </div>
                    </div>

                    {/* tabs */}
                    <div className="tabs">
                        <button className="tab">All</button>
                        <button className="tab">Ongoing</button>
                    </div>

                    {/* record Header */}
                    <div className="record-header">
                        <p></p> {/* space for icons */}
                        <p>Name</p>
                        <p>Time In</p>
                        <p>Time Out</p>
                        <p></p> {/* space for icons */}
                    </div>

                    {/* records box */}
                    <div className="records-box">
                        {/* sample Entry */}
                        <div className="record-entry">
                            <span className="icons">
                                <img src="2lines-icon.png" alt="3lines-icon" />
                            </span>
                            <span>John Doe</span>
                            <span>08:00 AM</span>
                            <span>10:00 AM</span>
                            <div className="icons">
                                <img src="editIcon-violet.png" alt="Edit" />
                                <img src="delete-icon.png" alt="Delete" />
                            </div>
                        </div>
                        {/* More record entries */}
                    </div>
                </div>

                {/* right sidebar */}
                <div className="right-sidebar">
                    {/* date */}
                    <div className="rightside-header">
                        <p>Today</p>
                        <span id="current-date"></span>
                    </div>

                    {/* calendar */}
                    <div className="calendar-panel">
                        <div className="calendar-header">
                            <img src="mouse-icon.png" alt="mouse-icon" />
                            <h5>SELECT DATE</h5>
                        </div>
                        <div className="calendar">
                            <header>
                                <pre className="left">◀</pre>
                                <div className="header-display">
                                    <p className="display"></p>
                                </div>
                                <pre className="right">▶</pre>
                            </header>
                            <div className="week">
                                <div>Sun</div>
                                <div>Mon</div>
                                <div>Tue</div>
                                <div>Wed</div>
                                <div>Thu</div>
                                <div>Fri</div>
                                <div>Sat</div>
                            </div>
                            <div className="days">
                                <div className="calendar-day">1</div>
                                <div className="calendar-day">2</div>
                                <div className="calendar-day">3</div>
                                <div className="calendar-day">4</div>
                                {/* Continue adding calendar days */}
                            </div>
                        </div>
                    </div>

                    {/* create record form */}
                    <form className="record-form">
                        <div className="add-record-header">
                            <img src="add-record-icon.png" alt="add-record-icon" />
                            <h5>CREATE RECORD</h5>
                        </div>
                        <input type="text" id="full-name" placeholder="Enter Full Name" />

                        <label htmlFor="time-in">Time In:</label>
                        <input type="time" id="time-in" placeholder="time-in" />

                        <label htmlFor="time-out">Time Out:</label>
                        <input type="time" id="time-out" />

                        <div className="form-buttons">
                            <button type="submit">
                                <img src="check-icon.png" alt="" />
                                Confirm
                            </button>
                            <button type="button">Clear</button>
                        </div>
                    </form>

                    <div className="add-customer-panel">
                        <button className="add-new-customer">
                            <img src="add-people-icon.png" alt="add-people-icon" />
                            Add New Customer
                        </button>
                        <img src="expand-icon.png" alt="expand-icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Records_Page;