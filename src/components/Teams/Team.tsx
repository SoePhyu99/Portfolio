import "./Team.css";
import { members } from "./members";
const Team = () => {
	return (
		<section id="team" className="container team text-center">
			<div className="section-header">
				<p className="section-header-content color-primary">
					Unleashing Team Excellence.
				</p>
				<header className="section-header-title color-heading">
					Talent Network
				</header>
			</div>
			<div className="d-flex flex-wrap space-between cards">
				{members.map((member, index) => (
					<div key={index} className="card m-1 bg-secondary radius">
						<img src={member.img} alt="" className="card-img" />
						<div className={"card-description p-1 text-left"}>
							<header className="font-sm color-heading">
								{member.position}
							</header>
							<p className="color-accent">{member.name}</p>
							<p className="member-description mt-1 font-sm">
								{member.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Team;
