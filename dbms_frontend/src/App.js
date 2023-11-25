// import './App.css';
// import Login from './LOGIN/LOGIN';
// import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
// import Signup from './signup';
// import Forgot from './fogotPassword';
// import Navbar from './components/Navbar/navbar';
// import  Admin  from './admin_dash/admin_dashboard';
// import Student from './user_dash/user';
// import Department from './services/department';
// import Companies from './services/companies';
// import Faculty from './services/faculty';
// import Addcomp from './services/addcomp';
// import Adddept from './services/adddept';
// import UserStatusUpdate from './services/updateroles';
// import DeleteComp  from './services/deletecomp';
// import Changepassword from './services/changepassword';
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Navbar />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/forgotPassword" element={<Forgot />} />

//         <Route path="/dashboard" element={<Student />}>
//           <Route path="/dashboard/department" Component={Department} />
//           <Route path="/dashboard/companies" Component={Companies} />
//           <Route path="/dashboard/faculty" Component={Faculty} />
//           <Route
//             path="/dashboard/changepassword"
//             element={<Changepassword />}
//           />
//         </Route>

//         <Route path="/admin_dashboard" element={<Admin />}/>
//           <Route path="/department" Component={Department} />
//           <Route path="/companies" Component={Companies} />
//           <Route path="/faculty" Component={Faculty} />
//           <Route
//             path="/changepassword"
//             element={<Changepassword />}
//           />
//         {/* </Route> */}

//         <Route path="/updateroles" Component={UserStatusUpdate} />
//         <Route path="/addcomp" element={<Addcomp />} />
//         <Route path="/adddept" element={<Adddept />} />
//         <Route path="/deletecomp" element={<DeleteComp />} />

//         {/* Add more routes as needed */}
//       </Routes>
//     </Router>
//   );
// }
// export default App;
import "./App.css";
import Login from "./LOGIN/LOGIN";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./signup";
import Forgot from "./fogotPassword";
import Navbar from "./components/Navbar/navbar";
import Admin from "./admin_dash/admin_dashboard";
import Student from "./user_dash/user";
import Department from "./services/department";
import Companies from "./services/companies";
import Faculty from "./services/faculty";
import Addcomp from "./services/addcomp";
import Adddept from "./services/adddept";
import UserStatusUpdate from "./services/updateroles";
import DeleteComp from "./services/deletecomp";
import Changepassword from "./services/changepassword";
import Home from "./services/home";
import FacultyDetails from "./services/facultystudent";
import CompaniesByType from "./services/companiesBYtype";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotPassword" element={<Forgot />} />

        <Route path="/dashboard" element={<Student />}>
          <Route path="department" element={<Department />} />
          <Route path="companies" element={<Companies />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="changepassword" element={<Changepassword />} />
        </Route>
        <Route path="/dashboard" element={<Student />}>
          <Route path="home" element={<Home />} />
        </Route>

        {/* <Route path="/admin_dashboard" element={<Admin />}>
          <Route path="home" element={<Home />} />
        </Route> */}
        {/* <Route path="/facultystudent" element={<FacultyDetails />} /> */}
        <Route path="/admin_dashboard" element={<Admin />}>
          <Route path="home" element={<Home />} />
          <Route path="department" element={<Department />} />
          <Route path="companies" element={<Companies />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="changepassword" element={<Changepassword />} />
          {/* <Route path="faculty_id" element={<Faculty_id/>}/> */}
          <Route path="facultystudent" element={<FacultyDetails />} />
          <Route path="addcomp" element={<Addcomp />} />
          <Route path="adddept" element={<Adddept />} />
          <Route path="deletecomp" element={<DeleteComp />} />
          <Route path="comptype" element={<CompaniesByType/>}/>
        </Route>
        <Route path="/updateroles" element={<UserStatusUpdate />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
