import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { UserContext } from "../../context/UserContext";
import { useTheme } from "../../context/ThemeContext"; // Use theme context
import "./index.css";

const Home = () => {
  const { theme } = useTheme(); // Get current theme
  const { users, loading, error } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5; // Adjust the number of users to display per page

  // Filtered and sorted users
  const filteredUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") return a.name.localeCompare(b.name);
      return b.name.localeCompare(a.name);
    });

  // Calculate total pages
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // Get users for the current page
  const currentUsers = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  // Change page handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading)
    return (
      <div className={`loader-container ${theme}`}>
        <div className="loader"></div>
      </div>
    );

  if (error) return <p>{error}</p>;

  return (
    <div className={`home-container ${theme}`}>
      <div className="search-sort">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Sort A-Z</option>
          <option value="desc">Sort Z-A</option>
        </select>
      </div>
      <div className="user-list">
        {filteredUsers.length === 0 ? (
          <p>No users found</p> // Message if no users match the search term
        ) : (
          currentUsers.map((user) => (
            <div key={user.id} className={`user-card ${theme}`}>
              <div className="image-details-container">
                <div className="user-image profile-icon">
                  <FaUserLarge size={60} />
                </div>
                <div className="user-main-details">
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                  <p>City: {user.address.city}</p>
                </div>
              </div>
              <Link to={`/user/${user.id}`} className="user-card-link">
                Click to view details
              </Link>
            </div>
          ))
        )}
      </div>
      {/* Pagination */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
