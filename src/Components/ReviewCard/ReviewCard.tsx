type ReviewCardProps = {
	name: string;
	rating: string;
	text: string;
	avatar?: string;
};

export const ReviewCard = ({ name, rating, text, avatar }: ReviewCardProps) => {
	return (
		<div className="review-card reveal">
			<div className="review-header">
				{avatar && <img src={avatar} alt={name} />}
				<div>
					<strong>{name}</strong>
					<div className="stars">{rating}</div>
				</div>
			</div>

			<p className="review-text">“{text}”</p>
		</div>
	);
};
