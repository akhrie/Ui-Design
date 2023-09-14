import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [candidateSubMenuOpen, setCandidateSubMenuOpen] = useState(false);
  const [examSubMenuOpen, setExamSubMenuOpen] = useState(false);
  const [pagesSubMenuOpen, setPagesSubMenuOpen] = useState(false);
  const [enquirySubMenuOpen, setEnquirySubMenuOpen] = useState(false);
  const [reportSubMenuOpen, setReportSubMenuOpen] = useState(false);

  const toggleCandidateSubMenu = () => {
    setCandidateSubMenuOpen(!candidateSubMenuOpen);
  };

  const toggleExamSubMenu = () => {
    setExamSubMenuOpen(!examSubMenuOpen);
  };

  const togglePagesSubMenu = () => {
    setPagesSubMenuOpen(!pagesSubMenuOpen);
  };

  const toggleEnquirySubMenu = () => {
    setEnquirySubMenuOpen(!enquirySubMenuOpen);
  };

  const toggleReportSubMenu = () => {
    setReportSubMenuOpen(!reportSubMenuOpen);
  };

  return (
    <div className="main">
      <aside>
        <div className="sidebar left">
          <div className="user-panel">
            {/* ... User panel content ... */}
          </div>
          <ul className="list-sidebar bg-defoult">
            <li>
              <Link to="/Dashboards">
                <i className="fa fa-home" aria-hidden="true"></i>
                <span className="nav-label"> Dashboards </span>
              </Link>
            </li>
            <li>
              <Link to="#" onClick={toggleCandidateSubMenu}>
                <i className="fa fa-users" aria-hidden="true"></i>
                <span className="nav-label"> Candidate</span>
                <span className={`fa fa-chevron-left pull-right ${candidateSubMenuOpen ? 'open' : ''}`} />
              </Link>
              <ul className={`sub-menu collapse ${candidateSubMenuOpen ? 'show' : ''}`} id="products">
                <li><Link to="/AddCandidate">Add Candidate</Link></li>
                <li><Link to="/AManageAddCandidate">Manage Candidate</Link></li>
              </ul>
            </li>
            <li>
              <Link to="#" onClick={toggleExamSubMenu}>
                <i className="fa fa-shopping-cart" />
                <span className="nav-label">Exam Page</span>
                <span className={`fa fa-chevron-left pull-right ${examSubMenuOpen ? 'open' : ''}`} />
              </Link>
              <ul className={`sub-menu collapse ${examSubMenuOpen ? 'show' : ''}`} id="e-commerce">
                <li><Link to="/Examination">Examination</Link></li>
                <li><Link to="/Manage Examination">Manage Examination</Link></li>
              </ul>
            </li>
            <li>
              <Link to="#" onClick={togglePagesSubMenu}>
                <i className="fa fa-shopping-cart" />
                <span className="nav-label">Pages</span>
                <span className={`fa fa-chevron-left pull-right ${pagesSubMenuOpen ? 'open' : ''}`} />
              </Link>
              <ul className={`sub-menu collapse ${pagesSubMenuOpen ? 'show' : ''}`} id="page">
                <li><Link to="/Aboutus">About Us</Link></li>
                <li><Link to="/Contact us">Contact Us</Link></li>
              </ul>
            </li>
            <li>
              <Link to="#" onClick={toggleEnquirySubMenu}>
                <i className="fa fa-question-circle" aria-hidden="true"></i>
                <span className="nav-label">Enquiry</span>
                <span className={`fa fa-chevron-left pull-right ${enquirySubMenuOpen ? 'open' : ''}`} />
              </Link>
              <ul className={`sub-menu collapse ${enquirySubMenuOpen ? 'show' : ''}`} id="e-commerce">
                <li><Link to="/Read enquiry">Read Enquiry</Link></li>
                <li><Link to="/Unread Enquiry">Unread Enquiry</Link></li>
              </ul>
            </li>
            <li>
              <Link to="#" onClick={toggleReportSubMenu}>
                <i className="fa fa-file-text" />
                <span className="nav-label">Report</span>
                <span className={`fa fa-chevron-left pull-right ${reportSubMenuOpen ? 'open' : ''}`} />
              </Link>
              <ul className={`sub-menu collapse ${reportSubMenuOpen ? 'show' : ''}`} id="Report">
                <li><Link to="/B/W Dates">B/W Dates</Link></li>
                <li><Link to="/Emrolment Report">Enrolment Report</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
