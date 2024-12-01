import React, { useState, useEffect } from 'react';
import { db, auth } from './firebase';
import { collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import '../src/Customers_Page.css';

function Customers_Page() {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [isMember, setIsMember] = useState(true); // Toggle between Member and Regular
  const [userName, setUserName] = useState('');

  // Fetch user's name from Firestore when the component mounts
  useEffect(() => {
    const fetchUserName = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          // Fetch user's name from Firestore
          const userRef = doc(db, 'users', user.uid);
          const userSnapshot = await getDoc(userRef);
          if (userSnapshot.exists()) {
            const userData = userSnapshot.data();
            setUserName(`${userData.firstName} ${userData.lastName}`);
          }
        } catch (error) {
          console.error('Error fetching user data: ', error);
        }
      }
    };

    fetchUserName();
  }, []);

  // Fetch customers from Firestore when the component mounts
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const collectionName = isMember ? 'Members' : 'Regular'; // Get the correct collection name
        const q = query(
          collection(db, collectionName), // Use the dynamic collection name
          where('uid', '==', auth.currentUser.uid) // Filter customers by user ID
        );
        
        const querySnapshot = await getDocs(q);
        const customersList = [];
        querySnapshot.forEach((doc) => {
          customersList.push({ id: doc.id, ...doc.data() });
        });
        setCustomers(customersList); // Set customers to state
      } catch (error) {
        console.error('Error fetching customer data: ', error);
      }
    };

    fetchCustomers();
  }, [isMember]); // Add 'isMember' to the dependency array to re-fetch when the tab changes

  // Filter customers based on the selected tab (Member or Regular)
  const filteredCustomers = customers.filter(customer => customer.isMember === isMember);

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
              <Link to="/Home_Page">
                <img src="urgym.png" alt="Your Gyms" className="HomePage_NavigationIcon" />
                Your Gyms
              </Link>
            </li>
            <li>
              <a href="/Bookmark_Page">
                <img src="bookmark.png" alt="Bookmarks" className="HomePage_NavigationIcon" />
                Bookmarks
              </a>
            </li>
            <li>
              <a href="../Insights_Page">
                <img src="insight.png" alt="Insights" className="HomePage_NavigationIcon" />
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
                <img src="logout.png" alt="Logout" className="HomePage_NavigationIcon" />
                Logout
              </Link>
            </li>
          </ul>
          <div className="HomePage_UserInfo">
            <img src="useravatar.png" alt="User Profile" className="HomePage_UserAvatar" />
            <span>{userName}</span> {/* Displaying the user’s name */}
          </div>
        </nav>

        {/* Main Content */}
        <div className="CustomersPage_MainContent">
          <div className="CustomersPage_TopPart">
            <h1>Customers</h1>
            <div className="CustomersPage_SearchBar">
              <input type="text" placeholder="Search here" />
              <button className="CustomersPage_AddCustomerButton" onClick={() => navigate('/AddCustomer_Page')}>
                <img src="AddIcon.png" alt="add-icon" />
                Add Customer
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="CustomersPage_Tabs">
            <button onClick={() => setIsMember(true)} className={isMember ? 'active' : ''}>Member</button>
            <button onClick={() => setIsMember(false)} className={!isMember ? 'active' : ''}>Regular</button>
          </div>

          {/* Customer List */}
          <div className="CustomersPage_CustomerContainer">
            <div className="CustomersPage_DetailsHeader">
              <div className="CustomersPage_Basic_Details">
                <span className="CustomersPage_NameHeader">Name</span>
                <span style={{ flex: 4.8 }}>Contact Number</span>
                <span style={{ flex: 1.5 }}>Start</span>
                <span style={{ flex: 3 }}>End</span>
                <span style={{ flex: 0 }}>Days</span>
                <span></span> {/* Space for the edit icon */}
              </div>
            </div>

            <div className="customer-list">
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((customer) => (
                  <div className="CustomersPage_CustomerBox" key={customer.id}>
                    <div className="CustomersPage_Basic_Details">
                      <span className="CustomersPage_CustomerName">{customer.fullname}</span>
                      <span className="CustomersPage_CustomerContact">{customer.contactnumber}</span>
                      <span className="customer-start">{customer.startDate}</span>
                      <span className="customer-end">{customer.endDate}</span>
                      <span className="customer-days">{calculateDays(customer.startDate, customer.endDate)}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p>No customers found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to calculate the number of days
const calculateDays = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const difference = end - start;
  const days = difference / (1000 * 3600 * 24);
  return days;
};

export default Customers_Page;
