import React from "react";
import "./Home.css"
import Navbar from "../Navbar/Navbar";
import welcomeImage from "../../asserts/rgukt3.jpeg";
import { useNavigate } from "react-router-dom";



const jobs = [
    { id: 1, title: "Software Developer", location: "Hyderabad", type: "Full-Time" },
    { id: 2, title: "Data Analyst", location: "Bangalore", type: "Part-Time" },
    { id: 3, title: "Project Manager", location: "Chennai", type: "Full-Time" },
    { id: 4, title: "Intern - UI/UX Designer", location: "Remote", type: "Internship" }
  ];

function Home(){
    const navigate = useNavigate();

    const onBtnClicked = () => {
        navigate("/Login")
    }

    return (
        <div className="mainpage-homepage-container">
            <Navbar />
            <div className="welcome-area-section">
                <div className="welcom-area-left">
                    <h1 className="welcom-area-left-heading">Welcome to RGUKT Job Portal</h1>
                    <p className="welcom-area-left-subtitle">Empowering Students. Streamlining Recruitment.</p>
                    <button className="welcom-area-left-btn" onClick={() => onBtnClicked()}>Login/Signup</button>
                </div>
                <img src={welcomeImage} className="welcom-area-right-image" alt="welcome-image"/>
            </div>
            <div className="features-section">
            <h2 className="features-header">What You Can Do Here</h2>
            <div className="features-grid">
                <div className="feature-card">
                <h3>For Students</h3>
                <p>Search & Apply for Jobs</p>
                </div>
                <div className="feature-card">
                <h3>Track Applications</h3>
                <p>Keep tabs on your job applications effortlessly.</p>
                </div>
                <div className="feature-card">
                <h3>For Admins</h3>
                <p>Post and Manage Jobs</p>
                </div>
                <div className="feature-card">
                <h3>Insights & Analytics</h3>
                <p>Access valuable data for decision-making.</p>
                </div>
            </div>
            </div>
            <div className="latest-jobs-section">
            <h2 className="latest-jobs-header">Latest Job Openings</h2>
            <ul className="job-list">
                {jobs.map((job) => (
                <li key={job.id} className="job-list-item">
                    <div className="job-details">
                    <h3 className="job-title">{job.title}</h3>
                    <p className="job-location">📍 {job.location}</p>
                    <p className="job-type">🕒 {job.type}</p>
                    </div>
                    <button className="apply-now-button">Apply Now</button>
                </li>
                ))}
            </ul>
            </div>
        </div>
    )
}

export default Home;