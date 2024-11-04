import React, { useState } from 'react';
import './Navbar.css';

function NavBar() {
  const [activeTab, setActiveTab] = useState('HOME');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {['HOME', 'ABOUT US', 'GAMES', 'OUR TEAM'].map((tab) => (
          <li
            key={tab}
            className={`navbar-item ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
