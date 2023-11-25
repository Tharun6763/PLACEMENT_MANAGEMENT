import React, { useState, useEffect } from "react";
import axios from "axios";
import CompCustomizedTables from "../components/comptable";
const CompaniesByType = () => {
  const [companiesByType, setCompaniesByType] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/user/companiesByType")
      .then((response) => {
        setCompaniesByType(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="admin-div" style={{ marginLeft: "292px" }}>
      <div>
        {/* <h1>Companies Grouped by Type</h1> */}
      </div>

      <br />
      <div>
        {/* <ul>
          {companiesByType.map((company) => (
            <li key={company.type}>
              <strong>{company.type}:</strong> {company.company_count}
            </li>
          ))}
        </ul> */}
        <CompCustomizedTables data={companiesByType} />
      </div>
    </div>
  );
};

export default CompaniesByType;
