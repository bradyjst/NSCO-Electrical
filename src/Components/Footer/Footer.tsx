import React from "react";
import "./Footer.css";

export const Footer: React.FC = () => {
	return (
		<footer className="site-footer">
			{" "}
			<div className="footer-content">
				{" "}
				<span className="footer-name">NSCO Electric</span>{" "}
				<a href="tel:1-778-344-2686" className="footer-link">
					{" "}
					1-778-344-2686{" "}
				</a>{" "}
				<a href="mailto:info@nscoelectric.com" className="footer-link">
					{" "}
					info@nscoelectric.com{" "}
				</a>{" "}
			</div>{" "}
		</footer>
	);
};
