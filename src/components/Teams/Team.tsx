import "./Team.css";
import { AiFillHtml5 } from "react-icons/ai";
import freelancer from "../../assets/images/freelancer.png";
import founder from "../../assets/images/founder.jpeg";
import {
	BiLogoJava,
	BiLogoJavascript,
	BiLogoPhp,
	BiLogoReact,
	BiLogoTypescript,
	BiSolidFileCss,
} from "react-icons/bi";
import { FaLaravel } from "react-icons/fa";
const Team = () => {
	let arr = [1, 2, 3, 4];
	return (
		<section className="container team text-center">
			<h2>Meet Our Team</h2>
			<div className="card founder">
				<div className="hexagon">
					<img src={founder} alt="" className="profile-img" />
				</div>
				<header className="card-header">Name(Founder)</header>
				<p className="card-content">Lorem ipsum dolor sit amet.</p>
			</div>
			<div className="member">
				{arr.map((item, index) => (
					<div key={index} className="card">
						<div className="hexagon">
							<img
								className="profile-img"
								src={freelancer}
								alt="Team Member"
							/>
							<div className="languages d-grid">
								<div className="p-1">
									<AiFillHtml5 />
								</div>
								<div className="p-1">
									<BiSolidFileCss />
								</div>
								<div className="p-1">
									<BiLogoJavascript />
								</div>
								<div className="p-1">
									<BiLogoTypescript />
								</div>
								<div className="p-1">
									<BiLogoJava />
								</div>
								<div className="p-1">
									<BiLogoReact />
								</div>
								<div className="p-1">
									<BiLogoPhp />
								</div>
								<div className="p-1">
									<FaLaravel />
								</div>
							</div>
						</div>
						<header className="card-header">
							Name{item} (Position)
						</header>
						<p className="card-content">
							Lorem ipsum dolor sit amet.
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Team;
