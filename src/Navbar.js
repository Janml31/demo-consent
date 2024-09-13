import React, { useState } from 'react';
import './Navbar.css'; // Ensure this file exists or create it

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home'); // Default active tab

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const [consentGiven, setConsentGiven] = useState(null);

  // Handle consent action
  const handleConsent = () => {
    setConsentGiven(true);
    // You can add more logic here to handle consent submission
    const layer = [];
  	layer.push({
  		event: 'SET_CONSENTIUM_DATA',
  		user_identifier: "Kathirvel",
  		user_email: "kathirvel@privasapien.com",
  	});
	  window.dataLayer = layer;
    window.dispatchEvent(new Event('dataLayerReady'));
    console.log('Consent Request Sent.');
    };

  // Handle withdraw action
  const handleWithdraw = () => {
    setConsentGiven(false);
    // You can add more logic here to handle consent withdrawal
    window.dispatchEvent(new Event('withdrawConsent'));
    console.log('Consent withdrawn');
  };

  return (
    <div>
      <div className="navbar">
        <a href="#" className={`navbar-link ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleTabChange('home')}>My Profile</a>
        <a href="#" className={`navbar-link ${activeTab === 'car' ? 'active' : ''}`} onClick={() => handleTabChange('car')}>Account Query</a>
        <a href="#" className={`navbar-link ${activeTab === 'service' ? 'active' : ''}`} onClick={() => handleTabChange('service')}>Service Bookings</a>
        <a href="#" className={`navbar-link ${activeTab === 'loyalty' ? 'active' : ''}`} onClick={() => handleTabChange('loyalty')}>Loyalty/Rewards</a>
        <a href="#" className={`navbar-link ${activeTab === 'accessories' ? 'active' : ''}`} onClick={() => handleTabChange('accessories')}>SBI Offers</a>
        <a href="#" className={`navbar-link ${activeTab === 'config' ? 'active' : ''}`} onClick={() => handleTabChange('config')}>My Configurations</a>
        <a href="#" className={`navbar-link ${activeTab === 'privacy Setting' ? 'active' : ''}`} onClick={() => handleTabChange('privacy Setting')}>privacy Setting</a>
        <a href="#" className={`navbar-link ${activeTab === 'package' ? 'active' : ''}`} onClick={() => handleTabChange('package')}>Customer Convenience Package</a>
      </div>

      {activeTab === 'privacy Setting' && (
        <div className="privacy-content">
          <p>Privacy Notice: We value your privacy. Please provide your consent for data collection.</p>
       	  <p>{consentGiven ? "Thank you for giving consent." : "Consent has been withdrawn."}</p>
            <>
	      {!consentGiven && <button onClick={handleConsent} className="privacy-btn">Give Consent</button>}
	      {consentGiven && <button onClick={handleWithdraw} className="privacy-btn">Withdraw Consent</button>}
            </>
        </div>
      )}
    </div>
  );
};

export default Navbar;
