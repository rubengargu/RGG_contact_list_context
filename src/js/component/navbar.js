import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3 d-flex justify-content-center">
			
			<div className="d-flex justify-content-center">
				<Link to="/register">
					<button className="btn_navbar  ">New contact</button>
				</Link>
			</div>
		</nav>
	);
};