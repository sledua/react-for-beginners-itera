import React, {FC} from 'react'
import { Link, NavLink } from "react-router-dom"
interface nav {
	name : string
	path : string
}
interface navigationProps {
	logo: string
	copyright: {}
	navigationFooter: nav[]
}
const Footer: FC<navigationProps> = props => {
	const renderFooterLink = () => {
		return Object.keys(props.navigationFooter).map((value, id) => {
			return (
				<li key={value.toString()}>
					<NavLink to={props.navigationFooter[id].path}>
						{props.navigationFooter[id].name}
					</NavLink>
				</li>
			)
		})
	}
	return (
		<footer className='footer'>
			<div className="container">
				<div className="row flex">
					<div className="column">
					<div className="logo">
						<Link to={props.navigationFooter[4].path}>{props.logo}</Link>
					</div>
					<nav className='nav-footer'>
						<ul className='flex'>
							{renderFooterLink()}
						</ul>
					</nav>
					<p className="copyright">Усі права збережені. Копірайт © 2022 від <a href="/aboutI">Артема</a> </p>
					
					</div>
					<div className="column text-right">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores.</p>
					</div>
					
				</div>
			</div>
		</footer>
	)
}

export default Footer
