import React, { useState, useEffect } from "react";
import axios from "axios";

function CompanyDashboard() {
  const [companyCount, setCompanyCount] = useState(null);

useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.log("token not found login again");
    return;
  }

  axios
    .get("http://localhost:8080/companies/companiesCount")
    .then((response) => {
      // Assuming the response has a data property containing the count
      setCompanyCount(response.data.count);
    })
    .catch((error) => {
      console.error("Error fetching company count:", error);
    });
}, []);
    // Fetch the number of companies from the server using axios

  return (
    <div>
      <h1>Company Dashboard</h1>
      {companyCount !== null ? (
        <p>Number of Companies: {companyCount}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CompanyDashboard;
