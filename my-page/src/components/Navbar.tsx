import React, { FC } from "react"
import { Link, NavLink } from "react-router-dom"

interface NavigationProps {
	logo: string
	main: string
	task: string
}

const Navbar: FC<NavigationProps> = (props) => {
	return (
		<>
			<nav>
				<div className="container">
					<Link to="/">{props.logo}</Link>
					<button aria-expanded="false"></button>
					<div className="navbar">
						<ul>
							<li>
								<NavLink
									to="/"
									//activeClassName="active"
									className="nav"
								>
									{props.main}
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/"
									//activeClassName="active"
									className="nav"
								>
									{props.task}
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<header></header>
		</>
	)
}

export default Navbar
