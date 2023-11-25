const express=require('express');
const connection=require('../connection');

const router=express.Router();
const jwt=require('jsonwebtoken');
// const nodemailer=require('nodemailer');
const mail=require('../sendMail');
require('dotenv').config();

var auth=require('../services/authentication');

var checkRole=require('../services/checkrole');

router.post("/signup", (req, res) => {
  let user = req.body;

  // Check if the email already exists in the user table
  let query = "SELECT email, password, role, status FROM user WHERE email=?";
  connection.query(query, [user.email], (err, results) => {
    if (!err) {
      if (results.length <= 0) {
        // Email doesn't exist, so proceed with user registration
        query =
          "INSERT INTO user(name, contactNumber, email, password, status, role,cgpa) VALUES (?, ?, ?, ?, 'false', 'student',?)";
        connection.query(
          query,
          [user.name, user.contactNumber, user.email, user.password,user.CGPA],
          (err, results) => {
            if (!err) {
              console.log(user);
              // User registration successful, now add details to the student table
              query =
                "INSERT INTO student(student_name, contactNumber, student_department, faculty_id, CGPA, email, password, status, role) VALUES (?, ?, ?,?,?, ?, ?, 'true', 'student')";
              connection.query(
                query,
                [
                  user.name,
                  user.contactNumber,
                  user.student_department,
                  user.faculty_id,
                  user.CGPA,
                  user.email,
                  user.password,
                ],
                (err, results) => {
                  if (!err) {
                    return res
                      .status(200)
                      .json({ message: "Successfully registered" });
                  } else {
                    return res.status(500).json(err);
                  }
                }
              );
            } else {
              return res.status(500).json(err);
            }
          }
        );
      } else {
        // Email already exists in the user table
        return res.status(200).json({ message: "Email already exists" });
      }
    } else {
      // Error in the initial query
      return res.status(500).json(err);
    }
  });
});


// const jwt = require("jsonwebtoken");

// Assuming you have your MySQL connection and express router set up

router.post("/login", (req, res) => {
  let user = req.body;
  let query = `
    SELECT email,password,status,role,cgpa
    FROM user 
    WHERE email=?
  `;

  connection.query(query, [user.email], (err, results) => {
    if (!err) {
      if (results.length <= 0 || results[0].password !== user.password) {
        return res.status(401).json({ message: "Wrong email or password" });
      } else if (results[0].status === "false") {
        return res
          .status(401)
          .json({ message: "Wait for the admin permission" });
      } else {
        // Include user information and student CGPA in the response
        const response = {
          email: results[0].email,
          role: results[0].role,
          cgpa: results[0].cgpa,
        };

        const accessToken = jwt.sign(response, process.env.ACCESS_TOKEN, {
          expiresIn: "8h",
        });
        return res
          .status(200)
          .json({
            token: accessToken,
            role: results[0].role,
            cgpa: results[0].cgpa,
          });
      }
    } else {
      return res
        .status(500)
        .json({ message: "Something went wrong, retry again later" });
    }
  });
});


router.post('/forgotPassword',(req,res)=>{
    const user=req.body;
    query="select email,password from user where email=?";
    connection.query(query,[user.email],(err,results)=>
    {
        if(!err)
        {
            if(results.length<=0)
            {
                return res.status(200).json({message:"mail sent "})
            }else{
                mail(user.email,{gas_type:results[0].email,payment_method:results[0].password}).then(()=>
                {
                    console.log(user.email,"mail sent ");
                })
                .catch(err => {
                    console.log(err)
                })
            }

        }else{
            return res.status(500).json(err);
        }
    })

})

router.get("/facultystudent/:id", (req, res) => {
  const { id } = req.params; // Corrected from req.params.id
  console.log(id);

  // Replace the query with your actual query to fetch faculty details by ID
  const sql = `CALL GetStudentsByFacultyId(?)`;

  connection.query(sql, [id], (err, results) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    // Assuming the stored procedure returns the faculty details
    const facultyDetails = results[0];

    res.json(facultyDetails);
  });
});

//if u use check role and the authentication then the admin can only get the data
//to get the all the users.wont return admin. used by faculty or administrator
router.get('/get',auth.authenticateToken,checkRole.checkRole,(req,res)=>
{
  var query="select id,name,email,password,status,role from user where role='user'";
  connection.query(query,(err,results)=>{
    if(!err)
    {
        return res.status(200).json(results);
    }else{
        return res.status(500).json(err);
    }
  })
})

//to update the user status by administrator
router.get('/hello',(req,res)=>
{
    res.send("<h1>home page</h1>")
})
router.patch('/update',auth.authenticateToken,checkRole.checkRole,(req,res)=>
{
    let user=req.body;//to which u want to change enter it in req
    var query="update user set status=? where id=?";
    connection.query(query,[user.status,user.id],(err,results)=>
    {
        if(!err)
        {
            if(results.affectedRows==0)
            {
                return res.status(404).json({message:"user id does not exist"});
            }
            return res.status(200).json({message:"updated sucessfully"});
        }else{
            return res.status(500).json(err);
        }
    })
})

router.get('/checkToken',auth.authenticateToken,checkRole.checkRole,(req,res)=>
{
    return res.status(200).json({message:"true"});
}
)

router.post('/changePassword',auth.authenticateToken,(req,res)=>{
const user=req.body;
const email=res.locals.email;
console.log(email);
var query="select *from user where email=? and password=?";
connection.query(query,[email,user.oldPassword],(err,results)=>{
    if(!err){
        if(results.length<=0)
        {
            return res.status(400).json({message:"pasword does not match"});
        }
        else if(user.oldPassword==results[0].password)
        {
            var query="update user set password=? where email=?";
            connection.query(query,[user.newPassword,email],(err,results)=>
            {
                if(!err)
                {
                    return res.status(200).json({message:"password updated successfully"});
                }else{
                    return res.status(500).json(err);
                }
            })
        }else{
            return res.status(400).json({message:"somthing went worng check later"});
        }
    }else{
        return res.status(500).json(err);
    }
})
})

router.delete(
  "/delete",
  //  auth.authenticateToken,
  (req, res, next) => {
    let comp = req.body;

    if (!comp.comp_id) {
      return res.status(400).json({ message: "Missing 'comp_id' parameter" });
    }

    let query = "DELETE FROM companies WHERE comp_id=?";
    connection.query(query, [comp.comp_id], (err, results) => {
      if (!err) {
        if (results.affectedRows === 0) {
          return res.status(404).json({ message: "ID not found" });
        } else {
          return res.status(200).json({ message: "Deleted successfully" });
        }
      } else {
        return res.status(500).json(err);
      }
    });
  }
);

router.get("/companiesByType", (req, res) => {
  const query =
    //  "SELECT type, COUNT(comp_name) as company_count FROM companies GROUP BY type ORDER BY type ASC";
    "SELECT type, COUNT(comp_name) as company_count FROM companies GROUP BY type ORDER BY type ASC";



  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.json(results);
  });
});


module.exports=router;