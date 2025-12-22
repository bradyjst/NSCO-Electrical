import { ReviewCard } from "../ReviewCard/ReviewCard";
import "./ReviewSection.css";

const REVIEWS = [
	{
		name: "Brady S",
		rating: "⭐⭐⭐⭐⭐",
		text: "did a great job replacing my service panel. professional, clean, and reliable work!",
	},
	{
		name: "Masoud Sanati",
		rating: "⭐⭐⭐⭐⭐",
		text: "They upgraded all my home lighting. Morid did a clean, professional job, and the quote was very reasonable. I’m happy with the results and highly recommend their service..",
	},
	{
		name: "Bahareh Razmjoo",
		rating: "⭐⭐⭐⭐⭐",
		text: "Installed our EV charger perfectly. Great communication throughout.",
	},
];

export const ReviewsSection = () => {
	return (
		<section className="reviews-section">
			<h2>What Our Customers Say</h2>

			<div className="reviews-grid">
				{REVIEWS.map((review) => (
					<ReviewCard key={review.name} {...review} />
				))}
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
	);
};
