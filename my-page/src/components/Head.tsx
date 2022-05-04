import React from 'react'

const Head = (props: any) => {
	const renderContact = () => {
			return Object.keys(props.links).map((link, index) => {
					return (
					<li key={Math.random().toString()}>
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
			<p>Intern React Developer</p>
			<div className="App-conatat">
				<ul>
					{renderContact()}
				</ul>
			</div>
		</header>
	)
}

export default Head
