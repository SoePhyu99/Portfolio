import { socials } from "../Tools/socials";
import "./About.css";
const About = () => {
	return (
		<section id="about">
			<div className="about d-grid">
				<div className="about-content bg-primary container text-left">
					<div className="section-header">
						<p className="section-header-content color-secondary">
							Empowering Digital Success.
						</p>
						<header className="section-header-title color-accent">
							About Us
						</header>
					</div>
					<p className="about-description font-lg">
						At Varoon Valley, we are passionate about leveraging
						technology to drive innovation and empower businesses.
						With a team of skilled professionals and a commitment to
						excellence, we specialize in developing cutting-edge
						software solutions that address our clients' unique
						needs. Our mission is to deliver exceptional software
						products and services that help businesses thrive in the
						digital age. With a focus on collaboration, integrity,
						and customer satisfaction, we are dedicated to making a
						positive impact through our expertise and technological
						solutions.
					</p>
					<ul className="socials">
						<li className="d-block mt-1">Follow Us</li>
						{socials.map((social, index) => (
							<li
								className="d-inline mt-1 pr-1 follow-link"
								key={index}
							>
								<a
									target="blank"
									style={{ color: social.color }}
									href={social.link}
								>
									{<social.icon />}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className="background-space"></div>
			</div>
		</section>
	);
};

export default About;
