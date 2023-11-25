import React from "react";
import "./admin_dashboard.css";
import { Link,Outlet } from "react-router-dom";

const Admin = () => {
  const handleLogout = () => {
    // Clear all tokens from localStorage
    console.log(localStorage.getItem("token"));

    // Remove the token from local storage
    localStorage.removeItem("token");
    window.location.href = "/"; // This will trigger a full page reload
  };

  return (
    <div className="container">
      <div className="admin-div" style={{ backgroundColor: "#e2e2e2" }}>
        <div className="admin-container">
          <div className="button-container">
            <Link to="/admin_dashboard/comptype">
              <button className="getcomp">GROUP BY</button>
            </Link>
            <Link to="/admin_dashboard/department">
              <button className="getcomp">Department</button>
            </Link>
            <Link to="/admin_dashboard/companies">
              <button className="getcomp">Companies</button>
            </Link>
            <Link to="/admin_dashboard/faculty">
              <button className="getcomp">FACULTY</button>
            </Link>
            <Link to="/admin_dashboard/facultystudent">
              <button className="getcomp">MENTOR</button>
            </Link>
            <Link to="/admin_dashboard/changepassword">
              <button className="getcomp">CHANGE PASSWORD</button>
            </Link>
            <Link to="/">
              <button className="getcomp" onClick={handleLogout}>
                Logout
              </button>
            </Link>
            <Link to="/updateroles">
              <button className="getcomp">update roles</button>
            </Link>
            <Link to="/admin_dashboard/addcomp">
              <button className="getcomp">ADD COMPANIES</button>
            </Link>
            <Link to="/admin_dashboard/adddept">
              <button className="getcomp">ADD DEPARTMENT</button>
            </Link>

            <Link to="/admin_dashboard/deleteComp">
              <button className="getcomp">DELETE COMPANIES</button>
            </Link>
          </div>
        </div>

        <Outlet />
        {/* <div className="admin2-container">
          
        </div> */}
      </div>
    </div>
  );
};

export default Admin;
