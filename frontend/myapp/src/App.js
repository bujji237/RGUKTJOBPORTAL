import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Jobs from "./components/Jobs/Jobs.js";
import Login from './components/Login1/Login.js';
import ProtectedRoute from './components/ProtectedRoute';
import AdminPage from './components/Admin/Admin';
import { AuthProvider } from './contexts/AuthContext';
import VisitedCompanies from './components/VisitedCompanies/VisitedCompanies.js';
import Signup from "./components/Signup/Signup.js";
import Home from './components/Home/Home.js';

const App = () => {
  const [jobs, setJobs] = useState([
    {
      companyName: "Vassar Labs",
      role: "Software Engineer (Internship + Fulltime)",
      location: "Hyderabad",
      eligibility: "B. Tech - CSE",
      bond: "2 Years",
      cgpaRequired: "8.5 & above",
      modeOfWork: "Work from Office",
      jobDescription: `
        • Participate and contribute to Design, Development and QA discussions/processes
        • Develop the product specifications at the functional and implementation level
        • Develop the product as per the specifications
        • Evaluate various technologies for the product/platform
      `,
      recruitmentProcess: `
        1st level - Online Test
        2nd level - Technical interview
      `,
      ctc: `
        Stipend in Internship - 20,000/-
        Full-time Offer - 9 LPA
      `,
      jobStatus: "completed",
      jobPostedTime: "45m ago",
    },
  ]);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Signup page */}
          <Route path="/" element={<Home />} />
          <Route path = "/Signup" element = {<Signup />} />
          <Route path = "/Login" element = {<Login />}/>

          {/* Public Home page */}
          {/* <Route path="/Home" element={<Home jobs={jobs} />} /> */}

          <Route path="/visited-companies" element={<VisitedCompanies />} />

          {/* Protected Admin Page */}
          <Route element={<ProtectedRoute role="admin" />}>
            <Route path="/admin" element={<AdminPage jobs={jobs} setJobs={setJobs} />} />
          </Route>

          {/* Protected Student Page */}
          <Route element={<ProtectedRoute role="student" />}>
            <Route path="/student" element={<Jobs jobs={jobs} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
