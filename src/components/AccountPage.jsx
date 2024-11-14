// components/AccountPage.js
import React, { useState } from 'react';
import { FaCog, FaCube, FaLock, FaSignOutAlt } from 'react-icons/fa';
import { RiFundsLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';

// Import your avatar or profile image
import avatarPlaceholder from '../assets/i.png'; // Replace with the actual image path

function AccountPage() {
  const navigate = useNavigate();
  const [privacyMode, setPrivacyMode] = useState(false);

  // Handler to navigate to the Funds page
  const handleFundsClick = () => {
    navigate('/funds'); // Update '/funds' with the correct route
  };

  // Toggle privacy mode
  const togglePrivacyMode = () => {
    setPrivacyMode(!privacyMode);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Mrudul Mukundan</h2>
      </div>
      <div style={styles.profileSection}>
        <div style={styles.profileDetails}>
          <p >ZFGQ265</p>
          <p style={styles.email}>mrudulkm2002@gmail.com</p>
        </div>
        <img src={avatarPlaceholder} alt="Profile Avatar" style={styles.avatar} />
      </div>
      <div style={styles.privacySection}>
        <p style={styles.privacyText}>Privacy mode</p>
        <div style={styles.toggleButton} onClick={togglePrivacyMode}>
          <div
            style={{
              ...styles.toggleThumb,
              transform: privacyMode ? 'translateX(26px)' : 'translateX(0)',
            }}
          />
        </div>
      </div>
      <div style={styles.menu}>
        <MenuItem text="Account" />
        <MenuItem icon={<RiFundsLine />} text="Funds" onClick={handleFundsClick} />
        <MenuItem icon={<FaLock />} text="App Code" />
        <MenuItem icon={<FaCog />} text="Settings" />
        <MenuItem icon={<FaCube />} text="Connected apps" />
        <MenuItem icon={<FaSignOutAlt />} text="Logout" />
      </div>
      <div style={styles.footer}>
        <h6>Console</h6>
        <div style={styles.footerLinks}>
          <Link to="#" style={styles.link}>Portfolio</Link>
          <Link to="#" style={styles.link}>Tradebook</Link>
          <Link to="#" style={styles.link}>P&L</Link>
          <Link to="#" style={styles.link}>Tax P&L</Link>
        </div>
      </div>
    </div>
  );
}

function MenuItem({ icon, text, onClick }) {
  return (
    <div style={styles.menuItem} onClick={onClick}>
      <p style={styles.menuText}>{text}</p>
      <div style={styles.menuIcon}>{icon}</div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '21px',
    marginBottom:'20px'
  },
  icon: {
    fontSize: '18px',
    color: 'gray',
  },
  profileSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  profileDetails: {
    flex: 1,
  },
  name: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: 0,
  },
  email: {
    fontSize: '14px',
    color: '#888',
    margin: '5px 0',
  },
  avatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
  },
  privacySection: {
    display: 'flex',
    alignItems: 'center', // Keep items aligned in the center vertically
    backgroundColor: '#fff',
    padding: '10px 20px',
    borderRadius: '10px',
    marginTop: '20px',
    justifyContent: 'flex-start', // Align items to the start
  },
  privacyText: {
    fontSize: '16px',
    marginRight:"10px",
    margin: 0, // Remove margin to eliminate extra space
  },
  toggleButton: {
    width: '40px', // Adjust the width to make it smaller
    height: '20px', // Adjust the height to make it smaller
    backgroundColor: '#ddd',
    borderRadius: '10px', // Make sure the border-radius matches half of the height
    cursor: 'pointer',
    position: 'relative',
  },
  toggleThumb: {
    width: '18px', // Adjust the width of the thumb to fit inside the smaller toggle button
    height: '18px', // Adjust the height of the thumb
    backgroundColor: '#fff',
    borderRadius: '50%',
    position: 'absolute',
    top: '1px', // Adjust to align the thumb vertically
    transition: 'transform 0.3s',
  },
  menu: {
    marginTop: '20px',
  },
  menuItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid #eee',
    cursor: 'pointer',
  },
  menuText: {
    fontSize: '14px',
    color: '#555',
  },
  menuIcon: {
    fontSize: '20px',
    color: '#aaa',
  },
  footer: {
    marginTop: '20px',
    textAlign: 'center',
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '10px',
  },
  link: {
    fontSize: '14px',
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default AccountPage;
