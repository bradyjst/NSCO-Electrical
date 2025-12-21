import "./HomePage.css";
import React from "react";
import { Navbar } from "./Navbar";
import { useEffect } from "react";

export const HomePage: React.FC = () => {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
						observer.unobserve(entry.target); // animate once
					}
				});
			},
			{
				threshold: 0.1,
			}
		);

		document.querySelectorAll(".reveal").forEach((el) => {
			observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<div className="homepage-container">
			<div className="homepage-image-container">
				<Navbar></Navbar>
				<h1 className="homepage-image-h1">NSCO Electric</h1>
			</div>
			<div className="homepage-services-container">
				<h1 className="homepage-h1">Services</h1>
				<div className="homepage-services">
					<div className="service-card reveal">
						<img src="evcharger.avif" />
						<h3>EV Chargers</h3>
						<p>
							From installation to maintenance, we provide comprehensive
							electric vehicle charging solutions to meet your needs and keep
							your EV running smoothly.
						</p>
					</div>
					<div className="service-card reveal">
						<img src="cameras.avif" />
						<h3>Security Cameras</h3>
						<p>
							Protect your property with state-of-the-art security camera
							systems. Our expert team ensures professional installation and
							setup for maximum security.
						</p>
					</div>
					<div className="service-card reveal">
						<img src="residential.avif" />
						<h3>Residential</h3>
						<p>
							Our residential electrical services cover everything from lighting
							and wiring to electrical panel upgrades. Trust us to keep your
							home safe and functional.
						</p>
					</div>
					<div className="service-card reveal">
						<img src="commercial.avif" />
						<h3>Commercial</h3>
						<p>
							We offer a wide range of electrical solutions for businesses,
							including wiring, lighting, and electrical system upgrades to
							ensure smooth operations.
						</p>
					</div>
				</div>
			</div>
			<section className="reviews-section">
				<h2>Trusted by Local Customers</h2>

				<div className="reviews-embed">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5209.401710584116!2d-122.56560992270676!3d49.244160571387184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54842b5779d1e52b%3A0xf7f06e6d90bbd9a4!2snscoelectric!5e0!3m2!1sen!2sca!4v1766292446299!5m2!1sen!2sca"
						width="100%"
						height="450"
						style={{ border: 0 }}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</div>
			</section>
			<section className="reviews-section">
				<h2>What Our Customers Say</h2>

				<div className="reviews-grid">
					<img src="review2.png" alt="Google review" />
					<img src="review1.png" alt="Google review" />
					<img src="review3.png" alt="Google review" />
				</div>

				<a
					href="https://www.google.com/maps/place/nscoelectric"
					target="_blank"
					rel="noopener noreferrer"
					className="link-btn"
				>
					Read all reviews on Google
				</a>
			</section>
			<footer className="site-footer">
				<div className="footer-content">
					<span className="footer-name">NSCO Electric</span>

					<a href="tel:16045551234" className="footer-link">
						(604) 555-1234
					</a>

					<a href="mailto:info@nscoelectric.com" className="footer-link">
						info@nscoelectric.com
					</a>
				</div>
			</footer>
		</div>
	);
};
