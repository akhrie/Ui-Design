import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard">
      <Link to="/total-candidate" className="dashboard-section">
        <i className="fa fa-users"></i> Total Candidate
      </Link>
      <Link to="/today" className="dashboard-section">
        <i className="fa fa-calendar"></i> Today
      </Link>
      <Link to="/monthly" className="dashboard-section">
        <i className="fa fa-calendar"></i> Monthly
      </Link>
      <Link to="/yearly" className="dashboard-section">
        <i className="fa fa-calendar"></i> Yearly
      </Link>
      <Link to="/enquiry" className="dashboard-section">
        <i className="fa fa-question-circle"></i> Enquiry
      </Link>
      <Link to="/total-exam" className="dashboard-section">
        <i className="fa fa-book"></i> Total Exam
      </Link>
      <Link to="/total-form" className="dashboard-section">
        <i className="fa fa-file-alt"></i> Total Form
      </Link>
      <Link to="/follow-up" className="dashboard-section">
        <i className="fa fa-phone"></i> Follow Up
      </Link>
    </div>
  );
}

export default Dashboard;
