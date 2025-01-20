import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserDetails from "./components/UserDetails";
import Navbar from "./components/Navbar";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext"; // Import useTheme for accessing theme

function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <Router>
          <ThemedApp />
        </Router>
      </ThemeProvider>
    </UserProvider>
  );
}

// New component to apply theme to the body
const ThemedApp = () => {
  const { theme } = useTheme(); // Access the theme

  // Use effect to apply theme class to body
  useEffect(() => {
    document.body.className = theme; // Apply the theme class to the body
  }, [theme]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </>
  );
};

export default App;
