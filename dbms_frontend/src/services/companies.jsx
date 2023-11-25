import React,{useEffect} from 'react'
import { useState } from 'react';
import axios from 'axios';
import CompCustomizedTables2 from "../components/Table2";
import './department.css';
// import { response } from 'express';
function Companies  () {
   const userCGPA = localStorage.getItem("cgpa");
  // const userCGPA = 7.5;
  const [details,setDetails]=useState([]);
useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.log("token not found login again");
    return;
  }

  axios
    .get("http://localhost:8080/companies/get", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        // console.log()
        const companydetails = response.data;
        console.log(companydetails);
        setDetails(companydetails);
      }
    })
    .catch((error) => {
      console.log(error);
      if (error.response && error.response.status === 403) {
        console.log(
          "Access forbidden. You do not have permission to view this resource."
        );
      }
      if (error.response && error.response.status === 401) {
        console.log("Authentication failed. Please log in.");
      }
    });
},[]);

  return (
    <div>
      {/* companies */}
      <div className="heading">
        <h1>companies</h1>
        <CompCustomizedTables2 data={details} userCGPA={userCGPA} />
      </div>
    </div>
  );
}

export default Companies;
