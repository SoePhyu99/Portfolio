import "./Home.css";
import Lottie from "lottie-react";
import WelcomeImg from "../../assets/images/svg/welcome-animated.json";

const Home = () => {
	return (
		<section className="container home d-grid">
			<div className="home-content">
				<h3 className="header">Embrace Innovation with</h3>
				<header className="page-header color-heading">
					Varoon Valley.
				</header>
				<p className="page-content">
					Welcome to{" "}
					<span className=" font-l header">Varoon Valley</span>, where
					innovation meets excellence. We are thrilled to have you
					join us on our mission to deliver cutting-edge software
					solutions tailored to your unique needs. Trust us to turn
					your digital vision into reality and unlock the full
					potential of your business.
				</p>
				<div className="page-actions d-flex flex-wrap">
					<a
						href="#contact"
						className="btn btn-large btn-primary mr-1 d-block"
					>
						Work With Us
					</a>
					<a
						href="#about"
						className="btn btn-large btn-primary d-block"
					>
						More
					</a>
				</div>
			</div>
			<div className="home-img">
				<Lottie animationData={WelcomeImg} loop={true} />
			</div>
		</section>
	);
};

export default Home;
