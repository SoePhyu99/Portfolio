import "./Navbar.css";
import { CgMenuRight } from "react-icons/cg";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";
const Navbar = () => {
	let [dropdown, setDropdown] = useState(false);
	let navItems = [
		{ index: "home", name: "Home" },
		{ index: "about", name: "About Us" },
		{ index: "services", name: "Services" },
		{ index: "team", name: "Our Team" },
		{ index: "contact", name: "Contact Us" },
	];
	return (
		<nav className="navbar d-flex space-between container">
			<a href="#" className="nav-brand">
				VaroonValley
			</a>
			<ul className={dropdown ? "nav-items drop-items" : "nav-items"}>
				{navItems.map((navItem, i) => (
					<li className="nav-item d-inline pl-1 pr-1" key={i}>
						<a
							className="nav-link color-accent"
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
