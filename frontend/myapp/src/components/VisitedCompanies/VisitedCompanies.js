import React, { useState } from 'react';
import './VisitedCompanies.css';

const VisitedCompanies = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("");

  const companies = [
    {
      name: "Google",
      website: "https://www.google.com",
      students: [
        {
          name: "John Doe",
          hiredOn: "2023-05-15",
          address: "123 Main St, City, Country",
          contact: "123-456-7890"
        },
        {
          name: "Jane Smith",
          hiredOn: "2023-06-20",
          address: "456 Elm St, City, Country",
          contact: "098-765-4321"
        }
      ]
    },
    {
      name: "Amazon",
      website: "https://www.amazon.com",
      students: [
        {
          name: "Alice Brown",
          hiredOn: "2023-04-10",
          address: "789 Oak St, City, Country",
          contact: "111-222-3333"
        }
      ]
    },
    // Add more companies here
  ];

  const handlePopupOpen = (companyName, students) => {
    setSelectedCompany(companyName);
    setSelectedStudents(students);
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setSelectedStudents([]);
    setSelectedCompany("");
  };

  return (
    <div className="visited-companies-container">
      <h2>Visited Companies</h2>
      {companies.map((company, index) => (
        <div className="company-card" key={index}>
          <h3>
            <a href={company.website} target="_blank" rel="noopener noreferrer">
              {company.name}
            </a>
          </h3>
          <button
            className="view-students-button"
            onClick={() => handlePopupOpen(company.name, company.students)}
          >
            View Students Hired
          </button>
        </div>
      ))}

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Students Hired by {selectedCompany}</h3>
            <ul>
              {selectedStudents.map((student, index) => (
                <li key={index}>
                  <p><strong>Name:</strong> {student.name}</p>
                  <p><strong>Hired On:</strong> {student.hiredOn}</p>
                  <p><strong>Address:</strong> {student.address}</p>
                  <p><strong>Contact:</strong> {student.contact}</p>
                </li>
              ))}
            </ul>
            <button className="close-popup-button" onClick={handlePopupClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisitedCompanies;
