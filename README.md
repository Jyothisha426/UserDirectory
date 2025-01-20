# User Directory Application

This is a React.js application that displays a list of users fetched from an API. Users can filter, search, and sort the list, and view detailed information about each user on a separate page. The application is responsive and includes state management.

---
## Setup and Installation

# Set up the project directory

# Create a new directory and initialize the React project
    npx create-react-app user-directory
    cd user-directory
# Install necessary dependencies
    ​​​​​npm install react-router-dom
    

## Features

### Home Page
- Fetch and display a list of users from the API: [JSONPlaceholder](https://jsonplaceholder.typicode.com/users).
- Show user details: name, email, and city.
- Search functionality to filter users by name.
- Sorting options for sorting users alphabetically (A-Z, Z-A).
- Clicking on a user navigates to a detailed user page.

### User Detail Page
- Display full details of a user, including:
  - Name
  - Email
  - Phone
  - Company Name
  - Website
- Includes a "Go Back" button to return to the home page.

### State Management
- Implemented using:
  - React Context API.

### Loading States
- Shows a loading spinner while fetching data.
---

## Tech Stack

- **Frontend:** React.js (Functional Components and Hooks)
- **Routing:** React Router DOM
- **State Management:** React Context API
- **Styling:** CSS
- **API:** [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

---

## Deployment
  1. Push the code to GitHub
  2. Deploy the project using Vercel

## Deployed Link: https://user-directory-ten.vercel.app/
