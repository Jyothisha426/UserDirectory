// components/Navbar.js
import React from "react";
import { useTheme } from "../../context/ThemeContext"
import "./index.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); // Get theme and toggle function from context

  return (
    <nav className={`navbar ${theme}`}>
      <h1 className="navbar-heading">User Directory</h1>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle Theme"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
