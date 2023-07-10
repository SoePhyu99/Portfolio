import "./Team.css";
import { AiFillHtml5 } from "react-icons/ai";
import logo from "../../assets/images/logo.png";
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
		<section id="team" className="container team text-center">
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
								src={logo}
								alt="Team Member"
							/>
							<div className="languages d-grid">
								<div>
									<AiFillHtml5 />
								</div>
								<div>
									<BiSolidFileCss />
								</div>
								<div>
									<BiLogoJavascript />
								</div>
								<div>
									<BiLogoTypescript />
								</div>
								<div>
									<BiLogoJava />
								</div>
								<div>
									<BiLogoReact />
								</div>
								<div>
									<BiLogoPhp />
								</div>
								<div>
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
