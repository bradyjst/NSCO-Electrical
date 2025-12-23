import "./ReviewSection.css";
import { ReviewCard } from "../../Components/ReviewCard/ReviewCard";
import { GoogleRating } from "../../Components/GoogleRating/GoogleRating";

const REVIEWS = [
	{
		avatar:
			"https://lh3.googleusercontent.com/a-/ALV-UjVbjk2q8nAkxkaFCNjcb_e_lss_3-W1v1soY_fxauoe60oUU6Qr=w72-h72-p-rp-mo-br100",
		name: "Brady S",
		rating: "★★★★★",
		text: "did a great job replacing my service panel. professional, clean, and reliable work!",
	},
	{
		avatar:
			"https://lh3.googleusercontent.com/a/ACg8ocL9-M_ImWBTCTSBlZEeJQ04EmNHhpezd4S9-Kw9-LFHNz0AHg=w72-h72-p-rp-mo-br100",
		name: "Masoud Sanati",
		rating: "★★★★★",
		text: "They upgraded all my home lighting. Morid did a clean, professional job, and the quote was very reasonable. I’m happy with the results and highly recommend their service..",
	},
	{
		avatar:
			"https://lh3.googleusercontent.com/a-/ALV-UjVbjk2q8nAkxkaFCNjcb_e_lss_3-W1v1soY_fxauoe60oUU6Qr=w72-h72-p-rp-mo-br100",
		name: "Bahareh Razmjoo",
		rating: "★★★★★",
		text: "Installed our EV charger perfectly. Great communication throughout.",
	},
];

export const ReviewsSection = () => {
	return (
		<section className="reviews-section">
			<h2>What Our Customers Say</h2>

			<GoogleRating />

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
