import React from "react";
import "./Navbar.css";

export const Navbar: React.FC = () => {
	return (
		<div className="navbar-container">
			<div className="navbar-logo">NSCO Electric</div>
			<div className="navbar-home">Home</div>
			<div className="navbar-services">Services</div>
			<div className="navbar-about">About</div>
			<div className="navbar-contact">Contact Us</div>
			<div className="navbar-fb">FB</div>
			<div className="navbar-ig">IG</div>
			<div className="navbar-li">LI</div>
		</div>
	);
};
