import "./Services.css";
import Development from "./DevelopmentPage";
import { useState } from "react";
import { developments } from "./Developments";

const Services = () => {
	const [dev, setDev] = useState(-1);
	return (
		<>
			<section id="services" className="container">
				<div className="section-header text-center">
					<p className="section-header-content color-accent">
						Innovative digital services.
					</p>
					<header className="section-header-title">
						Custom Development
					</header>
				</div>
				<div className="services d-flex mt-1 space-between">
					{developments.map((development, index) => (
						<div className="mt-1 mb-1">
							<div
								className="service p-1 radius bg-secondary"
								key={index}
							>
								<img
									className="service-img"
									src={development.img}
									alt=""
								/>
								<div className="pt-2 service-info text-left">
									<header className="font-l header">
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
