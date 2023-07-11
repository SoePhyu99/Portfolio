import "./Contact.css";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
	let infos = [
		{ icon: <AiOutlinePhone />, name: "Phone", value: "+95 912 345 6789" },
		{ icon: <HiOutlineMail />, name: "Email", value: "sample@gmail.com" },
		{
			icon: <HiOutlineLocationMarker />,
			name: "Location",
			value: "Mogoke, Mandalay, Myanmar",
		},
	];
	return (
		<section id="contact" className="d-grid contact text-center container">
			<h2 className="header mb-1">Get in Touch</h2>
			<div className="info space-between mt-1 mb-1 d-flex">
				{infos.map((info, index) => (
					<div key={index} className="info-content text-left">
						<header className="info-content-header">
							<span className="icon">{info.icon}</span>{" "}
							<span className="icon-header pl-2">
								{info.name}
							</span>
						</header>
						<p className="pl-2">{info.value}</p>
					</div>
				))}
			</div>
			<div className="form">
				<header className="form-header mt-1 mb-2">
					How can we help?
				</header>
				<form className="contact-form text-left">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						className="form-input"
						placeholder="Your Name"
						id="name"
					/>
					<label htmlFor="email">Email</label>
					<input
						className="form-input"
						type="text"
						placeholder="Your Email"
						id="email"
					/>
					<label htmlFor="message">Message</label>
					<textarea
						name="message"
						id="message"
						placeholder="Type Message Here"
						className="form-input area-input"
						rows={5}
					></textarea>
					<button className="btn-submit">Send</button>
				</form>
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
