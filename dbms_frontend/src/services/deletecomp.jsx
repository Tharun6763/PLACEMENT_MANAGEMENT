import React, { useState } from "react";
import axios from "axios";
import './deletecomp.css';
function DeleteComp() {
  const [companyId, setCompanyId] = useState("");
const token = localStorage.getItem("token");
if (!token) {
  console.log("token not found ");
  return;
}

  const handleDelete = () => {
    // Perform the API request to delete the data
    // console.log(userdata);
    axios.delete(`http://localhost:8080/user/delete`, {
      data: { comp_id: companyId },  // Assuming companyId is correctly set
    })
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      // })
      
      .then((response) => {
        if (response.status === 200) {
          alert("Data deleted successfully.");
          // Handle any additional logic here, such as updating the UI
        } else {
          alert("Data deletion failed.");
        }
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  };

  return (
    <div className="deletecontainer">
      <div className="background-image"></div>
      <div className="deletecontent">
        <h1>DELETE COMPANY BY ID</h1>
        <input
          type="text"
          placeholder="Enter Company ID"
          value={companyId}
          onChange={(e) => setCompanyId(e.target.value)}
        />
        <button onClick={handleDelete}>Delete company</button>
      </div>
    </div>
  );
}

export default DeleteComp;
