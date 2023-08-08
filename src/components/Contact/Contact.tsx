import "./Contact.css";
import Form from "./Form";
import { infos } from "./Info";

const Contact = () => {
	return (
		<section id="contact" className="d-grid contact text-center container">
			<div className="section-header text-center contact-header">
				<p className="section-header-content color-primary">
					Connect for Collaboration.
				</p>
				<header className="section-header-title color-heading">
					Contact Us
				</header>
			</div>
			<div className="info mt-1 space-between d-flex">
				{infos.map((info, index) => (
					<div key={index} className="info-content text-left">
						<header className="info-content-header">
							<span className="icon">{<info.icon />}</span>{" "}
							<span className="font-lg pl-2">{info.name}</span>
						</header>
						<p className="pl-2">{info.value}</p>
					</div>
				))}
			</div>
			<div className="form">
				<Form />
			</div>
			<div className="map">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3674.756378238404!2d96.511882!3d22.922355000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDU1JzIwLjUiTiA5NsKwMzAnNDIuOCJF!5e0!3m2!1sen!2smm!4v1688973338384!5m2!1sen!2smm"
					width="100%"
					height="130%"
					className="map-frame"
					style={{ border: "0", marginTop: "-150px" }}
					allowFullScreen={true}
					referrerPolicy={"no-referrer-when-downgrade"}
					loading={"lazy"}
				></iframe>
			</div>
		</section>
	);
};

export default Contact;
