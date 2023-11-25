import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import BasicAlerts from "../components/alert";
import "./adddept.css";

function Adddept() {
  const [name, setName] = useState("");
  const[dept_code,setDept_code]=useState("")
  const tokenRef = useRef(null);

  useEffect(() => {
    tokenRef.current = localStorage.getItem("token");
    if (!tokenRef.current) {
      // Display an alert using your 'BasicAlerts' component or another method
      // You can replace the alert below with the appropriate code to display the alert.
      alert("Token not found, please log in");
      return;
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userdata = {
      dep_name: name,
      dept_code:dept_code,
    };

    axios
      .post("http://localhost:8080/department/add", userdata, {
        headers: {
          Authorization: `Bearer ${tokenRef.current}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          // Display a success alert using your 'BasicAlerts' component or another method
          alert("Department added successfully");
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(tokenRef.current);
        if (error.response && error.response.status === 403) {
          alert(
            "Access forbidden. You do not have permission to view this resource."
          );
        }
        if (error.response && error.response.status === 401) {
          alert("Authentication failed. Please log in.");
        }
      });
  };

  return (
    <div className="adddept">
      <div className="adddeptform">
        <form className="addform" onSubmit={handleSubmit}>
          <input
            className="input-ele"
            type="text"
            placeholder="ENTER THE DEPARTMENT NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input-ele"
            type="text"
            placeholder="ENTER THE DEPARTMENT CODE"
            value={dept_code}
            onChange={(e) => setDept_code(e.target.value)}
          />
          <button className="addbutton" type="submit">
            ADD DEPARTMENT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Adddept;
