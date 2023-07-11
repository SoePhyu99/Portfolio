import "./Footer.css";
import {
	AiOutlineCopyright,
	AiOutlineGithub,
	AiOutlineInstagram,
	AiOutlineLinkedin,
	AiOutlineTwitter,
} from "react-icons/ai";
const Footer = () => {
	const logos = [
		<AiOutlineLinkedin />,
		<AiOutlineInstagram />,
		<AiOutlineGithub />,
		<AiOutlineTwitter />,
	];
	return (
		<footer className="footer container">
			<div className="footer-content d-grid">
				<div className="footer-logo">
					<a href="#" className="footer-brand">
						Varoon Valley
					</a>
					<ul className="socials">
						{logos.map((logo, index) => (
							<li className="d-inline social-link" key={index}>
								<a href="#">{logo}</a>
							</li>
						))}
					</ul>
				</div>
				<div className="quick-link footer-items">
					<h4>Quick Link</h4>
					<ul className="mt-1">
						<li className="footer-links">
							<a href="#" className="footer-link">
								Home
							</a>
						</li>
						<li className="footer-links">
							<a href="#" className="footer-link">
								Services
							</a>
						</li>
						<li className="footer-links">
							<a href="#" className="footer-link">
								Contact Us
							</a>
						</li>
					</ul>
				</div>
				<div className="company footer-items">
					<h4>Company</h4>
					<ul className="mt-1">
						<li className="footer-links">
							<a href="#" className="footer-link">
								About Us
							</a>
						</li>
						<li className="footer-links">
							<a href="#" className="footer-link">
								Our Team
							</a>
						</li>
					</ul>
				</div>
				<div className="adress">
					<h4>Adress</h4>
					<p className="footer-links mt-1">
						Mogoke, Mandalay, Myanmar
					</p>
					<p className="footer-links">sample@gmail.com</p>
					<p className="footer-links">+95 912 345 6789</p>
				</div>
			</div>
			<div className="footer-base text-center">
				<AiOutlineCopyright />
				Copyright 2023 | Varoon Valley
			</div>
		</footer>
	);
};

export default Footer;
