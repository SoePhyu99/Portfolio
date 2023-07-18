import "./Team.css";
import user from "../../assets/images/user.png";
const Team = () => {
	let arr = [0, 1, 2, 3, 4, 5];
	return (
		<section id="team" className="container team text-center">
			<div className="section-header">
				<p className="section-header-content color-accent">
					Unleashing Team Excellence.
				</p>
				<header className="section-header-title">Talent Network</header>
			</div>
			<div className="d-flex flex-wrap space-between cards">
				{arr.map((a, index) => (
					<div key={a} className="card m-1 bg-secondary radius">
						<img src={user} alt="" className="card-img" />
						<div className={"card-description p-1 text-left"}>
							<header className="font-sm">
								{index === 0 ? "Founder" : "Software Developer"}
							</header>
							<p className="color-accent">John Smith</p>
							<p className="member-description mt-1 font-sm">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Quidem, minima?
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Team;
