import "./About.css";
import { FiCornerRightDown } from "react-icons/fi";
import html from "../../assets/images/html-5.png";
import css from "../../assets/images/css-3.png";
import js from "../../assets/images/js.png";
import ts from "../../assets/images/typescript.png";
import java from "../../assets/images/java.png";
import react from "../../assets/images/science.png";
import php from "../../assets/images/php.png";
import bootstrap from "../../assets/images/bootstrap.png";

const About = () => {
	const tools = [html, css, js, ts, bootstrap, java, react, php];
	return (
		<section id="about" className="about container">
			<h2 className="mb-1 text-center">What We Are</h2>
			<div className="mt-1 mb-1">
				<div className="about-content mb-2 text-left">
					<p className="mb-1">
						<span className="head">Lorem</span> ipsum dolor sit,
						amet consectetur adipisicing elit. At saepe provident,
						asperiores vero esse veniam voluptatem laborum ullam
						totam cupiditate reiciendis, velit, numquam fugiat
						dolores praesentium libero quasi consequatur sed. Lorem
						ipsum dolor sit amet, consectetur adipisicing elit.
						Soluta, est? Rem et minus laboriosam magni repellendus
						esse quis eaque facere ex quasi! Eos exercitationem quis
						fuga alias. Distinctio, dolor obcaecati?
					</p>
				</div>
				<div className="about-assist">
					<ul className="assist-lists text-center d-flex space-between">
						<li className="assist-items mb-1">
							<header className="assist-header mb-1">
								Years of Experiences
							</header>
							<p className="mt-1">3+</p>
						</li>
						<li className="assist-items mb-1">
							<header className="assist-header mb-1">
								Projects
							</header>
							<p className="mt-1">10</p>
						</li>
						<li className="assist-items mb-1">
							<header className="assist-header mb-1">
								Languages & Tools
							</header>
							<div className="d-flex tools d-inline">
								<ul>
									{tools.map((tool, index) => (
										<li
											key={index}
											className="d-inline tool"
										>
											<img src={tool} alt="tool" />
										</li>
									))}
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default About;
