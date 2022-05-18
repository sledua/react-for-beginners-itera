import React, {FC} from 'react'
import { Link } from "react-router-dom"
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
	return (
		<footer className='footer'>
			<div className="container">
				<div className="row grid">
					<div className="logo">
						<Link to={props.navigationFooter[4].path}>{props.logo}</Link>
					</div>
					<nav className='nav-footer'>footer navigation</nav>
					<div className="copyright">cope</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
