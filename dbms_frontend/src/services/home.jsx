import React from "react";
import CompanyDashboard from "./companiesCount"; // Adjust the path based on your project structure
import './department.css';
const Home = () => {
  return (
    <div className="home">
      {/* <h2>Welcome to the Home Page</h2> */}
      <CompanyDashboard />
    </div>
  );
};

export default Home;
