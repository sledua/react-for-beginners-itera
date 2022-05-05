import React, {FC} from 'react'

interface IContacts {
	link: string;
	name: string;
	icon?: string;
}
interface HeadProps {
	name: string;
	position: string;
	links: IContacts[];
}
const Head: FC<HeadProps> = props => {
	//console.log(autor.name)
	const renderContact = () => {
			return Object.keys(props.links).map((link, index) => {
					return (
					<li key={link.toString()}>
						<a 
						target="_blank"
						rel="noopener noreferrer"
						href={props.links[index].link}>{props.links[index].name}</a>
					</li>)
				})
			}
	return (
		<header className="App-header flex">
			<h2>{props.name}</h2>
			<p>{props.position}</p>
			<div className="App-conatat">
				<ul>
					{renderContact()}
				</ul>
			</div>
		</header>
	)
}

export default Head
