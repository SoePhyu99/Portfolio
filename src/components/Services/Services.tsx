import "./Services.css";
import Development from "./DevelopmentPage";
import { useState } from "react";
import { developments } from "./Developments";
import Lottie from "lottie-react";
import mobile from "../../assets/images/svg/mobile-dev-animated.json";
import web from "../../assets/images/svg/web-dev-animated.json";
import uiux from "../../assets/images/svg/uiux-animated.json";

const Services = () => {
	const [dev, setDev] = useState(-1);
	const img = [web, mobile, uiux];
	return (
		<>
			<section id="services" className="container">
				<div className="section-header text-center">
					<p className="section-header-content color-primary">
						Innovative digital services.
					</p>
					<header className="section-header-title color-heading">
						Custom Development
					</header>
				</div>
				<div className="services d-flex mt-1 space-between">
					{developments.map((development, index) => (
						<div className="mt-1 mb-1 service-container radius bg-secondary">
							<div className="service p-1" key={index}>
								<Lottie
									className="service-img"
									animationData={img[index]}
									loop={true}
								/>
								<div className="pt-2 service-info text-left">
									<header className="font-l header color-accent">
										{development.header}
									</header>
									<p className="service-content mt-1 mb-1">
										{development.description.substring(
											0,
											140
										)}
										...
									</p>
									<button
										onClick={() =>
											setDev(index === dev ? -1 : index)
										}
										className="btn btn-primary"
									>
										{dev === index ? "Less" : "More"}
									</button>
								</div>
							</div>
							{dev === index && (
								<div className="mt-1 hide-content d-none">
									<Development
										development={developments[dev]}
									/>
								</div>
							)}
						</div>
					))}
				</div>
				{dev != -1 && (
					<div className="mt-1 show-content">
						<Development development={developments[dev]} />
					</div>
				)}
			</section>
		</>
	);
};

export default Services;
