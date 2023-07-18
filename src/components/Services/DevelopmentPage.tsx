import "./Services.css";
import { Development } from "./Developments";

interface Props {
	development: Development;
}

const DevelopmentPage = ({ development }: Props) => {
	return (
		<section className="development radius text-left">
			<header className="header font-l p-1 bg-secondary">
				{development.header}
			</header>
			<div className="stages p-1 d-grid">
				{development.stages.map((stage, index) => (
					<div className="stage radius text-center" key={index}>
						<img
							width={"90px"}
							src={stage.source}
							alt=""
							className="p-1"
						/>
						<p>{stage.name}</p>
					</div>
				))}
			</div>
			<p className="dev-description p-1">{development.description}</p>
			<div className="dev-tools p-1">
				<h3 className="header ">Technologies & Tools</h3>
				<ul className="d-flex flex-wrap mt-1">
					{development.tools.map((tool, index) => (
						<li className="pr-1" key={index}>
							<img src={tool} alt="" width={"30px"} />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default DevelopmentPage;
