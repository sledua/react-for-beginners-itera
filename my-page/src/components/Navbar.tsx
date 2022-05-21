import React, { FC } from "react"
import { Link, NavLink } from "react-router-dom"
interface nav {
	name: string
	path: string
}
interface NavigationProps {
	logo: string
	navigation: nav[]
}

const Navbar: FC<NavigationProps> = (props) => {
	const renderNavigation = () => {
		return Object.keys(props.navigation).map((id, index) => {
			return (
				<li className="navbar-item" key={index.toString()}>
					<NavLink
						to={props.navigation[index].path}
						// activeClassName="active"
						className="navbar-item-link"
					>
						{props.navigation[index].name}
					</NavLink>
				</li>
			)
		})
	}
	return (
		<>
			<nav className="navbar">
				<div className="container flex">
					<Link to={props.navigation[4].path}>{props.logo}</Link>
					<button className="menu-toggler" aria-expanded="false"></button>
					
						<ul className="navbar-list flex">{renderNavigation()}</ul>
					
				</div>
			</nav>
			<header className="header">
				
					<span></span>
					<div className="container">
						<h1>{props.logo}</h1>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, officiis?</p>
					</div>
				
			</header>
		</>
	)
}

export default Navbar
