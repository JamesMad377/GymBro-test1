import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db, auth } from "./firebase"; // Import auth from your firebase.js
import { collection, addDoc } from "firebase/firestore"; // Import Firestore methods
import '../src/AddCustomer_Page.css';

function AddCustomer_Page() {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    fullname: "",
    address: "",
    contactnumber: "",
    emergencynumber: "",
    isMember: false,
    startDate: "",
    endDate: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullname, address, contactnumber, emergencynumber, isMember, startDate, endDate } = formData;

    try {
      // Check if user is logged in
      const user = auth.currentUser; // Use 'auth' from firebase.js for current user
     

      // Add customer to Firestore
      const collectionName = isMember ? "Members" : "Regular";
      const docRef = await addDoc(collection(db, collectionName), {
        fullname,
        address,
        contactnumber,
        emergencynumber,
        startDate,
        endDate,
        uid: user.uid, // Save user UID to relate customer to the logged-in user
        createdAt: new Date(),
        isMember: isMember // Add isMember field to the document
      });
      alert("Customer added successfully!");
      navigate("/Customers_Page"); // Navigate back to the Customers page
    } catch (error) {
      console.error("Error adding customer: ", error);
      alert("Failed to add customer. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="AddCustomerPage_Logo">
        <img src="violet_logo.png" alt="GymBro_logo" />
      </div>

      <div className="content-wrapper">
        <nav className="SideBar">
          <ul className="navlinks">
            <li>
              <Link to="/Home_Page">
                <img src="urgym.png" alt="Your Gyms" className="HomePage_NavigationIcon" />
                Your Gyms
              </Link>
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
              <Link to="/Customers_Page">
                <img src="customers.png" alt="Customers" className="HomePage_NavigationIcon" />
                Customers
              </Link>
            </li>
            <li>
              <Link to="/Login_Page">
                <img src="logout.png" alt="Logout" className="nav-icon" />
                Logout
              </Link>
            </li>
          </ul>
        </nav>

        <div className="AddCustomerPage_MainContent">
          <button id="goBackButton" onClick={() => navigate("/Customers_Page")}>
            <img src="arrow-left.png" alt="Back Icon" className="AddCustomerPage_ButtonIcon" />
            Back
          </button>
          <h1 className="AddCustomerPage_H1">Add New Customer</h1>
          <form className="AddCustomerPage_NewCustomerForm" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="contactnumber"
              placeholder="Contact Number"
              value={formData.contactnumber}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="emergencynumber"
              placeholder="Emergency Contact"
              value={formData.emergencynumber}
              onChange={handleChange}
              required
            />

            <div className="membership-checkbox">
              <input
                type="checkbox"
                id="member"
                name="isMember"
                checked={formData.isMember}
                onChange={handleChange}
              />
              <label htmlFor="member">Membership</label>
            </div>

            <div className="membership-dates">
              <div className="date-wrapper">
                <label htmlFor="startDate">Start:</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="date-wrapper">
                <label htmlFor="endDate">End:</label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="AddCustomerPage_ButtonContainer">
              <button type="submit">Confirm</button>
              <button type="button" id="cancelButton" onClick={() => navigate("/Customers_Page")}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCustomer_Page;
