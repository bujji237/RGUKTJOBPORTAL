import React, { useState } from "react";
import "./Jobs.css";
import Navbar from "../Navbar/Navbar";

const Home = ({ jobs }) => {
  const [expandedJobIndex, setExpandedJobIndex] = useState(null);

  const toggleShowContent = (index) => {
    setExpandedJobIndex(expandedJobIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="homepage-container">
        {jobs.map((job, index) => (
          <div className="job-container" key={index}>
            <div className={`job-container-top ${expandedJobIndex === index ? "expanded" : ""}`}>
              <button className="job-status-btn textsize">{job.jobStatus}</button>
              <p className="company-name textsize"><span>Company Name: </span>{job.companyName}</p>
              <p className="job-role textsize"><span>Role: </span>{job.role}</p>
              <p className="location textsize"><span>Location: </span>{job.location}</p>
              <p className="job-eligibility textsize"><span>Eligibility: </span>{job.eligibility}</p>
              <p className="bond-duration textsize"><span>Bond: </span>{job.bond}</p>
              <p className="job-cgpa-required textsize"><span>CGPA Required: </span>{job.cgpaRequired}</p>
              <p className="mode-of-work textsize"><span>Mode of Work: </span>{job.modeOfWork}</p>
              <p className="job-description textsize">
                <span>Job Description: </span>
                {expandedJobIndex === index ? job.jobDescription : `${job.jobDescription.slice(0, 100)}...`}
              </p>
              <p className="recruitment-process textsize"><span>Recruitment Process: </span>{job.recruitmentProcess}</p>
              <p className="ctc textsize">
                <span>CTC: </span>{job.ctc}
              </p>
            </div>
            <div className="job-container-bottom">
              <p className="job-posted-time textsize">Posted {job.jobPostedTime}</p>
              <button className="job-readmore-less-btn" onClick={() => toggleShowContent(index)}>
                {expandedJobIndex === index ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
