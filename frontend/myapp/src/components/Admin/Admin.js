import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Admin.css";

const Admin = ({ jobs, setJobs }) => {
  const [newJob, setNewJob] = useState({
    companyName: "",
    role: "",
    location: "",
    eligibility: "",
    bond: "",
    cgpaRequired: "",
    modeOfWork: "",
    jobDescription: "",
    recruitmentProcess: "",
    ctc: "",
    jobStatus: "",
    jobPostedTime: "Just now",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob({ ...newJob, [name]: value });
  };

  const handleAddJob = () => {
    if (Object.values(newJob).some((field) => field === "")) {
      alert("Please fill out all fields before adding the job.");
      return;
    }
    setJobs((prevJobs) => [...prevJobs, newJob]);
    alert("Job added successfully!");
    setNewJob({
      companyName: "",
      role: "",
      location: "",
      eligibility: "",
      bond: "",
      cgpaRequired: "",
      modeOfWork: "",
      jobDescription: "",
      recruitmentProcess: "",
      ctc: "",
      jobStatus: "",
      jobPostedTime: "Just now",
    });
  };

  return (
    <>
      <Navbar />
      <div className="admin-page-container">
        <h2>Add a New Job Post</h2>
        <form className="job-form">
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={newJob.companyName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="role"
            placeholder="Job Role"
            value={newJob.role}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={newJob.location}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="eligibility"
            placeholder="Eligibility"
            value={newJob.eligibility}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="bond"
            placeholder="Bond"
            value={newJob.bond}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="cgpaRequired"
            placeholder="CGPA Required"
            value={newJob.cgpaRequired}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="modeOfWork"
            placeholder="Mode of Work"
            value={newJob.modeOfWork}
            onChange={handleInputChange}
          />
          <textarea
            name="jobDescription"
            placeholder="Job Description"
            value={newJob.jobDescription}
            onChange={handleInputChange}
          />
          <textarea
            name="recruitmentProcess"
            placeholder="Recruitment Process"
            value={newJob.recruitmentProcess}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="ctc"
            placeholder="CTC"
            value={newJob.ctc}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="jobStatus"
            placeholder="Job Status (e.g., Completed, In Progress)"
            value={newJob.jobStatus}
            onChange={handleInputChange}
          />
          <button type="button" onClick={handleAddJob}>
            Add Job
          </button>
        </form>
      </div>
    </>
  );
};

export default Admin;
