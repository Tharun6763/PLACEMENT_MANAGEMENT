import React, { useState, useEffect } from "react";
import axios from "axios";
import CompCustomizedTables from "../components/comptable";

const FacultyDetails = () => {
  const [facultyId, setFacultyId] = useState(""); // State to store the faculty ID
  const [facultyDetails, setFacultyDetails] = useState([]);

  // Function to fetch faculty details from the server
  const fetchFacultyDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/user/facultystudent/${facultyId}`
      );
      setFacultyDetails(response.data);
    } catch (error) {
      console.error("Error fetching faculty details:", error);
    }
  };

  // useEffect to fetch faculty details when the component mounts and when facultyId changes
  useEffect(() => {
    fetchFacultyDetails();
  }, [facultyId]);

  // Event handler to update facultyId when the input value changes
  const handleInputChange = (event) => {
    setFacultyId(event.target.value);
  };

  return (
    <div
      className="facultystudent"
      style={{ marginLeft: "292px", width: "100vw" }}
    >
      <h2>STUDENTS UNDER FACULTY</h2>

      {/* Input field to enter faculty ID */}
      <input
        type="text"
        placeholder="Enter Faculty ID"
        value={facultyId}
        onChange={handleInputChange}
      />

      {/* Button to trigger fetching faculty details */}
      {/* <button onClick={fetchFacultyDetails}>
        GET STUDENTS DETAILS UNDER THIS FACULTY
      </button> */}

      {/* Display faculty details */}
      {/* <pre>{JSON.stringify(facultyDetails, null, 2)}</pre> */}
      <CompCustomizedTables data={facultyDetails} />
    </div>
  );
};

export default FacultyDetails;
