import React from "react";
import "./Navbar.css";

export const Navbar: React.FC = () => {
	return (
		<nav className="navbar-container">
			<div className="navbar-left">
				<a className="navbar-link">Logo</a>
			</div>

			<div className="navbar-center">
				<a className="navbar-link">Home</a>
				<a className="navbar-link">Services</a>
				<a className="navbar-link">About</a>
				<a className="navbar-link">Contact</a>
			</div>

			<div className="navbar-right">
				<a className="navbar-link navbar-social">
					<img src="facebook.avif" />
				</a>
				<a className="navbar-link navbar-social">
					<img src="instagram.avif" />
				</a>
				<a className="navbar-link navbar-social">
					<img src="linkedin.avif" />
				</a>
			</div>
		</nav>
	);
};
