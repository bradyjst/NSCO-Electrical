import React from "react";
import "./Footer.css";

export const Footer: React.FC = () => {
	return (
		<footer className="site-footer">
			<div className="footer-content">
				<div className="footer-col footer-left">
					<span className="footer-name">
						NSCO Electric – Licensed Electrician
					</span>
				</div>

				<div className="footer-col footer-center">
					<a href="tel:1-778-344-2686" className="footer-link">
						1-778-344-2686
					</a>
				</div>
				<div className="footer-col footer-center">
					<a href="mailto:info@nscoelectric.com" className="footer-link">
						info@nscoelectric.com
					</a>
				</div>
				<div className="footer-col footer-right">
					<a
						href="https://www.google.com/maps/search/?api=1&query=23795+133Ave+Maple+Ridge+BC"
						target="_blank"
						rel="noopener noreferrer"
						className="footer-link"
					>
						23795 133Ave Maple Ridge BC, V4R2T9
					</a>
				</div>
			</div>
		</footer>
	);
};
