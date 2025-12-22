import "./ReviewSection.css";
export const ReviewsSection = () => {
	return (
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
	);
};
