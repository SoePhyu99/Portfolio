import "./Home.css";

const Home = () => {
	return (
		<section className="container home text-center d-flex">
			<header className="page-header">Welcome to Varoon Valley</header>
			<p className="page-content">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
				eius voluptate beatae asperiores, nostrum aliquid error? Ad
				aliquid provident numquam?
			</p>
			<div className="page-actions d-flex">
				<a href="#contact" className="btn-action d-block">
					Work With Us
				</a>
				<a href="#about" className="btn-action d-block">
					More
				</a>
			</div>
		</section>
	);
};

export default Home;
