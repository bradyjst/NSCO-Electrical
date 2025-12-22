import { Layout } from "../Components/Layout/Layout";
import { Navbar } from "../Components/NavBar/Navbar";

export const ContactPage = () => {
	return (
		<Layout>
			<Navbar />
			<section style={{ padding: "4rem 1rem", textAlign: "center" }}>
				<h1>Book an Appointment</h1>
				<p>Choose a time that works best for you.</p>

				<div style={{ maxWidth: "900px", margin: "2rem auto" }}>
					<iframe
						src="https://calendly.com/morid-merat"
						width="100%"
						height="900"
						style={{ border: "1px solid black" }}
					/>
				</div>

				<p>
					Prefer to call? <a href="tel:1-778-344-2686">1-778-344-2686</a>
				</p>
			</section>
		</Layout>
	);
};
