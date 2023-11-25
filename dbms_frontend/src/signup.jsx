import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

function Signup() {
  const [facultyNames, setFacultyNames] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("Token not found. Please log in.");
      return;
    }

    axios
      .get("http://localhost:8080/faculty/get", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          // Assuming the faculty data has a 'name' property
          const facultyNames = response.data.map((faculty) => faculty.name);
          setFacultyNames(facultyNames);
        }
      })
      .catch((error) => {
        console.error("Error fetching faculty names:", error);
      });
  }, []); // Empty dependency array to run the effect only once

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = {
      name: formData.get("firstName") + " " + formData.get("lastName"),
      contactNumber: formData.get("contactNumber"),
      email: formData.get("email"),
      password: formData.get("password"),
      student_department: formData.get("department"),
      faculty_id: formData.get("faculty"),
      CGPA: formData.get("cgpa"),
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/user/signup",
        userData
      );
      alert(response.data.message);
      // You can display the response or perform other actions as needed.
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="contactNumber"
                  label="Contact Number"
                  name="contactNumber"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="department"
                  label="Department"
                  name="department"
                />
              </Grid>
              <Grid item xs={12}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="faculty"
                    label="Faculty Advisor_ID"
                    name="faculty"
          
                  />
                </Grid>
                {/* <TextField
                  required
                  fullWidth
                  id="faculty"
                  label="Faculty Advisor"
                  name="faculty"
                  select
                >
                  {facultyNames.map((facultyName) => (
                    <option key={facultyName} value={facultyName}>
                      {facultyName}
                    </option>
                  ))}
                </TextField> */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="cgpa"
                  label="CGPA"
                  name="cgpa"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Signup;
