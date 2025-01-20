// components/UserDetails.js
import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { FaUserLarge } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext"; // Use theme context
import "./index.css";

const UserDetails = () => {
  const { theme } = useTheme(); // Get current theme
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, loading, error } = useContext(UserContext); // Assuming `loading` and `error` are part of your context
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Find the user after the data has loaded
    if (!loading) {
      const foundUser = users.find((user) => user.id === parseInt(id));
      setUser(foundUser);
    }
  }, [loading, users, id]);

  // Show loader while fetching data
  if (loading) {
    return (
      <div className={`loader-container ${theme}`}>
        <div className="loader"></div>
      </div>
    );
  }

  // Handle error state (if any)
  if (error) {
    return <p>{error}</p>;
  }

  if (!user) return <p>User not found!</p>;

  return (
    <div className={`user-details-container ${theme}`}>
      <h1 className="user-details-title">{user.name}</h1>
      <div className="user-details-content">
        {/* User Profile Section */}
        <section className="profile-section">
          <div className="profile-icon">
            <FaUserLarge />
          </div>
          <div className="profile-info">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>
        </section>

        {/* User Details Section */}
        <div className="details-section">
            <section className="user-section">
            <h2>Personal Details</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </section>

          <section className="user-section">
            <h2>Address</h2>
            <p><strong>Street:</strong> {user.address.street}</p>
            <p><strong>Suite:</strong> {user.address.suite}</p>
            <p><strong>City:</strong> {user.address.city}</p>
            <p><strong>Zipcode:</strong> {user.address.zipcode}</p>
          </section>

          <section className="user-section">
            <h2>Company</h2>
            <p><strong>Name:</strong> {user.company.name}</p>
            <p><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
            <p><strong>Business:</strong> {user.company.bs}</p>
          </section>

          <section className="user-section">
            <h2>Website</h2>
            <a
              href={`http://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.website}
            </a>
          </section>
        </div>
      </div>

      <button className="go-back-button" onClick={() => navigate("/")}>
        Go Back
      </button>
    </div>
  );
};

export default UserDetails;
