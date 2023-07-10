import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { CgMenuRight, CgMenuRightAlt } from "react-icons/cg";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";
const Navbar = () => {
	let [dropdown, setDropdown] = useState(false);
	let [active, setIndex] = useState(0);
	let navItems = [
		{ index: "home", name: "Home" },
		{ index: "about", name: "About Us" },
		{ index: "services", name: "Services" },
		{ index: "team", name: "Our Team" },
		{ index: "contact", name: "Contact Us" },
	];
	return (
		<nav className="navbar d-flex">
			<a href="#" className="nav-brand">
				<img className="logo" src={logo} alt="Logo" />
			</a>
			<ul className={dropdown ? "nav-items drop-items" : "nav-items"}>
				{navItems.map((navItem, i) => (
					<li
						onClick={() => setIndex(i)}
						className="nav-item d-inline"
						key={i}
					>
						<a
							className={
								active === i
									? "nav-link nav-link-active"
									: "nav-link"
							}
							href={"#" + navItem.index}
						>
							{navItem.name}
						</a>
					</li>
				))}
			</ul>
			<button
				className="btn-dropdown d-none"
				onClick={() => setDropdown(!dropdown)}
			>
				{dropdown ? <LiaTimesSolid /> : <CgMenuRight />}
			</button>
		</nav>
	);
};

export default Navbar;
