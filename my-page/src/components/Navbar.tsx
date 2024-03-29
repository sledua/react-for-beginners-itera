import { FC } from "react"
import { Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
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
		<nav className="navbar">
			<div className="container flex">
				<Link to={props.navigation[4].path}>{props.logo}</Link>
				<button className="menu-toggler" aria-expanded="false">
					<FontAwesomeIcon icon={faBars} />
				</button>
				<ul className="navbar-list flex">{renderNavigation()}</ul>
			</div>
		</nav>
	)
}

export default Navbar
