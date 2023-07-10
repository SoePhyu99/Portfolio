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
		<section className="container contact text-center">
			<h2>Contact Us</h2>
			<div className="d-flex contact-info">
				{infos.map((info, index) => (
					<div className="info-content text-left">
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
		</section>
	);
};

export default Contact;
