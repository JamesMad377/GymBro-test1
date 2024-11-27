import React from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";
import '../src/Customers_Page.css';
import AddCustomer_Page from './AddCustomer_Page';
function Customers_Page(){
  const navigate = useNavigate();
  return (
    <div className="CustomersPage_Container">
      {/* Logo */}
      <div className="CustomersPage_Logo">
        <img src="violet_logo.png" alt="GymBro_logo" />
      </div>

      {/* Main Layout */}
      <div className="CustomersPage_Layout">
        {/* Sidebar */}
        <nav className="CustomersPage_SideBar">
          <ul className="navlinks">
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

          <div className="userinfo">
            <a href="profile.html" className="userAcc">
              <img src="useravatar.png" alt="User Profile" className="user-avatar" />
              <span>Juan Dela Cruz</span>
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <div className="CustomersPage_MainContent">
          {/* Top Part of the Main Content */}
          <div className="CustomersPage_TopPart">
            <h1>Customers</h1>
            <div className="CustomersPage_SearchBar">
              <input type="text" placeholder="Search here" />
              <button className="CustomersPage_AddCustomerButton"  onClick={() => navigate('/AddCustomer_Page')}>
                <img src="AddIcon.png" alt="add-icon" />
                Add Customer
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="CustomersPage_Tabs">
            <button>Member</button>
            <button>Regular</button>
          </div>

          {/* Customer List with Fixed Header */}
          <div className="CustomersPage_CustomerContainer">
            {/* Header */}
            <div className="CustomersPage_DetailsHeader">
              <div className="CustomersPage_Basic_Details">
                <span className="CustomersPage_NameHeader">Name</span>
                <span style={{ flex: 1.5 }}>Contact Number</span>
                <span>Start</span>
                <span>End</span>
                <span>Days</span>
                <span></span> {/* Space for the edit icon */}
              </div>
            </div>

            {/* Customer List */}
            <div className="customer-list">
              {/* Example Customer */}
              {Array(10)
                .fill(0)
                .map((_, index) => (
                  <div className="CustomersPage_CustomerBox" key={index}>
                    <div className="CustomersPage_Basic_Details">
                      <span className="CustomersPage_CustomerName">Claire Johnson</span>
                      <span className="CustomersPage_CustomerContact">0927723682</span>
                      <span className="customer-start">7/01/2024</span>
                      <span className="customer-end">7/31/2024</span>
                      <span className="customer-days">0 Days</span>
                      <img
                        src="editIcon-violet.png"
                        alt="edit"
                        className="CustomersPage_EditIcon"
                      />
                    </div>
                    <div className="CustomersPage_Details_Row">
                      <div className="CustomersPage_AddressEmergency">
                        <p>
                          Address: <span id="address">5/F Dona Amparo Building, Espana Street, Sampaloc</span>
                        </p>
                        <p>
                          Emergency Contact: <span id="emergencyContact">09277336143</span>
                        </p>
                      </div>
                      <div className="CustomersPage_Status">
                        <img src="star-icon.png" alt="star icon" />
                        <span id="status">MEMBER</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Customers_Page;