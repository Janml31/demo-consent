import React from 'react';
import './Header.css'; // Create CSS file if needed

function Header() {
  return (
    <div className="header">
      <img 
        src="https://seeklogo.com/images/Y/yono-logo-8EDA1025B6-seeklogo.com.png" 
        alt="SBI Logo"
      />
      <div className="contact-info">
        <img 
          src="https://marutisuzukiarenaprodcdn.azureedge.net/assets/msga/phase2/images/header/login-icon.png" 
          alt="Profile Logo" 
          className="profile-logo"
        />
        <a href="mailto:contact@sbi.co.in">contact@sbi.co.in</a>
      </div>
    </div>
  );
}

export default Header;
