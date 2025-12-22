import { useEffect } from "react";
import { Layout } from "../Components/Layout/Layout";
import { HeroSection } from "../Components/HeroSection/HeroSection";
import { MapSection } from "../Components/MapSection/MapSection";
import { ReviewsSection } from "../Components/ReviewSection/ReviewSection";
import { ServicesSection } from "../Components/ServiceSection/ServiceSection";
import "../animations.css";

export const HomePage = () => {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);

		document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);

	return (
		<Layout>
			<HeroSection />
			<ServicesSection />
			<MapSection />
			<ReviewsSection />
		</Layout>
	);
};
