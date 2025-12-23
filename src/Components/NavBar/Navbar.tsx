import React from "react";
import "./Navbar.css";

export const Navbar: React.FC = () => {
	return (
		<nav className="navbar-container">
			<div className="navbar-left">
				<a className="navbar-link-nohover">NSCO Electric</a>
			</div>

			<div className="navbar-center">
				<a href="/index.html" className="navbar-link">
					Home
				</a>
				<a href="/about.html" className="navbar-link">
					About
				</a>
				<a href="contact.html" className="navbar-link">
					Contact
				</a>
			</div>

			<div className="navbar-right">
				<a className="navbar-link-nohover navbar-social">
					<img src="facebook.avif" />
				</a>
				<a className="navbar-link-nohover navbar-social">
					<img src="instagram.avif" />
				</a>
				<a className="navbar-link-nohover navbar-social">
					<img src="linkedin.avif" />
				</a>
			</div>
		</nav>
	);
};
