import "./HomePage.css";
import React from "react";
import { Navbar } from "./Navbar";

export const HomePage: React.FC = () => {
	return (
		<div className="homepage-container">
			<div className="homepage-image-container">
				<Navbar></Navbar>
			</div>
			<div className="homepage-services">
				<h1 className="homepage-h1">Services</h1>
			</div>
		</div>
	);
};
