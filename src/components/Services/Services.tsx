import "./Services.css";
import mobile from "../../assets/images/mobile.png";
import web from "../../assets/images/web.png";
import uiux from "../../assets/images/uiux.png";

const Services = () => {
	return (
		<section id="services" className="container services">
			<h2 className="text-center">Services We Provided</h2>
			<div className="service d-flex">
				<div className="pt-2 service-info">
					<header className="service-header">Web Development</header>
					<p className="service-content">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Cupiditate at fugiat, maxime saepe nihil, fugit ipsam
						qui totam quam tempora nam. Obcaecati iure, optio vitae
						quis consequatur earum minima vero. Lorem ipsum dolor,
						sit amet consectetur adipisicing elit. Aliquam tenetur
						soluta eius consequuntur vero voluptatum laborum ipsa
						quo excepturi quas
					</p>
				</div>
				<img className="service-img" src={web} alt="" />
			</div>
			<div className="service d-flex">
				<img className="service-img" src={mobile} alt="" />
				<div className="pt-2 service-info">
					<header className="service-header">
						Mobile Development
					</header>
					<p className="service-content">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Cupiditate at fugiat, maxime saepe nihil, fugit ipsam
						qui totam quam tempora nam. Obcaecati iure, optio vitae
						quis consequatur earum minima vero. Lorem ipsum dolor,
						sit amet consectetur adipisicing elit. Aliquam tenetur
						soluta eius consequuntur vero voluptatum laborum ipsa
						quo excepturi quas
					</p>
				</div>
			</div>
			<div className="service d-flex">
				<div className="pt-2 service-info">
					<header className="service-header">UI/UX Design</header>
					<p className="service-content">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Cupiditate at fugiat, maxime saepe nihil, fugit ipsam
						qui totam quam tempora nam. Obcaecati iure, optio vitae
						quis consequatur earum minima vero. Lorem ipsum dolor,
						sit amet consectetur adipisicing elit. Aliquam tenetur
						soluta eius consequuntur vero voluptatum laborum ipsa
						quo excepturi quas
					</p>
				</div>
				<img className="service-img" src={uiux} alt="" />
			</div>
		</section>
	);
};

export default Services;
