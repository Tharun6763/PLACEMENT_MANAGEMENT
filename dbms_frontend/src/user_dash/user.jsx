import React from "react";
import { Link ,Outlet} from "react-router-dom";
import "./user.css"; // Import your CSS file
// import "bootstrap-icons/font/bootstrap-icons.css";

const Student = () => {
  const handleLogout = () => {
    // Clear all tokens from localStorage
    console.log(localStorage.getItem("token"));

    // Remove the token from local storage
    localStorage.removeItem("token");
    window.location.href = "/"; // This will trigger a full page reload
  };

  return (
    <div className="container">
      <div className="admin-div">
        <div className="admin-container">
          <div className="button-container">
            {/* <Link to="/dashboard/home">
              <button className="getcomp">HOME</button>
            </Link> */}
            <Link to="/dashboard/department">
              <button className="getcomp">Department</button>
            </Link>
            <Link to="/dashboard/companies">
              <button className="getcomp">Companies</button>
            </Link>
            <Link to="/dashboard/faculty">
              <button className="getcomp">FACULTY</button>
            </Link>
            <Link to="/dashboard/changepassword">
              <button className="getcomp">CHANGE PASSWORD</button>
            </Link>
            <Link to="/dashboard/changepassword">
              <button className="getcomp">CHANGE PASSWORD</button>
            </Link>
            <Link to="/">
              <button className="getcomp" onClick={handleLogout}>
                Logout
              </button>
            </Link>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Student;
